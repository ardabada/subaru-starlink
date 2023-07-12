using System.Diagnostics;
using System.Runtime.Intrinsics.Arm;
using Spectre.Console;

namespace Libs2Smali
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //string x = "subaru-starlink\\android\\jars";
            //ClearFiles(x, "*.class");
            //ClearFiles(x, "*.dex");
            //ClearFiles(x, "*.smali");
            //return;

            bool cleanup = true;
            bool compile = true;
            string androidDirectory = "subaru-starlink\\android";
            string androidCustomDirectory = Path.Combine(androidDirectory, "custom");
            var packageToCompile = "com.custom.modules.map";

            AnsiConsole.Progress()
                .AutoClear(false)
                .Columns(new ProgressColumn[]
                {
                    new TaskDescriptionColumn(),
                    new ProgressBarColumn(),
                    new PercentageColumn(),
                    new SpinnerColumn(),
                })
                .Start(ctx =>
                {
                    AnsiConsole.MarkupLine($"Compiling package [blue]{packageToCompile}[/]");

                    var packagePath = GetPackagePath(androidCustomDirectory, packageToCompile);
                    var smaliPackagePath = GetPackagePath(Path.Combine(androidCustomDirectory, "smali"), packageToCompile);
                    if (cleanup)
                    {
                        ClearFiles(packagePath, "*.class");
                        ClearFiles(packagePath, "*.dex");
                        ClearFiles(smaliPackagePath, "*.smali");
                    }

                    var javaFiles = Directory.GetFiles(packagePath, "*.java", SearchOption.AllDirectories)
                        .Select(x => x.Substring(androidCustomDirectory.Length + 1))
                        .ToArray();
                    var javaDirs = javaFiles.Select(x => Path.GetDirectoryName(x)).Distinct().ToArray();
                    AnsiConsole.MarkupLine($"Detected [green]{javaFiles.Length}[/] java files in [green]{javaDirs.Length}[/] directories");

                    ProgressTask? javacTask = null;
                    if (compile)
                    {
                        javacTask = ctx.AddTask("javac", autoStart: false).IsIndeterminate();
                    }
                    var dxTask = ctx.AddTask("dx", autoStart: false);
                    var baksmaliTask = ctx.AddTask("baksmali", autoStart: false);
                    var copyTask = ctx.AddTask("copy", autoStart: false);

                    if (compile)
                    {
                        javacTask.StartTask();
                        string path = string.Join(" ", javaDirs.Select(x => "custom\\" + x + "\\*.java"));
                        var javacArgs = "-target 8 -source 8 -encoding utf8 -cp custom\\ " + path;
                        AnsiConsole.WriteLine("javac " + javacArgs);
                        var pi = new ProcessStartInfo("javac", javacArgs);
                        pi.UseShellExecute = true;
                        pi.CreateNoWindow = false;
                        pi.WorkingDirectory = androidDirectory;
                        var p = Process.Start(pi);
                        p.WaitForExit((int)TimeSpan.FromMinutes(5).TotalMilliseconds);
                        if (p.HasExited)
                        {
                            if (p.ExitCode != 0)
                            {
                                AnsiConsole.MarkupLine("[red] Failed to compile [/]");
                                //AnsiConsole.MarkupLine(p.StandardError.ReadToEnd());
                                Environment.Exit(-1);
                            }
                        }
                        else
                        {
                            AnsiConsole.MarkupLine("[red] Compilation timedout [/]");
                            Environment.Exit(-1);
                        }
                        javacTask.IsIndeterminate = false;
                        javacTask.Increment(100);
                        javacTask.StopTask();
                    }

                    var classFiles = Directory.GetFiles(packagePath, "*.class", SearchOption.AllDirectories)
                        .Select(x => x.Substring(androidCustomDirectory.Length + 1))
                        .ToArray();
                    AnsiConsole.MarkupLine($"Compilation produced [green]{classFiles.Length}[/] classes");

                    dxTask.MaxValue = baksmaliTask.MaxValue = copyTask.MaxValue = classFiles.Length;

                    dxTask.StartTask();
                    var androidHome = Environment.GetEnvironmentVariable("android_home");
                    var dx = Path.Combine(androidHome, "build-tools", "30.0.3", "dx.bat");
                    Parallel.ForEach(classFiles, classFile =>
                    {
                        var fileWihoutExtension = Path.Combine(Path.GetDirectoryName(classFile), Path.GetFileNameWithoutExtension(classFile));
                        if (File.Exists(Path.Combine(androidCustomDirectory, fileWihoutExtension + ".dex")))
                        {
                            dxTask.Increment(1);
                            return;
                        }
                        var args = "--dex --output " + fileWihoutExtension + ".dex " + fileWihoutExtension + ".class";
                        var dxPi = new ProcessStartInfo(dx, args);
                        dxPi.WorkingDirectory = androidCustomDirectory;
                        dxPi.UseShellExecute = false;
                        dxPi.CreateNoWindow = true;
                        dxPi.RedirectStandardOutput = true;
                        dxPi.RedirectStandardError = true;
                        var dxP = Process.Start(dxPi);
                        dxP.WaitForExit(20000);
                        dxTask.Increment(1);
                        if (dxP.HasExited)
                        {
                            if (dxP.ExitCode != 0)
                            {
                                AnsiConsole.MarkupLine("dx " + fileWihoutExtension + " [red]failed[/]");
                                //AnsiConsole.MarkupLine($"[red] Failed to dx[/] {classFile}");
                                //AnsiConsole.MarkupLine(dxP.StandardError.ReadToEnd());
                                //Environment.Exit(-1);
                            }
                        }
                        else
                        {
                            AnsiConsole.MarkupLine("dx " + fileWihoutExtension + " [red]timeout[/]");
                        }
                    });
                    dxTask.StopTask();

                    baksmaliTask.StartTask();
                    Parallel.ForEach(classFiles, classFile =>
                    {
                        var fileWihoutExtension = Path.Combine(Path.GetDirectoryName(classFile), Path.GetFileNameWithoutExtension(classFile));
                        if (File.Exists(Path.Combine(androidCustomDirectory, "smali", fileWihoutExtension + ".smali")))
                        {
                            baksmaliTask.Increment(1);
                            return;
                        }
                        var dex = "\"custom\\" + fileWihoutExtension + ".dex\"";
                        var baksmaliPi = new ProcessStartInfo("java", @"-jar tools\baksmali2.jar -o custom\smali " + dex);
                        //var baksmaliPi = new ProcessStartInfo("java", @"-jar tools\baksmali.jar disassemble " + dex  + @" -o custom\smali");
                        baksmaliPi.WorkingDirectory = androidDirectory;
                        baksmaliPi.UseShellExecute = false;
                        baksmaliPi.CreateNoWindow = true;
                        baksmaliPi.RedirectStandardOutput = true;
                        baksmaliPi.RedirectStandardError = true;
                        var baksmaliP = Process.Start(baksmaliPi);
                        baksmaliP.WaitForExit(20000);
                        baksmaliTask.Increment(1);
                        if (baksmaliP.HasExited)
                        {
                            if (baksmaliP.ExitCode != 0)
                            {
                                //AnsiConsole.MarkupLine($"[red] Failed to baksmali[/] {dex}");
                                AnsiConsole.MarkupLine("baksmali " + dex + " [red]failed[/]");
                                //AnsiConsole.MarkupLine(baksmaliP.StandardError.ReadToEnd());
                                //Environment.Exit(-1);
                            }
                        }
                        else
                        {
                            AnsiConsole.MarkupLine("baksmali " + dex + " [red]timeout[/]");
                        }
                    });

                    baksmaliTask.StopTask();

                    copyTask.StartTask();

                    var apkPatchedSmaliPath = GetPackagePath(Path.Combine(androidDirectory, "apk", "patched", "smali"), packageToCompile);
                    ClearFiles(apkPatchedSmaliPath, "*.smali");
                    var smaliFiles = Directory.GetFiles(smaliPackagePath, "*.smali", SearchOption.AllDirectories)
                        .Select(x => x.Substring(androidCustomDirectory.Length + 1))
                        .ToArray();
                    foreach (var i in smaliFiles)
                    {
                        var smaliPath = Path.Combine(Path.GetDirectoryName(i), Path.GetFileNameWithoutExtension(i)) + ".smali";
                        var sourcePath = Path.Combine(androidCustomDirectory, smaliPath);
                        var targetPath = Path.Combine(androidDirectory, "apk", "patched", smaliPath);

                        if (File.Exists(sourcePath))
                        {
                            //AnsiConsole.WriteLine("Copy " + sourcePath + " to " + targetPath);
                            if (!Directory.Exists(Path.GetDirectoryName(targetPath)))
                            {
                                Directory.CreateDirectory(Path.GetDirectoryName(targetPath));
                            }
                            File.Copy(sourcePath, targetPath, true);
                        }
                        else
                        {
                            AnsiConsole.MarkupLine("File [red]{0}[/] doesnt exist", sourcePath);
                        }

                        copyTask.Increment(1);
                    }

                    copyTask.StopTask();
                });
        }

        static void ClearFiles(string basePath, string ext)
        {
            if (Directory.Exists(basePath))
            {
                var filesToRemove = Directory.GetFiles(basePath, ext, SearchOption.AllDirectories);
                foreach (var file in filesToRemove)
                {
                    File.Delete(file);
                }
                AnsiConsole.MarkupLine($"Removed [red]{filesToRemove.Length}[/] [blue]{ext}[/] files");
            }
        }

        static string GetPackagePath(string basePath, string package)
        {
            var parts = new List<string> { basePath };
            parts.AddRange(package.Split('.'));
            return Path.Combine(parts.ToArray());
        }
    }
}
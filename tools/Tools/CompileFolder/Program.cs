using System.Diagnostics;
using System.Net;
using System.Reflection;
using System.Runtime.CompilerServices;
using Spectre.Console;

namespace CompileFolder
{
    internal class Program
    {
        static string[] packagesToSkip = new string[]
        {
            "android", "com\\uievolution", "com\\subaru", "org\\json"
        };
        static bool ShouldSkipPackage(string path)
        {
            foreach (var i in packagesToSkip)
            {
                if (path.StartsWith(i)) return true;
            }
            return false;
        }

        static void Main(string[] args)
        {
            //if (args is null || args.Length != 2)
            //{
            //    Console.WriteLine("Expected package name and file name");
            //    Environment.Exit(-1);
            //}


            string targetPackage = "com.custom.modules.map";
            string targetFile = "MapModuleFactory";

            string androidDirectory = "subaru-starlink\\android";
            string androidCustomDirectory = Path.Combine(androidDirectory, "custom");

            var filesToRemove = Directory.GetFiles(androidCustomDirectory, "*.class", SearchOption.AllDirectories)
                .Union(Directory.GetFiles(androidCustomDirectory, "*.dex", SearchOption.AllDirectories))
                .Union(Directory.GetFiles(androidCustomDirectory, "*.smali", SearchOption.AllDirectories))
                .ToArray();
            foreach (var file in filesToRemove)
            {
                File.Delete(file);
            }

            Console.WriteLine("Removed " + filesToRemove.Length + " old files");

            var javacArgs = @"-target 8 -source 8 -encoding utf8 -cp custom\ custom\" + targetPackage.Replace('.', '\\') + @"\" + targetFile + ".java";
            var pi = new ProcessStartInfo("javac", javacArgs);
            //pi.UseShellExecute = false;
            //pi.CreateNoWindow = true;
            //pi.RedirectStandardOutput = true;
            //pi.RedirectStandardError = true;
            pi.WorkingDirectory = androidDirectory;
            var p = Process.Start(pi);
            p.WaitForExit();
            if (p.ExitCode != 0)
            {
                Console.WriteLine("Failed to compile");
                //Console.WriteLine(p.StandardError.ReadToEnd());
                Environment.Exit(-1);
            }

            var compiledClasses = Directory.GetFiles(androidCustomDirectory, "*.class", SearchOption.AllDirectories)
                .Select(x => x.Substring(androidCustomDirectory.Length + 1))
                .Where(x => !ShouldSkipPackage(x))
                .ToArray(); //deal with $.class?
            Console.WriteLine("Compilation produced " + compiledClasses.Length + " classes");
            Environment.CurrentDirectory = androidCustomDirectory;
            var androidHome = Environment.GetEnvironmentVariable("android_home");
            var dx = Path.Combine(androidHome, "build-tools", "30.0.3", "dx.bat");
            Parallel.ForEach(compiledClasses, i =>
            {
                var fileWihoutExtension = Path.Combine(Path.GetDirectoryName(i), Path.GetFileNameWithoutExtension(i));
                var args = "--dex --output \"" + fileWihoutExtension + ".dex\" \"" + fileWihoutExtension + ".class\"";
                var pi = new ProcessStartInfo(dx, args);
                pi.WorkingDirectory = androidCustomDirectory;
                pi.UseShellExecute = false;
                pi.CreateNoWindow = true;
                pi.RedirectStandardOutput = true;
                pi.RedirectStandardError = true;
                var p = Process.Start(pi);
                Console.WriteLine("dx " + fileWihoutExtension);
                p.WaitForExit();
                if (p.ExitCode != 0)
                {
                    Console.WriteLine("Failed to dx " + i);
                    Console.WriteLine(p.StandardError.ReadToEnd());
                    Environment.Exit(-1);
                }
            });

            Environment.CurrentDirectory = androidDirectory;
            Parallel.ForEach(compiledClasses, i =>
            {
                var fileWihoutExtension = Path.Combine(Path.GetDirectoryName(i), Path.GetFileNameWithoutExtension(i));
                var dex = "\"custom\\" + fileWihoutExtension + ".dex\"";
                var pi = new ProcessStartInfo("java", @"-jar tools\baksmali2.jar -o custom\smali " + dex);
                pi.WorkingDirectory = androidDirectory;
                pi.UseShellExecute = false;
                pi.CreateNoWindow = true;
                pi.RedirectStandardOutput = true;
                var p = Process.Start(pi);
                Console.WriteLine("baksmali " + dex);
                p.WaitForExit();
                if (p.ExitCode != 0)
                {
                    Console.WriteLine("Failed to baksmali " + dex);
                    Environment.Exit(-1);
                }
            });

            var smaliFiles = Directory.GetFiles(androidCustomDirectory, "*.smali", SearchOption.AllDirectories)
                .Select(x => x.Substring(androidCustomDirectory.Length + 1))
                .Where(x => !ShouldSkipPackage(x))
                .ToArray();
            foreach (var i in smaliFiles)
            {
                var smaliPath = Path.Combine(Path.GetDirectoryName(i), Path.GetFileNameWithoutExtension(i)) + ".smali";
                var sourcePath = Path.Combine(androidCustomDirectory, "smali", smaliPath);
                var targetPath = Path.Combine(androidDirectory, "apk", "patched", "smali", smaliPath);

                Console.WriteLine("Copy " + sourcePath + " to " + targetPath);
                if (!Directory.Exists(Path.GetDirectoryName(targetPath)))
                {
                    Directory.CreateDirectory(Path.GetDirectoryName(targetPath));
                }
                File.Copy(sourcePath, targetPath);
            }
        }
    }
}
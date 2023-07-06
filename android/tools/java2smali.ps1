$currentDir = Get-Location

if ($currentDir.Path -like "*\android")  {
    if ($args.Count -gt 1) {
        $package = $args[0]
        $file = $args[1]
        if ($file -match "\.java$") {
            $file = $file -replace "\.java$", ""
        }
        Write-Output "Package: $package"
        Write-Output "File: $file"
        $path = $package.Replace(".", "\")
        $javaPathArg = "custom\" + $path + "\" + $file + ".java"
        $dexPathArg = $path + "\" + $file + ".dex"
        $classPathArg = $path + "\" + $file + ".class"
        Start-Process -FilePath "javac" -NoNewWindow -ArgumentList "-target", "8", "-source", "8", "-cp", "custom\", $javaPathArg -Wait
        Set-Location "custom"
        $androidHome = $env:ANDROID_HOME
        $dxPath = Join-Path -Path $androidHome -ChildPath "build-tools\30.0.3\dx"
        Start-Process -FilePath $dxPath -NoNewWindow -ArgumentList "--dex", "--output", $dexPathArg, $classPathArg -Wait
        Set-Location "..\"
        $dexPathArg = "custom\" + $dexPathArg
        # Start-Process -FilePath "java" -NoNewWindow -ArgumentList "-jar", "tools\baksmali.jar", "disassemble", $dexPathArg, "-o", "custom\smali" -Wait
        Start-Process -FilePath "java" -NoNewWindow -ArgumentList "-jar", "tools\baksmali2.jar", "-o", "custom\smali", $dexPathArg -Wait
        $sourcePath = $currentDir.Path + "\custom\smali\" + $path + "\" + $file + ".smali"
        $destinationPath = $currentDir.Path + "\apk\patched\smali\" + $path + "\" + $file + ".smali"
        Write-Output $sourcePath
        Write-Output $destinationPath
        New-Item -ItemType File -Path $destinationPath -Force
        Copy-Item -Path $sourcePath -Destination $destinationPath -Force
    } else {
        Write-Output "Expected package name and java file name"
    }
} else {
    Write-Output "Please execute java2smali from android folder. (.\tools\java2smali.ps1)"
}
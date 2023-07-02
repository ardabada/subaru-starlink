$cacheDirectories = Get-ChildItem -Path '..\apk' -Directory -Recurse | Where-Object { $_.Name -like "*.cache" }

foreach ($directory in $cacheDirectories) {
    Write-Output "Deleting directory: $($directory.FullName)"
    Remove-Item -Path $directory.FullName -Recurse -Force
}


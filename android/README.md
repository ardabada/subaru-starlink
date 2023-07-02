This document describes steps for unpacking, patching and packing Subaru Starlink Android Application.
All command line actions are being performed from current folder as root.

# Step 1. Unpack APK
```sh
java -jar tools\apktool.jar d apk\subaru_starlink_2.3.8.apk -o apk\patched
```

# Step 2. Do stuff.
- [Display custom page on head unit](patch.md)
- [Inject custom logic to Android Application](custom_module.md)

# Step 3. Change package name
This step is useful if you want to have original Subaru Starlink application installed on your device. Potentially, it could be omitted, but nevertheless renaming package is recommended.

In `apk\patched\AndroidManifest.xml` modify `manifest` xml element by changing the value of `package` attribute:

```diff
<?xml version="1.0" encoding="utf-8" standalone="no"?>
<manifest
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:compileSdkVersion="30"
    android:compileSdkVersionCodename="11"
-   package="com.subaru.global.infotainment.gen2"
+   package="com.your.package.name"
    platformBuildVersionCode="30"
    platformBuildVersionName="11">
``` 

## Step 4. Build and sign

> **Important** `jadx-gui` generates `.cache` folders for each `.smali` file, that was opened. Before building APK file, ensure there are no `.cache` folders from `jadx-gui`, otherwise build might crash. To clear cache in `apk` folder, execute `tools\clear-cache.ps1`.

```sh
java -jar tools\apktool.jar b apk\patched -o apk\repacked.apk
java -jar tools\sign.jar -a apk\repacked.apk
```

The command will produce `apk\repacked-aligned-debugSigned.apk` file, that can be installed on Android device.

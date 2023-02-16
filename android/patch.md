# Patching Android Application
This document describes steps for patching official Subaru Starlink application in order to display custom page on head unit.

## Step 1. Unpack APK

```sh
java -jar tools\apktool.jar d apk\subaru_starlink_2.3.8.apk -o apk\patched
```

## Step 2. SSL unpinning
This step is useful for debug purposes. Potentially, it could be omitted. Original credits to [android-SSL-unpinning by ryanking13](https://github.com/ryanking13/android-SSL-unpinning).

### 1. Patch manifest file:

In `apk\patched\AndroidManifest.xml` modify `application` xml element by adding `networkSecurityConfig`:

```diff
<application
+   android:networkSecurityConfig="@xml/network_security_config"
    android:allowBackup="true"
    android:appComponentFactory="androidx.core.app.CoreComponentFactory"
    android:extractNativeLibs="true"
    android:icon="@drawable/app_icon"
    android:label="@string/app_name"
    android:largeHeap="true"
    android:name="com.subaru.global.infotainment.gen2.StarLinkApplication"
    android:supportsRtl="true"
    android:theme="@style/AppTheme"
    android:usesCleartextTraffic="true">
```

### 2. Patch network security:
Modify `apk\patched\res\xml\network_security_config.xml` as shown below:
```diff
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
-   <base-config cleartextTrafficPermitted="true" />
    <debug-overrides>
        <trust-anchors>
            <certificates src="user" />
        </trust-anchors>
    </debug-overrides>
+   <base-config cleartextTrafficPermitted="true">
+       <trust-anchors>
+           <certificates src="system" />
+           <certificates src="user" />
+       </trust-anchors>
+   </base-config>
</network-security-config>
```

## Step 3. Modify KVS module

Key value store module handles persistent storage of custom data. The data is stored in sqlite database. Initially, head-unit will request value of `launcher_url_vehicle` by making `GET` request to `http://192.168.1.1:80/kvs/launcher_url_vehicle/`. If response code is `200`, head unit expects a valid URI to be returned in response body. Afterwards, it performs a `POST` request to either obtained URL or predefined hardcoded value in `\home\root\local.html`, which by default is:

`https://www.smt-access.com/tif/h5ContentsDownload/launcher_soa/1.0.0/headunit/index.html`.

Source code of KVS module is located in `apk\patched\smali\com\uievolution\microserver\modules\KeyValueStoreModule.smali`. To convert `.smali` to `.java` you can use `jadx-gui`:
```sh
tools\jadx-gui ..\apk\patched\smali\com\uievolution\microserver\modules\KeyValueStoreModule.smali
```
You should see there `h()` method:
```java
private String h() throws KeyValueStore.KVSException {
	int i;
	String path = Uri.parse(getRequestInfo().getRequestUri()).getPath();
	int indexOf = path.indexOf("/", 1);
	String substring = (indexOf == -1 || (i = indexOf + 1) >= path.length()) ? null : path.substring(i);
	if (substring != null) {
		return substring;
	}
	throw new KeyValueStore.KVSException(400, "key is empty");
}
```
The easiest way to return custom value if `launcher_url_vehicle` is requested is to throw exception in that method, similar to *"key is empty"*. This can be done by modifying `KeyValueStoreModule.smali` as shown below:
```diff
.method private h()Ljava/lang/String;
    .locals 4
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/uievolution/microserver/modules/KeyValueStore$KVSException;
        }
    .end annotation
    .line 1
    invoke-virtual {p0}, Lcom/uievolution/microserver/AbstractMSModuleImpl;->getRequestInfo()Lcom/uievolution/microserver/HttpRequestInfo;
    move-result-object v0
    invoke-virtual {v0}, Lcom/uievolution/microserver/HttpRequestInfo;->getRequestUri()Ljava/lang/String;
    move-result-object v0
    invoke-static {v0}, Landroid/net/Uri;->parse(Ljava/lang/String;)Landroid/net/Uri;
    move-result-object v0
    .line 2
    invoke-virtual {v0}, Landroid/net/Uri;->getPath()Ljava/lang/String;
    move-result-object v0
    const-string v1, "/"
    const/4 v2, 0x1
    .line 3
    invoke-virtual {v0, v1, v2}, Ljava/lang/String;->indexOf(Ljava/lang/String;I)I
    move-result v1
    const/4 v3, -0x1
    if-eq v1, v3, :cond_0
    add-int/2addr v1, v2
    .line 6
    invoke-virtual {v0}, Ljava/lang/String;->length()I
    move-result v2
    if-ge v1, v2, :cond_0
    .line 7
    invoke-virtual {v0, v1}, Ljava/lang/String;->substring(I)Ljava/lang/String;
    move-result-object v0
    goto :goto_0
    :cond_0
    const/4 v0, 0x0
    :goto_0
    if-eqz v0, :cond_1
+   const-string v1, "launcher_url_vehicle/"
+   invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z
+   move-result v1
     
+   if-nez v1, :cond_2
    return-object v0
    .line 11
    :cond_1
    new-instance v0, Lcom/uievolution/microserver/modules/KeyValueStore$KVSException;
    const/16 v1, 0x190
    const-string v2, "key is empty"
    invoke-direct {v0, v1, v2}, Lcom/uievolution/microserver/modules/KeyValueStore$KVSException;-><init>(ILjava/lang/String;)V
    throw v0
+   :cond_2
+   new-instance v0, Lcom/uievolution/microserver/modules/KeyValueStore$KVSException;
+   const/16 v1, 0xc8
+   const-string v2, "http://my_custom_url"
+   invoke-direct {v0, v1, v2}, Lcom/uievolution/microserver/modules/KeyValueStore$KVSException;-><init>(ILjava/lang/String;)V
+   throw v0
.end method
```
To verify, that everything is correct, launch `jadx-gui`. You should now see `h()` method changed as below:
```diff
private String h() throws KeyValueStore.KVSException {
	int i;
	String path = Uri.parse(getRequestInfo().getRequestUri()).getPath();
	int indexOf = path.indexOf("/", 1);
	String substring = (indexOf == -1 || (i = indexOf + 1) >= path.length()) ? null : path.substring(i);
	if (substring != null) {
+		if (substring.equals("launcher_url_vehicle/")) {
+			throw new KeyValueStore.KVSException(200, "http://my_custom_url");
+		}
		return substring;
	}
	throw new KeyValueStore.KVSException(400, "key is empty");
}
```
Replace `http://my_custom_url` with address of page, that will be displayed on head unit.

> **Important.** Headunit has built-in SSL validation against predefined list of certificates, located in `/etc/ssl/certs`. Thus, it is not guaranteed, that page under **https** will be loaded. If head unit is unabled to load launcher page, it will show a generic error. **http** links are allowed and are not subject to additional checks.

> **Important** `jadx-gui` generates `.cache` folders for each `.smali` file, that was opened. Before packing APK, ensure you remove `KeyValueStoreModule.smali.cache` directory, located in same directory as `KeyValueStoreModule.smali`. 

## Step 4. Change package name
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

## Step 5. Build and sign

Before building APK file, ensure there are no `.cache` folders from `jadx-gui`, otherwise build might crash.

```sh
java -jar tools\apktool.jar b apk\patched -o apk\repacked.apk
java -jar tools\sign.jar -a apk\repacked.apk
```

The command will produce `apk\repacked-aligned-debugSigned.apk` file, that can be installed on Android device.
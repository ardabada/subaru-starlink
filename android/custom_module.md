# Creating Custom Module
To inject custom endpoint into Subaru Starlink Application, you have to create a custom module. Follow steps below to create a custom module.

## Step 1. Declare function signatures
Firstly, having decompiled `apk` under the `android\apk` folder, you can decompile `.smali` files into `.java` via `jadx-gui`, located in `tools` folder. You need to add relevant declarations for functions, classes and interfaces you'll be interacting with.
Place all declarations in files and structure them based on package name.
For instance, to declare signatures for `MSModule`, open `MSModule.smali` (`android\apk\patched\smali\com\uievolution\microserver\MSModule.smali`) via `jadx-gui`, then copy the decompiled output to `android\custom\com\uievolution\microserver\MSModule.java` and remove all implementations. This is required to properly compile custom module.

## Step 2. Create a custom module
Create `HelloWorldModule.java` in `android\custom\com\custom\modules\hello` directory:
```java
package com.custom.modules.hello;

import com.uievolution.microserver.AbstractMSModuleImpl;

public class HelloWorldModule extends AbstractMSModuleImpl {

    protected byte[] doStart() {
        String response = "Hello, World!";
        sendResponse(200, (String) null, AbstractMSModuleImpl.sCommonResponseHeaders, response.getBytes());
        return null;
    }
}
```

## Step 3. Create a custom module factory
Create `HelloWorldModuleFactory.java` in `android\custom\com\custom\modules\hello` directory:
```java
package com.custom.modules.hello;

import com.uievolution.microserver.MSModule;
import com.uievolution.microserver.MSModuleFactory;
import com.custom.modules.hello.HelloWorldModule;

public class HelloWorldModuleFactory implements MSModuleFactory {
    @Override 
    public MSModule create() {
        return new HelloWorldModule();
    }
}
```

## Step 4. Compile created files
Use `javac` to compile created files. Note, that we explicitly specify `-target` and `-source` to prevent issues with runnig `dx` command later. (See [reference 1](https://stackoverflow.com/questions/10382929/how-to-fix-java-lang-unsupportedclassversionerror-unsupported-major-minor-versi) and [reference 2](https://stackoverflow.com/questions/35710600/javac-target-release-7-conflicts-with-default-source-release-1-8) on stackoverflow).
```sh
javac -target 8 -source 8 -cp custom\ custom\com\custom\modules\hello\HelloWorldModule.java
javac -target 8 -source 8 -cp custom\ custom\com\custom\modules\hello\HelloWorldModuleFactory.java
```
You should see `HelloWorldModule.class` and `HelloWorldModuleFactory.class` located in the directory of specified `.java` files.

## Step 5. Execute `dx` tool from Android SDK
### Step 5.1. Locate and modify `dx.bat`
`dx.bat` is located under `<android_sdk_path>\build-tools\<version>\dx.bat`. Modify last line of `dx.bat` and change `-Djava.ext.dirs=` to `-classpath` as shown below:
```diff
-call "%java_exe%" %javaOpts% -Djava.ext.dirs="%frameworkdir%" -jar "%jarpath%" %params%
+call "%java_exe%" %javaOpts% -classpath "%frameworkdir%" -jar "%jarpath%" %params%
```
### Step 5.2. Execute `dx`
Execute `dx` from `android\custom` directory:
```sh
> cd custom
custom> %android_home%\build-tools\30.0.3\dx --dex --output com\custom\modules\hello\HelloWorldModule.dex com\custom\modules\hello\HelloWorldModule.class
custom> %android_home%\build-tools\30.0.3\dx --dex --output com\custom\modules\hello\HelloWorldModuleFactory.dex com\custom\modules\hello\HelloWorldModuleFactory.class
```
You should see `HelloWorldModule.dex` and `HelloWorldModuleFactory.dex` located in the output directory.

## Step 6. Execute `baksmali`
Navigate to back folder up and execute `baksmali.jar`:
```sh
custom> cd ..
> java -jar tools\baksmali.jar disassemble custom\com\custom\modules\hello\HelloWorldModule.dex -o custom\smali
> java -jar tools\baksmali.jar disassemble custom\com\custom\modules\hello\HelloWorldModuleFactory.dex -o custom\smali
```
The command will produce `.smali` files, located in `custom\smali` directory.

## Step 7. Copy `.smali` files to `apk` folder
Copy produced `.smali` files:
```
custom\smali\com\custom\modules\hello\HelloWorldModule.smali
custom\smali\com\custom\modules\hello\HelloWorldModuleFactory.smali
```
to decompiled `apk` folder:
```
apk\patched\smali\com\custom\modules\hello\HelloWorldModule.smali
apk\patched\smali\com\custom\modules\hello\HelloWorldModuleFactory.smali
```

## Step 8. Modify `microserver.properties`
Open `apk\patched\assets\microserver.properties` and increase the number of modules:
```diff
## total number of modules to be loaded
-module.num=28
+module.num=29
```
Now, add definition of custom module. Specify custom HTTP route prefix as `path` and package and class name of created module factory:
```
module.path.28=/hello
module.factory.28=com.custom.modules.hello.HelloWorldModuleFactory
```
Note, indexes start at 0 and end with `module.num-1`.
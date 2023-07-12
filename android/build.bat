@echo off
del apk\repacked.apk
del apk\repacked-aligned-debugSigned.apk
java -jar tools\apktool.jar b apk\patched -o apk\repacked.apk -f
java -jar tools\sign.jar -a apk\repacked.apk
# startup-times-comparison

Devices:
- Nexus 5, Android 6.0.1 (API level 23)
- iPhone 6S, iOS 11.0

Applications:
- NativeAndroidApp - a simple native Android application.
- NativeIOSApp - a simple native iOS application.
- NativeScriptTsApp - a simple NativeScript Hello World application built with TypeScript.
- NativeScriptNgApp - a simple NativeScript Hello World application built with Angular and TypeScript.

## Android Results

|Release   |NativeAndroidApp|NativeScriptTsApp|NativeScriptNgApp|
|:--------:|:--------------:|:--------------:|:----------------:|
|Cold Start|301ms           |1s512ms         |1s858ms           |
|Hot Start |281ms           |1s375ms         |1s670ms           |

## iOS Results

|Release   |NativeIOSApp|NativeScriptTsApp|NativeScriptNgApp|
|:--------:|:----------:|:---------------:|:---------------:|
|Cold Start|141ms       |517ms            |694ms            |
|Hot Start |102m        |411ms            |589ms            |

### How to build the NativeScript apps?

As a prerequisite you need to setup the [NativeScript CLI](https://docs.nativescript.org/setup/quick-setup) with its dependencies.

Steps:

```bash
cd NativeScriptNgApp # NativeScriptTsApp
npm install
```

Build for Android in Release:

```
npm run build-android-bundle --uglify --snapshot -- --release --keyStorePath <keyStorePath> --keyStorePassword <keyStorePassword> --keyStoreAlias <keyStoreAlias> --keyStoreAliasPassword <keyStoreAliasPassword>
```

Build for iOS in Release:

```
npm run build-ios-bundle --uglify -- --release --for-device
```

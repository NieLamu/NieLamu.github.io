---
title: Build Cross Platform App With Electron
categories:
  - [Programming, Electron]
tags:
  - Electron
date: 2019-03-04 00:22:15
banner_img: /img/electron-logo.png
---

## Problems

### Can not use jQuery/RequireJS/Meteor/AngularJS in Electron

Electron
According to [ FAQ](https://electronjs.org/docs/faq#i-can-not-use-jqueryrequirejsmeteorangularjs-in-electron), you can use this:

```html
<head>
<script>
window.nodeRequire = require;
delete window.require;
delete window.exports;
delete window.module;
</script>
<script type="text/javascript" src="jquery.js"></script>
</head>
```

***In fact, it seems that `require` can still be used.***

### Install Electron blocked by internet connection

In China, the installation process of electron may be blocked by the awful internet connection sometimes.

We can download the Electron package we need like `electron-v4.0.6-win32-x64.zip` from [the mirror of Electron in China](https://npm.taobao.org/mirrors/electron/), and put it in `/home/youName/.electron/` or `C:\Users\yourName\.electron\`.

Then we can run `npm install` like before.

### Download dependencies failed when package App with electron-builder

When we run `electron-builder` to package our App first time, the subprocess downloading Electron like `electron-v4.0.6-win32-x64.zip` may fail due to the awful network.

Download Electron package from [the mirror of Electron in China](https://npm.taobao.org/mirrors/electron/) and put it in `C:\Users\yourName\AppData\Local\electron\Cache\`, then run the command like before.
If the dependence is `nsis`, download the package from the link show on screen and put the folder unpacked in `C:\Users\yourName\AppData\Local\electron-builder\cache\nsis\`.

### Preinstall failed on WSL

There is a script in `package.json`:

```json
"scripts": {
  "preinstall": "rm -rf node_modules & rm -f package-lock.json"
}
```

When running `npm install`, we got `cannot run in wd HuXinJia@1.0.0 rm -rf node_modules & rm -f package-lock.json (wd=/mnt/d/mles-pc)`

Following [Npm install failed with “cannot run in wd”](https://stackoverflow.com/questions/18136746/npm-install-failed-with-cannot-run-in-wd), running `npm install --unsafe-perm` solved it.

### Error while loading shared libraries on WSL

There are many errors like this:

```bash
/mnt/d/mles-pc/node_modules/electron/dist/electron: error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory
```

The libraries are `libnss3.so, libgtk-3.so.0, libX11-xcb.so.1, libasound.so.2`.

```bash
# https://github.com/Microsoft/vscode/issues/1694
sudo apt-get install libnss3-dev
# https://github.com/cazala/coin-hive/issues/22
sudo apt-get install libgtk-3-0
# https://www.howtoinstall.co/en/ubuntu/trusty/main/libx11-xcb-dev/
sudo apt-get install libx11-xcb-dev
# https://askubuntu.com/questions/482478/libasound-so-2-cannot-open-shared-object-file-no-such-file-or-directory
sudo apt-get install libasound2
```

### Zh-cn character not show on WSL GUI Xming

Not solved yet.

----

Refer:

Related:
[Electron应用打包](/2019/03/04/Package-Your-Electron-App/)
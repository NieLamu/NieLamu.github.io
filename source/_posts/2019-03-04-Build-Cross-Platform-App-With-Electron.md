---
title: Build Cross Platform App With Electron
categories:
  - [Electron]
tags:
  - Electron
date: 2019-03-04 00:22:15
index_img: https://github.com/NieLamu/NieLamu.github.io/raw/develop/statics/img/electron.png
banner_img: https://github.com/NieLamu/NieLamu.github.io/raw/develop/statics/img/electron.png
---

# Problems

## Can not use jQuery/RequireJS/Meteor/AngularJS in Electron

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

## Install Electron blocked by internet connection

In China, the installation process of electron may be blocked by the awful internet connection sometimes.

We can download the Electron package we need like `electron-v4.0.6-win32-x64.zip` from [the mirror of Electron in China](https://npm.taobao.org/mirrors/electron/), and put it in `/home/youName/.electron/` or `C:\Users\yourName\.electron\`.

Then we can run `npm install` like before.

## Download dependencies failed when package App with electron-builder

When we run `electron-builder` to package our App first time, the subprocess downloading Electron like `electron-v4.0.6-win32-x64.zip` may fail due to the awful network.

Download Electron package from [the mirror of Electron in China](https://npm.taobao.org/mirrors/electron/) and put it in `C:\Users\yourName\AppData\Local\electron\Cache\`, then run the command like before.
If the dependence is `nsis`, download the package from the link show on screen and put the folder unpacked in `C:\Users\yourName\AppData\Local\electron-builder\cache\nsis\`.
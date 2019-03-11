---
title: Electron应用打包
categories:
  - [Electron]
tags:
  - Electron
date: 2019-03-04 00:23:45
banner_img: https://github.com/NieLamu/NieLamu.github.io/raw/develop/statics/img/electron-app.png
---

使用Electron开发跨平台项目，将其打包成各平台可执行或可安装应用，一般有两种模块可以完成，即[electron-packager](https://github.com/electron-userland/electron-packager)和[electron-builder](https://github.com/electron-userland/electron-builder)，建议使用electron-builder。

# electron-packager

electron-packager的可配置项比较少，可打包类型也比较少。

# electron-builder

electron-builder配置项非常丰富，具体使用可查阅[官方文档](https://www.electron.build/)。

## 打包到Windows

### nsis-web包类型(recommended)

以目标平台为Windows为例，nsis-web形式包含一个几百kb的通用安装包(.exe)和x64、x86架构下相应的软件包(.7z)。

如果安装包托管在网站上，分发时只需要分发exe文件。这样不仅无需考虑用户操作系统架构，而且安装包比32位+64位减少了一半的大小。

![electron-builder-nsis-web-installer](electron-builder-nsis-web-installer.png)

#### package.json配置

#### 配置scripts:

```json
"scripts": {
  "release": "electron-builder"
}
```
*`electron-builder`后的参数参照[CLI Building参数](https://www.electron.build/cli)。*

*如果安装包要自动上传到GitHub上，则script的必须命名为`release`。*

#### 配置build参数：

```json
"build": {
  "nsisWeb": {
    "artifactName": "${productName}_Setup_${version}.${ext}",
    "oneClick": false,
    "perMachine": false,
    "allowToChangeInstallationDirectory": true
  },
  "win": {
    "target": [
      {
        "target": "nsis-web",
        "arch": ["x64", "ia32"]
      }
    ]
  },
  "publish": {
    "provider": "github",
    "repo": "electron-app",
    "owner": "luffySAMA",
    "releaseType": "release"
  }
}
```

其中`nsisWeb`和`win.target.nsis-web`字段指定要打包为`nsisWeb`类型。

`publish`字段，如果托管到GitHub，则
* provider: "github"
* repo: 托管的repository
* owner: 托管的GitHub账户用户名
* releaseType: "release"

如果托管到其它服务器，则按照文档填写，比如自己的服务器，则
* provider: "generic"
* url: "https://example.com/latest/"

其余字段按需配置。

#### 创建GH_TOKEN

在`GitHub - Settings - Developer settings - Personal access tokens - Generate new token`创建一个新的token, 勾选scopes中的`repo`，生成并保存token到本地的可靠文件中。

![gh_token](gh_token.png)

#### 打包及发布

参见[recommended-github-releases-workflow](https://www.electron.build/configuration/publish#recommended-github-releases-workflow)

*  在GitHub上项目中新建一个release的draft，`Tag version` 以`v`开头并与项目`package.json`中的`version`一致。`Release title`按需填写。例如，如果`package.json`中`version`是`1.0`，`Tag version` 就是`v1.0`.
* 运行`GH_TOKEN=xxxxxxxxxxxxxxx
 npm run release`.

此后安装包将自动发布到GitHub项目的release。
![github_release](github_release.png)

Refer:
[electron-builder打包见解
](https://juejin.im/post/5bc53aade51d453df0447927)
[Electron Nsis Web 安装包配置方法](https://www.luffysama.com/2018/09/08/electron-nsis-web/)
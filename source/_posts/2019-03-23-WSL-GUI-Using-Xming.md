---
title: WSL GUI Using Xming
categories:
  - Programming
tags:
  - Programming
date: 2019-03-23 15:02:54
---



----

Refer:

Related:

Here we start use Xming as Gui on WSL.

## Configuration on WSL

Add this line to your `.bashrc` or `.zshrc`.

```bash
export DISPLAY=:0
```

## Install Xming on Windows

Visit [Xming X Server for Windows](https://sourceforge.net/projects/xming/), download Xming and install it.

Open XLaunch and configure it. That `Display number` must be same with DISPLAY number configuration on WSL, which is `0` now.

After this, open Xming and input your command in WSL, the GUI will show.

### Problems

#### Tkinter error

When Python3 script using `matplotlib` shows error like `no module named "tkinter"`, you may need run `sudo apt-get install python3-tk` to solve it.

#### 

----

Refer:
[1][Winodws Linux Subsystem（WSL）的安装及GUI图形界面启用](https://www.jianshu.com/p/aca81f8c7f08)
[2][matplotlib error - no module named tkinter](https://stackoverflow.com/questions/36327134/matplotlib-error-no-module-named-tkinter)

Related:

---
title: Common Commands on Linux | Linux常用命令
categories:
  - [Programming, Linux]
tags:
  - Linux
  - Ubuntu
date: 2019-05-17 00:31:55
banner_img: /img/Linux-Tux-Logo-HD-Wallpaper.jpg
---

## About Account

```bash
# switch to root
sudo du
# switch to other user
su username
# modify password
passwd username
# permanently delete user (include directory)
userdel -r username
```

## crontab

```bash
# edit tasks
crontab -e
# View logging
tail -f /var/log/cron
```

Command format:

| 字段 | \*   | \*   | \*   | \*   | \*                          | Command  |
| ---- | ---- | ---- | ---- | ---- | --------------------------- | -------- |
| 含义 | 分钟 | 小时 | 天   | 月   | 星期                        | 任务命令 |
| 范围 | 0~59 | 0~23 | 1~31 | 1~12 | 0 ～ 7（0 和 7 表示星期天） |          |

Characters meaning:

- \* all values
- , and
- \- from to
- / interval

## SSH

### Installation and configuration

```bash
# Install ssh-server
apt-get install openssh-server
# (Re)Start service
sudo /etc/init.d/ssh (re)start
# Check if started
ps -e | grep ssh
# Edit configs
vim /etc/ssh/sshd_config
PermitRootLogin yes # Allow root login
PasswordAuthentication yes # Allow password login
```

**If in WSL, you must change the port of SSH because Windows already uses the default port 22.**

### PS. Installing the Windows 10 OpenSSH Server

Go to `Settings-Applications and Functions-Manage optional features`, and click on the `Add a feature` button, then install `OpenSSH Server`. After the installation, two new Windows services called sshd and sshd-agent will have been created, you can manually start them and set their startup type to `automatic`.

Refer:
[1][linux工具快速教程](https://linuxtools-rst.readthedocs.io/zh_CN/latest/index.html)
[2][how to install the built-in windows 10 openssh server](https://www.bleepingcomputer.com/news/microsoft/how-to-install-the-built-in-windows-10-openssh-server/)

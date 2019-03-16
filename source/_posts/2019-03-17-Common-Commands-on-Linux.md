---
title: Common Commands on Linux / Linux常用命令
categories:
  - [Programming, Linux]
tags:
  - Linux
  - Ubuntu
date: 2019-03-17 00:31:55
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
```

# crontab

```bash
# edit tasks
crontab -e
```

Command format:

| 字段 | *    | *    | *    | *    | *             | Command |
|----|------|------|------|------|---------------|---------|
| 含义 | 分钟   | 小时   | 天    | 月    | 星期            | 任务命令    |
| 范围 | 0~59 | 0~23 | 1~31 | 1~12 | 0～7（0和7表示星期天） |         |

* \* all values
* , and 
* \- from to
* / interval

----

Refer:
[1][Linux工具快速教程](https://linuxtools-rst.readthedocs.io/zh_CN/latest/index.html)
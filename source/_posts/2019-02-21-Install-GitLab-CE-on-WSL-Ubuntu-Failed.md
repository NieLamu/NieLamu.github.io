---
title: Install GitLab CE on WSL Ubuntu(Failed)
categories:
  - default
tags:
  - GitLab
date: 2019-02-21 09:47:15
banner_img: https://github.com/NieLamu/NieLamu.github.io/raw/develop/statics/img/gitlab-logo.png
---

Follow the instructions on [Omnibus package installation](https://about.gitlab.com/install/#ubuntu)

## Install and configure the necessary dependencies

```bash
sudo apt-get update
sudo apt-get install -y curl openssh-server ca-certificates
```

## Add the GitLab package repository and install the package

This step, we use the mirrors of [TUNA](https://mirror.tuna.tsinghua.edu.cn), follow the instructions on [Gitlab Community Edition 镜像使用帮助](https://mirror.tuna.tsinghua.edu.cn/help/gitlab-ce/)

```bash
curl https://packages.gitlab.com/gpg.key 2> /dev/null | sudo apt-key add - &>/dev/null
echo "deb https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/ubuntu bionic main" > /etc/apt/sources.list.d/gitlab-ce.list
sudo apt-get update
sudo apt-get install gitlab-ce
```

The edition names of Ubuntu like `bionic` are on [](https://launchpad.net/ubuntu).

## Modify GitLab configuration settings

Configure a URL for your GitLab instance by setting `external_url` configuration in `/etc/gitlab/gitlab.rb file`.

Then, you can start your GitLab instance by running `gitlab-ctl reconfigure`.

## Some errors

The first time I ran this, it was fail and showed:

```
Couldn't find an alternative telinit implementation to spawn.
```

So I tried running the command again and after some messages, the process was blocked by:

```
ruby_block[supervise_redis_sleep] action run
```

Following [安装GitLab出现ruby_block[supervise_redis_sleep] action run](https://www.cnblogs.com/springwind2006/p/6872773.html), I tried:

```bash
sudo systemctl restart gitlab-runsvdir
```

But failed. It said:

```
System has not been booted with systemd as init system (PID 1). Can't operate.
```

According to [【WSL】Windows Subsystem for Linux 安裝及基本配置！](https://blogs.msdn.microsoft.com/microsoft_student_partners_in_taiwan/2017/10/03/wsltune/), that's because WSL doesn't support systemd.

Tried run `/opt/gitlab/embedded/bin/runsvdir-start` in the background (another console) according to [WSL (Windows Subsystem for Linux) findings](https://gitlab.com/gitlab-org/omnibus-gitlab/issues/2295).

Then：

```bash
gitlab-ctl reconfigure
gitlab-ctl restart
```

But when visited `127.0.0.1`, it showed `502 Whoops, GitLab is taking too much time to respond`.

After alot of searching, I quit.

## Uninstall GitLab.

```bash
sudo gitlab-ctl stop
find / -name gitlab | xargs rm -rf
sudo apt-get remove gitlab-ce
dpkg --get-selections | grep gitlab
sudo apt-get --purge remove gitlab-ce
```

All things GOOD.

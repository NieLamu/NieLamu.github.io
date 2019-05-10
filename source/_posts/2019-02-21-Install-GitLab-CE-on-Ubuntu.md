---
title: Install GitLab CE on Ubuntu
categories:
  - [Programming, GitLab]
tags:
  - GitLab
date: 2019-02-21 09:47:15
banner_img: /img/gitlab-logo.png
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

Setting are in `/etc/gitlab/gitlab.rb`.

```rb
# Set Url
external_url 'http://localhost:9090'
# Error 502 and 'GitLab is not responding' may be unicorn port occupancy
unicorn['port'] = 8801
```

After configuration, you need:

```bash
gitlab-ctl reconfigure
gitlab-ctl restart
```

## Modify root user password

```bash
sudo gitlab-rails console production
In the console:
# view all users
User.all
# select root user
u=User.where(id:1).first
# set and confirm password
u.password='12345678'
u.password_confirmation='12345678'
# save and exit
u.save!
quit
```

Visit `http://localhost:9090`, you will be asked to set your password with user name `root`.

![gitlab-welcome-page](gitlab-welcome-page.png)

## Some errors

The first time I ran this, it was fail and showed:

```

Couldn't find an alternative telinit implementation to spawn.

```

So I tried running the command again and after some messages, the process was blocked by:

```

ruby_block[supervise_redis_sleep] action run

```

Following [安装 GitLab 出现 ruby_block[supervise_redis_sleep] action run](https://www.cnblogs.com/springwind2006/p/6872773.html), I tried:

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

Everything's quiet.

Update:
2019.03.19 Succeed on another Machine.

---

Refer:

Related:

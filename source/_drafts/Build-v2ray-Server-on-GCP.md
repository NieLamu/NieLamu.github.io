---
title: Build v2ray Server on GCP | 在GCP上搭建v2ray服务
categories:
  - [Programming, v2ray]
  - [Programming, GCP]
tags:
  - GCP
  - v2ray
date: 2019-03-10 17:49:08
banner_img: /img/google-cloud-logo.png
---

截至2019年3月，[搬瓦工](https://bandwagonhost.com)的openVZ架构VPS全部下线，最低价$49.99/yr的服务器也卖光了。在vultr上为公司搭建的Shadowsocks服务又导致IP经常被封（正值x会期间），实在折腾不起，所以转投GCP(Google Cloud Platform)。

GCP使用外币信用卡开通可享受含300美元赠金的12个月免费试用，[系统会在您的免费赠金用完或过期（二者取其先）后向您收取费用。](https://cloud.google.com/free/docs/gcp-free-tier#how-to-upgrade)。

## 创建和配置Computer Engine实例

## 创建实例

Computer Engine相当于阿里云的ECS，也就是虚拟机（服务器），可以根据需求选择配置。

如果身在中国大陆，区域最好选择asia-east1（台湾），地区选择asia-east1-a或asia-east1-c（据说asia-east1-b比较慢[*补充来源]）。机器类型根据需求选择，一般不作它用时最低配置即可。

![choose-area-and-type](choose-area-and-type.jpg)

启动磁盘是预装的操作系统，按需选择，一般选择Ubuntu 18.04 LTS；勾选防火墙下的允许 HTTP 流量和允许 HTTPS 流量。

![choose-os](choose-os.jpg)

----

Refer:
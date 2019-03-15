---
title: Merge Two Branches From Two Git Projects
categories:
  - [Git]
tags:
  - Git
date: 2019-02-15 10:36:59
---

We have one git project that references another project. After some commits, we want to fork the reference project and merge the commits of the two projects.
The branches of the two projects are as follows:

```
ourProject -> develop
forkedProject -> master
```

We need merge `master` branch of `forkedProject` to `develop` branch of `ourProject`.

## Get branch of project forked

```bash
cd ourProject
git checkout develop
git remote add base forkedProject.git
git checkout -b temp
git pull base master
```

If there is an error like `fatal: refusing to merge unrelated histories...`, then add `--allow-unrelated-histories` after the command.

## Merge branches

```bash
git checkout develop
git merge temp
git commit -m "merge"
```

----

Refer:
[1][同一工程中，合并两个git项目内容](https://blog.csdn.net/zh_1191/article/details/79036608)
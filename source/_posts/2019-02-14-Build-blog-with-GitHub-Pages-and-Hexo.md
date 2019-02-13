---
title: Build blog with GitHub Pages and Hexo
index_img: https://github.com/NieLamu/NieLamu.github.io/raw/master/img/GitHub%20Pages.png
banner_img: https://github.com/NieLamu/NieLamu.github.io/raw/master/img/GitHub%20Pages.png
categories:
  - default
tags:
  - default
  - Hexo
date: 2019-02-14 00:53:27
---

## Create a new github repository
 NieLamu.github.io
## Initialize a Hexo project
```bash
npx hexo init NieLamu.github.io
```
## Relate github repository with local Hexo project

```bash
cd NieLamu.github.io/
git init
git remote add origin https://github.com/NieLamu/NieLamu.github.io
```

## Push working branch to remote
```bash
git checkout -b develop
git add .
git commit -m "hexo init"
git push origin develop
```

## Fork and customize a Hexo theme
https://github.com/invom/Material-T

```bash
git submodule add https://github.com/NieLamu/Material-T themes/Material-T
cd themes/Material-T/
some modifies...
git add .
git commit -m "modify css and config"
git push origin master
```

## Commit with submodule
```bash
cd ../../
git add .
λ git commit -m "commit with submodule"
λ git push origin develop
```

## generate and deploy website
_config.yml

```
deploy:
  type: git
  repo: https://github.com/NieLamu/NieLamu.github.io.git
  branch: master
```

```bash
npm install hexo-deployer-git --save
λ npx hexo clean && npx hexo g && npx hexo d -m "update message"
```
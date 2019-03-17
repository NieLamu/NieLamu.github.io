---
title: Build Blog with GitHub Pages and Hexo
categories:
  - [Programming]
tags:
  - GitHub
  - Hexo
date: 2019-02-14 00:53:27
banner_img: /img/GitHub-Pages.png
---

It's a fully procedure on how to build a static blog with GitHub Pages and Hexo.

## Prepare a working project

### Create a new repository on GitHub

**Remember to replace `NieLamu` with your username on GitHub in the following codes.**

The name of the repository must be similar to `NieLamu.github.io`.

![Create New GitHub Pages Repo](Create New GitHub Pages Repo.png)

### Initialize a local Hexo project
```bash
npx hexo init NieLamu.github.io
```

### Relate GitHub repository with local Hexo project

```bash
cd NieLamu.github.io/
git init
git remote add origin https://github.com/NieLamu/NieLamu.github.io
```

### Fork and customize a Hexo theme

Fork [Material-T](https://github.com/invom/Material-T), then

```bash
git submodule add https://github.com/NieLamu/Material-T themes/Material-T
```

### Push working branch with submodule to remote

```bash
git checkout -b develop
git add .
git commit -m "hexo init project with submodule"
git push origin develop
```

### Modify theme 

```bash
cd themes/Material-T/
...some modifies...
git add .
git commit -m "modify css and config"
git push origin master
```

## generate and deploy website

### Modify `_config.yml`

```
deploy:
  type: git
  repo: https://github.com/NieLamu/NieLamu.github.io.git
  branch: master
```

### Install git deploy module

```bash
npm install hexo-deployer-git --save
```

### Clean, generate and deploy

```bash
npx hexo clean && npx hexo g && npx hexo d -m "update message"
```

Or

```bash
npx hexo clean
npx hexo g
npx hexo d -m "update message"
```

### Serve

```bash
npx hexo clean && npx hexo g && npx hexo serve
```

Or

```bash
npx hexo serve
```

### Push working branch to remote

```bash
git add .
git commit -m "modify css and config"
git push origin develop
```

## Setting up a custom subdomain

Following the guide in [Setting up a custom subdomain
](https://help.github.com/articles/setting-up-a-custom-subdomain/).

### Set up Domain in DSP

Follow your DNS provider's instructions to create a `CNAME` record that points your subdomain to your default pages domain. 

For example, if you own the subdomain `www.example.com`, you can configure a `CNAME` record to point `www.example.com` to `YOUR-GITHUB-USERNAME.github.io`. 

DNS changes can take over a full day to update, and the wait varies among DNS and hosting providers.

![Set up DNS in DSP](Set up DNS in DSP.png)

### Set up Custom Domain in Repo
On GitHub, navigate to your GitHub Pages site's repository.

Under your repository name, click Settings.
Under "Custom domain," add your custom domain and click Save.

![Set up Custom Domain in Repo](Set up Custom Domain in Repo.png)

### Create CNAME file
Create a file named `CNAME` in `source` folder with `YOUR-GITHUB-USERNAME.github.io` as content.

```bash
echo "blog.renxiaoyao.xyz" > source/CNAME
```

Or you can following [Using a custom domain with GitHub Pages
](https://help.github.com/articles/using-a-custom-domain-with-github-pages/) to set up other types of domain.

----

Refer:
[1][hexo史上最全搭建教程
](https://blog.csdn.net/sinat_37781304/article/details/82729029)
---
title: Permanently Delete Files From Git History
categories:
  - [Git]
tags:
  - Git
date: 2019-02-14 11:28:26
index_img: https://git-scm.com/images/branching-illustration@2x.png
banner_img: https://git-scm.com/images/branching-illustration@2x.png
---

Sometimes we mistakenly commit large files or files that contain passwords, so we need permanently delete files from Git history.

## Clear wrong files from your working directory

```bash
git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch path-to-your-remove-file' --prune-empty --tag-name-filter cat -- --all
```

`path-to-your-remove-file` is the relative path of the file you want to clear.

**Do not let the path start with '/' which will make it be considered to be in the install dir of Git.**

If you want to clear a directory, add `-r` after `git rm --cached`.

The following message is successfull info.

```
Rewrite e9a2f6be143f4f743f72800821e92c4aa2da7a0d (15/16)
Ref 'refs/heads/master' was rewritten
```

Meanwhile the following message is NO SUCH FILE info.

```
WARNING: Ref 'refs/heads/master' is unchanged
```

## Push changes

Compulsively push the changes to remote.

```bash
git push origin master --force
```

Push Git tags.

```bash
git push origin --tags --force
```

## Clean-up and recovery space

```bash
rm -rf .git/refs/original/
git reflog expire --expire=now --all
git gc --prune=now
git gc --aggressive --prune=now
```

Refer:
[Git如何永久删除文件(包括历史记录)](http://www.cnblogs.com/shines77/p/3460274.html)
[彻底删除 Git 仓库中的文件避免占用大量磁盘空间](https://walterlv.oschina.io/git/2017/09/18/delete-a-file-from-whole-git-history.html)
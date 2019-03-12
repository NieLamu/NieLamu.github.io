---
title: Git相关命令
categories:
  - [Git]
tags:
  - Git
date: 2019-03-07 15:25:59
---

## 配置/config

## 撤销与回滚/undo and rollback

### git commit之前/before git commit

#### git add之前/before git add

也就是撤销工作区的更改。

```bash
➜ git:(develop) ✗ git status
On branch develop
Your branch is up to date with 'origin/develop'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")
```

运行`git checkout -- <file>`或者`git checkout -- .`（全部变动）

```bash
➜ git:(develop) git checkout -- README.md
➜ git:(develop) git status
On branch develop
Your branch is up to date with 'origin/develop'.

nothing to commit, working tree clean
```

####  git add之后/after git add

也就是撤销暂存区的更改。

```bash
➜  testLanguagesProject git:(develop) ✗ git status
On branch develop
Your branch is up to date with 'origin/develop'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   README.md
```

运行`git reset HEAD <file>`或`git reset HEAD`（全部变动）

```bash
➜ git:(develop) ✗ git reset HEAD README.md
Unstaged changes after reset:
M       README.md
➜ git:(develop) ✗ git status
On branch develop
Your branch is up to date with 'origin/develop'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")
```

### git commit之后/after git commit

#### 只修改git commit message

* 修改最后一次提交 `git commit --amend`
* 修改多个提交说明`git rebase -i HEAD~3`

#### 撤回某个commit

```bash
git revert commitId
```

#### 回滚到某个commit

撤销commit（版本库），保留暂存区，保留工作区更改:

```bash
git reset --soft commitId
```

撤销commit（版本库），撤销暂存区，保留工作区更改:

```bash
git reset --mixed commitId
或
git reset commitId
```

撤销commit（版本库），撤销暂存区，撤销工作区更改:

```bash
git reset --hard commitId
```

{% pdf "Git 命令速查表v2.pdf" %}

Refer:
[⽅糖⼩⽩课·版本管理和Git⼊⻔](http://suiji.io)
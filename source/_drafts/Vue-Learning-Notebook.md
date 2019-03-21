---
title: Vue Learning Notebook
categories:
  - [Programming, Vue]
tags:
  - Vue
date: 2019-03-19 18:28:07
---

```bash

Mustache语法`{{}}`
文本插值
单向绑定，从数据对象`data`中获取数据
`{{}}`中只能出现 Js 表达式 而不能解析 Js 语句
不能作用在 HTML 元素的属性上

v-once
使Mustache只作用一次

v-html
绑定html片段
ng-bind-html

v-bind
DOM 文本或特性
可以用[attributeName]绑定 JavaScript 表达式作为一个指令的参数
.prevent 修饰符


v-if  ==> ng-if
DOM 结构
添加 key高效地复用
v-for
v-on
v-model



$el
$data
$methods
$watch
$computed 计算属性 基于响应式依赖进行缓存 getter 与 setter 反向
Vue实例生命周期钩子
$created、$mounted、$updated、$destroyed

不要使用箭头函数
```
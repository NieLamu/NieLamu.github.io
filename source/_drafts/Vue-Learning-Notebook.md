---
title: Vue Learning Notebook
categories:
  - [Programming, Vue]
tags:
  - Vue
date: 2019-03-19 18:28:07
---

```bash

动态添加数据
Vue.set(vm.stu, 'gender', 'male')
vm.stu = Object.assign({}, vm.stu, { gender: 'female', height: 180 })


Mustache语法`{{}}`
文本插值
单向绑定，从数据对象`data`中获取数据
`{{}}`中只能出现 Js 表达式 而不能解析 Js 语句
不能作用在 HTML 元素的属性上

v-once
使Mustache只作用一次

v-text
绑定textContent

v-html
绑定html片段
ng-bind-html

v-bind
DOM 文本或特性
可以用[attributeName]绑定 JavaScript 表达式作为一个指令的参数
.prevent 修饰符


v-if
ng-if
DOM 结构
添加 key高效地复用

v-for
数组语法v-for="(item, index) in items" 可用of代替in
对象语法v-for="(value, key, index) in object"
当在组件中使用 v-for 时，key 现在是必须的。

v-on
原始的 DOM 事件可用 $event 传递
事件修饰符

v-model
语法糖
应该通过 JavaScript 在组件的 data 选项中声明初始值。



$el
$data
$methods
$watch
$computed 计算属性 基于响应式依赖进行缓存 getter 与 setter 反向
Vue实例生命周期钩子
$created、$mounted、$updated、$destroyed

不要使用箭头函数

component
一个组件的 data 选项必须是一个函数
```

----

Refer:
[Vue学习看这篇就够](https://juejin.im/entry/5a54b747518825734216c3df)
[vue根目录下的index.html中的id="app"与src目录下的App.vue中的id="app"为什么不会冲突](https://blog.csdn.net/github_37533433/article/details/78936345)
[vue-router的两种模式区别以及使用注意事项](https://blog.csdn.net/wang1006008051/article/details/81805932)
[使用Vue构建Ionic混合APP系列教程](https://blog.csdn.net/liujiawei00/article/details/78843004)
[Framework7+Framework7-vue+vue踩坑记](https://www.jianshu.com/p/9c0d0702a2aa)

Related:
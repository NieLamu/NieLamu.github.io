---
title: Hello World
categories:
  - [Programming, Hexo]
  - [Hello World]
tags:
  - Hexo
date: 2019-02-12 11:41:42
banner_img: https://source.unsplash.com/800x450/?snow
---

Welcome to [Hexo](https://hexo.io/)! This is your very first post. 
Check [documentation](https://hexo.io/docs/) for more info. If you get any problems when using Hexo, you can find the answer in [troubleshooting](https://hexo.io/docs/troubleshooting.html) or you can ask me on [GitHub](https://github.com/hexojs/hexo/issues).

## Quick Start

### Create a new post

``` bash
hexo new "My New Post"
```

More info: [Writing](https://hexo.io/docs/writing.html)

### Run server

``` bash
hexo server
```

More info: [Server](https://hexo.io/docs/server.html)

### Generate static files

``` bash
hexo generate
hexo g
```

More info: [Generating](https://hexo.io/docs/generating.html)

### Deploy to remote sites

``` bash
hexo deploy
hexo d
```

More info: [Deployment](https://hexo.io/docs/deployment.html)

#### Or you can deploy it one step

``` bash
npx hexo clean && npx hexo g -d
```

## This are some tests

**Important: if you want to run app with gulped code run `npm run build` or `gulp`, then run `npm start`.**

### JavaScript

```javascript
  /***
   * 使用原始数据画图
   * @param {String} canvas 要画图的canvas的id
   * @param {Uint8Array} multiData 从蓝牙或SD卡中读出来的纯ECG数据，无需考虑导联及大小端
   * @param {Number} lengthToPad 需要在前面补0的数量，默认为 `0`，即不补0。
   */
  function drawCanvasFromMultiData (canvas, multiData, lengthToPad=0){
    const data = 
    const remainder = data.length%frameLen; // 余数0
    if (remainder!==0){
      console.log(`your multiDataLen ${data.length} is not multiple of frameLen ${frameLen}`, multiData);
      throw 'length of multiData must be multiple of frameLen';
    }
  }
```

### Html

```html
<!--插图-->
<div class="healthyEcgCanvas" data-tap-disabled="true">
	<canvas width=3200 height=400 id="healthyEcgCanvasBackground"></canvas>
	<canvas width=3200 height=400 id="healthyEcgCanvas"></canvas>
</div>
```

### CSS

```css
//ecg的图们
.healthyEcgCanvas{
  position: relative;
  border: 1px solid #c90000;
  pointer-events: none;//禁止点击
}
```

### images
![img-test](img-test.png)

----

Refer:
[1][Google](www.google.com)
[2][Learning-Markdown (Markdown 入门参考)](http://xianbai.me/learn-md/index.html)

Related:
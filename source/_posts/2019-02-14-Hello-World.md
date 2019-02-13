---
title: Hello World
date: 2019-02-12 00:41:42
index_img: https://github.com/NieLamu/NieLamu.github.io/raw/master/img/post-banner.jpg
banner_img: https://images.unsplash.com/photo-1549943437-0f0686490788?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80
categories:
  - [default, Hexo]
  - [Hello World, Hexo]
tags:
  - default
  - Hexo
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

## This is some test

**Important: if you want to run app with gulped code run `npm run build` or `gulp`, then run `npm start`.

### JavaScript

```javascript
  /***
   * 使用原始数据画图
   * @param {String} canvas 要画图的canvas的id
   * @param {Uint8Array} multiData 从蓝牙或SD卡中读出来的纯ECG数据，无需考虑导联及大小端
   * @param {Number} lengthToPad 需要在前面补0的数量，默认为 `0`，即不补0。
   */
  function drawCanvasFromMultiData (canvas, multiData, lengthToPad=0){
    const data = Buffer.from(multiData);
    const bytes = win.xpRegisterConfig.sampleBits/8; // 3字节
    const frameLen = win.xpRegisterConfig.frameLen; // 3字节*8导
    const realLeadersName = win.xpRegisterConfig.realLeadersName;
    const plotLeadersName = win.xpRegisterConfig.plotLeadersName;
    const frameNum = data.length/frameLen; // 个数
    const remainder = data.length%frameLen; // 余数0
    if (remainder!==0){
      console.log(`your multiDataLen ${data.length} is not multiple of frameLen ${frameLen}`, multiData);
      throw 'length of multiData must be multiple of frameLen';
    }
    let plotData = {};
    for (let i=0; i<frameNum; i++){ // 1个frame
      for (let j=0; j<realLeadersName.length; j++){ // 1个导
        const leader = realLeadersName[j];
        if (!plotData[leader]) plotData[leader] = []; // 初始化
        const start = i*frameLen+j*bytes;
        const end = i*frameLen+(j+1)*bytes;
        const arr = data.slice(start, end);
        const value = arr.readUIntBE(0, bytes);
        plotData[leader].push(value);
      }

      plotLeadersName.forEach((leader, index)=>{
        if (!realLeadersName.includes(leader)){ // 要算
          if (!plotData[leader]) plotData[leader] = []; // 初始化
          let value;
          switch (leader) {
            case 'I':
              value = plotData['II'][i] - plotData['III'][i];
              plotData[leader].push(value);
              break;
            case 'II':
              value = plotData['I'][i] + plotData['III'][i];
              plotData[leader].push(value);
              break;
            case 'III':
              value = plotData['II'][i] - plotData['I='][i];
              plotData[leader].push(value);
              break;
            case 'aVF':
              value = plotData['II'][i] - plotData['I'][i]/2;
              plotData[leader].push(value);
              break;
            case 'aVR':
              value = -(plotData['I'][i] + plotData['II'][i])/2;
              plotData[leader].push(value);
              break;
            case 'aVL':
              value = plotData['I'][i] - plotData['II'][i]/2;
              plotData[leader].push(value);
              break;
          }
        }
      })
    }
```

### Html

```
<!--插图-->
<div class="healthyEcgCanvas" data-tap-disabled="true">
	<canvas width=3200 height=400 id="healthyEcgCanvasBackground"></canvas>
	<canvas width=3200 height=400 id="healthyEcgCanvas"></canvas>
</div>
```

### CSS

```
//ecg的图们
.healthyEcgCanvas{
  position: relative;
  border: 1px solid #c90000;
  pointer-events: none;//禁止点击
}

.healthyEcgCanvas>canvas{
  width:100%;
  height:100%;
  position: absolute;
}
```

### images
![avatar](new GitHub Pages Repo.png)


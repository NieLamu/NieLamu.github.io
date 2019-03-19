---
title: Small Features to Improve My Blog
categories:
  - [Programming, Web]
tags:
  - Web
banner_img: /img/index.png
date: 2019-03-18 21:18:43
---


Here are some small features to improve my static blog when I build it on GitHub Pages using Hexo.

## Make Headings in Markdown Can Scroll to Top When Clicked

The static blog engine adds an `id' attribute to each heading of Markdown, so we can write some code so that it can scroll to top when we clicking. It like this:

![Heading-Scroll-to-Top-When-Clicked](Heading-Scroll-to-Top-When-Clicked.gif)

### Add a tag before heading

Here we use pseudo element `before` of CSS.

```css
.post_content h1:before, h2:before, h3:before, h4:before, h5:before, h6:before {
    content: "➜";
    cursor: pointer;
    // pointer-events: auto;
    color: var(--bgColor);
}
```

We add a colorful symbol `➜` before heading, and make the cursor on it be a pointer.

This makes all `hover` and `click` actions on both pseudo element and heading can be reached. If we only need the actions on pseudo element be effective, we can simply uncomment the line `pointer-events: auto;`, then add this:

```css
.post_content h1, h2, h3, h4, h5, h6 {
    pointer-events: none;
}
```

### Add hover effect on heading

```css
.post_content h1:hover:before, h2:hover:before, h3:hover:before, h4:hover:before, h5:hover:before, h6:hover:before {
    content: "✗";
}
```

### Add click event

```javascript
$('.post_content h1,h2,h3,h4,h5,h6').click((e) => {
    $('html,body').animate({ scrollTop: $(`#${e.target.id}`).offset().top }, 500);
});
```

## A typing effect on website description

![typing-effect](typing-effect.gif)

With interval we can do this.

```javascript
$(document).ready(() => {
    const cls = 'type-description';
    const typeEle = $(`.${cls}`);
    const sentence = typeEle.text();
    const len = sentence.length;
    let letters = '', index = 0;
    typeEle.text(letters); 
    typeEle.css('display', 'block');
    const timer = setInterval(()=> {
        letters += sentence[index];
        typeEle.text(letters);
        index++;
        if (index === len){
            clearInterval(timer);
            typeEle.removeClass(cls);
        }

    }, 300)
})
```

```html
<h2 class="type-description" style="display: none;">はじめまして ^_^</h2>
```

## Use main color of an image as background of page

![Use-main-color-of-an-image-as-background](Use-main-color-of-an-image-as-background.gif)

```javascript
// Create an invisible canvas
const canvas = document.createElement("canvas");
canvas.style.display = 'none';
// Get image source
const imgSrc = $('.post_banner_img_container a').attr('href');
// Create an image element
const img = new Image();
img.src = imgSrc;
// If CORS error happened, add crossOrigin attribute to img
img.crossOrigin = 'Anonymous';
// Wait until the picture resource is loaded before drawing on Canvas
img.onload = () => {
    // Draw image on canvas
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    // Get image pixel data
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    // Calculate average color
    let pixels = [0, 0, 0, 0], index = 0;
    const len = data.length;
    for (let i = 0, offset, r, g, b, a; i < len / 4; i++) {
        offset = i * 4;
        r = data[offset + 0];
        g = data[offset + 1];
        b = data[offset + 2];
        a = data[offset + 3];
        // If pixel is mostly opaque and not white
        if (a >= 125 && !(r > 250 && g > 250 && b > 250)) {
          pixels[0] += r;
          pixels[1] += g;
          pixels[2] += b;
          pixels[3] += a;
          index++;
        }
    }
    for (let i = 0; i < 4; i++) {
        pixels[i] = pixels[i]/index;
    }
    const color = `rgb(${pixels[0]}, ${pixels[1]}, ${pixels[2]})`;
    $('.page-header').css('background-color', color)
}
```

Then add `transition` to CSS of `.page-header`.

## Colorful status bar in Chrome on Android

```html
<meta name="theme-color" content="#00bcd4">
```

```javascript
const hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
$("meta[name='theme-color']").attr('content', hex);
```

By dynamically changing the attribute content if `theme-color` meta, we can make this effect.

// toc显示隐藏
$(document).ready(function () {
    var minWidth = 768;
    var toc = $('#toc');
    var post_content = $('.post_content');
    var navbar = $('.navbar');

    var tocT = navbar.height();

    var tocLimMin = post_content.offset().top;
    const placeToc = () => {
        var tocL = post_content.offset().left + post_content.width() + 30;
        var scrollH = document.body.scrollTop + document.documentElement.scrollTop;
        var tocLimMax = tocLimMin + post_content.height();
        if (window.innerWidth > minWidth && scrollH >= tocLimMin && scrollH + toc.height() <= tocLimMax) {
            toc.css({
                'display': 'block',
                'position': 'fixed',
                'left': tocL,
                'top': tocT
            })
        } else if (window.innerWidth <= minWidth) {
            toc.css('display', 'none')
        } else {
            toc.css('display', 'none')
        }
    }
    $(window).scroll(placeToc)
    $(window).resize(placeToc)

    tocbot.init({
        tocSelector: '#tocbot',
        contentSelector: '.post_content',
        headingSelector: 'h1, h2, h3, h4, h5, h6',
        linkClass: 'tocbot-link',
        activeLinkClass: 'tocbot-active-link',
        listClass: 'tocbot-list',
        isCollapsedClass: 'tocbot-is-collapsed',
        collapsibleClass: 'tocbot-is-collapsible',
        scrollSmooth: true,
    });
})


// 全屏大图效果
$(document).ready(() => {

    const body = $('body');
    const navbar = $('.navbar');
    const post_content_img = $('.post_content img');
    post_content_img.addClass('materialboxed')
    post_content_img.materialbox();
})


// heading点击滚动效果
$(document).ready(() => {
    $('.post_content h1,h2,h3,h4,h5,h6').click((e) => {
        $('html,body').animate({ scrollTop: $(`#${e.target.id}`).offset().top }, 500);
    });
})


// 题图背景应用主色调
$(document).ready(() => {
    // Create an invisible canvas
    const canvas = document.createElement("canvas");
    // Get image source
    const imgSrc = $('.post_banner_img_container a').attr('href');
    if (!imgSrc) return;
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
        let data;
        try {
            data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        } catch {
            return;
        }
        let pixels = { r: 0, g: 0, b: 0, a: 0, index: 0 };
        const len = data.length;
        for (let i = 0, offset, r, g, b, a; i < len / 4; i++) {
            offset = i * 4;
            r = data[offset + 0];
            g = data[offset + 1];
            b = data[offset + 2];
            a = data[offset + 3];
            // If pixel is mostly opaque and not white
            if (a >= 125 && !(r > 250 && g > 250 && b > 250)) {
                pixels.r += r;
                pixels.g += g;
                pixels.b += b;
                pixels.a += a;
                pixels.index++;
            }
        }
        for (let i in pixels) {
            pixels[i] = parseInt(pixels[i] / pixels.index);
        }
        const rgb = `rgb(${pixels.r}, ${pixels.g}, ${pixels.b})`;
        $('.page-header').css('background-color', rgb)
        const hex = "#" + ((1 << 24) + (pixels.r << 16) + (pixels.g << 8) + pixels.b).toString(16).slice(1);
        $("meta[name='theme-color']").attr('content', rgb);
    }
})

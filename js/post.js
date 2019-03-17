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
$(document).ready(()=> {
    $('.post_content img').on('click', function (e) {
        $('body').append(
            `<div id='fullImgBackground'>`
            + `<img src='${e.target.src}'>`
            + `</div>`
        );
        $('body').addClass('disableScroll');
        $('.navbar').addClass('opacity0');

        $('#fullImgBackground').one('click', function (e) {
            $('#fullImgBackground').remove();
            $('body').removeClass('disableScroll');
            $('.navbar').removeClass('opacity0');
        });
        $('#fullImgBackground img').one('click', function (e) {
            e.stopPropagation();
        });
    });
})


// heading点击滚动效果
$(document).ready(()=> {
    $('.post_content h1,h2,h3,h4,h5,h6').on('mouseenter', (e) => {
        $(`#${e.target.id}`).addClass('titleActive')
    })
    $('.post_content h1,h2,h3,h4,h5,h6').on('mouseleave', (e) => {
        $(`#${e.target.id}`).removeClass('titleActive')
    })
    $('.post_content h1,h2,h3,h4,h5,h6').click((e) => {
        $('html,body').animate({ scrollTop: $(`#${e.target.id}`).offset().top }, 500);
    });
})


// 题图背景应用主色调
$(document).ready(() => {
    const canvas = $('#post_img_canvas')[0];
    const imgSrc = $('.post_banner_img_container a').attr('href');
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    /**等图片资源加载完成后，才在 Canvas 上进行绘制渲染*/
    img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        try {
            const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
            let pixels = [[], [], []];
            const len = data.length;
            for (let i = 0, offset, r, g, b, a; i < len / 4; i++) {
                offset = i * 4;
                r = data[offset + 0];
                g = data[offset + 1];
                b = data[offset + 2];
                a = data[offset + 3];
                // If pixel is mostly opaque and not white
                if (a >= 125) {
                    if (!(r > 250 && g > 250 && b > 250)) {
                        pixels[0].push(r);
                        pixels[1].push(g);
                        pixels[2].push(b);
                    }
                }
            }
            for (let i = 0; i < 3; i++) {
                pixels[i] = parseInt(eval(pixels[i].join('+')) / pixels[i].length);
            }
            const color = `rgb(${pixels[0]}, ${pixels[1]}, ${pixels[2]})`;
            $('.page-header').css('background-color', color)
        }
        catch (err) { }

    }
    img.src = imgSrc;
})
// 滑动时隐藏或显示navbar
$(document).ready(() => {
    let windowTop = 0
    $(window).scroll(function () {
        var scrolls = $(this).scrollTop(); 

        if (scrolls >= windowTop) {
            $('.navbar').fadeOut(500);
            windowTop = scrolls;
        } else {
            $('.navbar').fadeIn(500);
            windowTop = scrolls;
        }
    });
})


$(document).ready(() => {
    const cls = 'type-description';
    const typeEle = $(`.${cls}`);
    const sentence = typeEle.text();
    const len = sentence.length;
    if (len === 0) return;
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


$(document).ready(function () {
    // copy from https://github.com/fi3ework/hexo-theme-archer
    var logStyle = 'color: #fff; background: #00bcd4; padding: 5px; border-radius: 5px;'
    console.log('%c 🎯 Material-N', logStyle)
    console.log('%c 🏷 Version: 2.0.0 ', logStyle)
    console.log('%c 📦 https://github.com/NieLamu/Material-N ', logStyle)
}) 
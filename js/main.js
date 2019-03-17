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


$(document).ready(function () {
    // copy from https://github.com/fi3ework/hexo-theme-archer
    var logStyle = 'color: #fff; background: #f75357; padding: 1px; border-radius: 5px;'
    console.log('%c 🎯 Material-T', logStyle)
    console.log('%c 🏷 Version: 0.9.1 ', logStyle)
    console.log('%c 📦 https://github.com/invom/Material-T ', logStyle)
}) 
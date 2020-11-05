

$(window).scroll(function () {
    itemFadeIn();
});

$(window).on('load', function () {
    runSwiper();
    animateMv();
});

function runSwiper() {
    var swiper = new Swiper('.swiper-container', {
        autoplay: {
            disableOnInteraction: false
        },
        speed: 500,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        // effect: 'fade',
    });
}

function animateMv() {
    $('#sherpa_mvArea .mvImage').addClass('active');
    setTimeout(function () {
        $('#sherpa_mvArea .title').addClass('active');
    }, 1000);
}

function itemFadeIn() {
    if ($('#sherpa_itemsArea').length) {
        const w = $(window).width();
        const item = '.itemBlock .itemBlockInner';
        $(item).each(function () {
            let elmPos = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            let buffer;
            if (w <= 768) {
                buffer = 0;
            } else {
                buffer = 0;
            }
            if (scroll > elmPos - windowHeight + buffer) {
                $(this)
                    .delay(400)
                    .queue(function (next) {
                        $(this).addClass('active');
                        $(this).next('.textFrame').addClass('active');
                        next();
                    });
            }
        });
    }
}
$(window).scroll(function () {
    itemFadeIn();
});

$(window).on('load', function () {
    runSwiper();
    animateMv();
});

function runSwiper() {
    var swiper = new Swiper('.swiper-container', {
        autoplay: true,
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
        const item = '.itemBlock .itemBlockInner';
        $(item).each(function () {
            var elmPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elmPos - windowHeight) {
                $(this)
                    .delay(400)
                    .queue(function (next) {
                        $(this).addClass('active');
                        next();
                    });
                $(this)
                    .next('.textFrame')
                    .delay(900)
                    .queue(function (next) {
                        $(this).addClass('active');
                        next();
                    });
            }
        });
    }
}
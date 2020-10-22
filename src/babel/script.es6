$(window).on('load', function () {
    mvFirstAnimation();
    runSwiper();
});

function mvFirstAnimation() {
    $('.mv').addClass('active_first');
    $('.titleBlock .title').queue(function (next) {
        $(this).delay(200).addClass('active');
        next();
    });
    setTimeout(function () {
        mvSecondAnimation();
    }, 400);
}

function mvSecondAnimation() {
    $('.mv').addClass('active_second');
}

function runSwiper() {
    var swiper = new Swiper('.swiper-container', {
        autoplay: true,
        speed: 300,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        effect: 'fade',
    });
}
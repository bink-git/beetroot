$(document).ready(function(){
    $('.main__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        adaptiveHeight: true,
        arrows: false,
        autoplay: true,
        draggable: true,
        verticalSwiping: true,
        swipeToSlide: true,
        infinite: true,
        fade: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        focusOnSelect: true
    });

    $('.news__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        adaptiveHeight: true,
        arrows: true,
        autoplay: true,
        draggable: true,
        verticalSwiping: true,
        swipeToSlide: true,
        infinite: true,
        autoplaySpeed: 4000,
    });
});
    
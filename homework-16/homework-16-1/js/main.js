$('.burger').on('click', function(){
    $('.header__menu').slideToggle();
    $('.burger').toggleClass('burger__active');
});
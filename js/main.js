$(document).ready(function(){
initCall();


    $('.showcase').slick({
        dots: true,
        speed: 500,
        autoplay:true,
        autoplaySpeed: 3000,
        arrows: true
    });
    $('.showcase').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            delay();
    });
    $('.showcase').on('init', function(event){
        $('.main-heading').addClass('animation');
    });

















    function delay(){
        setTimeout(function () {
            $('.main-heading').addClass('animation');
            setTimeout(function () {
                $('.main-heading').removeClass('animation');
            },1000);

            $('.description').addClass('animation');
            setTimeout(function () {
                $('.description').removeClass('animation');
            },1000);

            $('.slide-btn_1').addClass('animation');
            setTimeout(function () {
                $('.slide-btn_1').removeClass('animation');
            },1000);

            $('.slide-btn_2').addClass('animation');
            setTimeout(function () {
                $('.slide-btn_2').removeClass('animation');
            },1000);

        },100);

    }

//    accordion
    $("#accordion").accordion();


function initCall(){
    $('.main-heading').addClass('animation');
    setTimeout(function () {
        $('.main-heading').removeClass('animation');
    },1000);

    $('.description').addClass('animation');
    setTimeout(function () {
        $('.description').removeClass('animation');
    },1000);

    $('.slide-btn_1').addClass('animation');
    setTimeout(function () {
        $('.slide-btn_1').removeClass('animation');
    },1000);

    $('.slide-btn_2').addClass('animation');
    setTimeout(function () {
        $('.slide-btn_2').removeClass('animation');
    },1000);

}


}); //document ready function
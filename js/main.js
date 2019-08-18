$(document).ready(function(){
initCall();
    var slideUp = {
        distance: '10rem',
        origin: 'bottom',
        opacity: 0,
        duration:1000,
        reset:true
    };
    ScrollReveal().reveal('.scrollReavel',slideUp);

    //map




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


    $(".workshop_list_link").hover(function (e) {
        $(this).prev().css("padding-left",".5rem");
    },function(){
        $(this).prev().css("padding-left","0");
    });

    $(".navigation_icon_img").click(function () {
        $(this).fadeOut();
        $(".navigation_list_close").fadeIn();
        $(".navigation_list").css({
            "display":"flex"
        }).animate({
            "opacity":"0.9"
        },500);
    });
    $(".navigation_list_close_icon").click(function () {
        $(".navigation_list").animate({
            "opacity":"0"
        },500);
        setTimeout(function(){
            $(".navigation_list").css("display","none");
        },500);
        $(".navigation_icon_img").fadeIn("500");
        $(".navigation_list_close").fadeOut();

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
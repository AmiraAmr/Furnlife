
//**POPUP
var windowWidth = $(window).width(),
    marginCentering = (windowWidth - 700) / 2,
    appeared = 0;
$(".popUp .container").css("marginLeft",marginCentering);

$(".popUp i").click(function() {
    $(".popUp").fadeOut(300);
})
/*
$(window).scroll(function() {
    if (appeared == 0){
        $(".popUp").fadeIn(300);
        appeared = 1;
    }
})
*/




//**SALE
$(".sale i").click(function() {
    $(this).parent(".sale").fadeOut(300);
})

//**NAVBAR active element
$(".navbar .navbar-right li>a:not(.pages)").click(function() {
    $(".navbar .navbar-right li>a").removeClass("active");
    $(this).addClass("active");
})

var navbarOffset = $(".navbar").offset().top,
    h = $(".navbar").height();

$(window).scroll(function() {
    
    var windowScroll= $(window).scrollTop();
    //console.log("sum : " + navbarOffset + h);
    //console.log("scroll : " + windowScroll);
    if(windowScroll >= navbarOffset + h) {
        $(".navbar").addClass("navbar-fixed-top");
        
    } else {
        $(".navbar").removeClass("navbar-fixed-top");
    }
})

//**CAROUSEL arrows
$(".car .carousel").hover(function() {
    $(".car .carousel a").fadeIn(200).delay(2000).fadeOut(200);
})


//**SLIDER
$(".products .topics h3").click(function() {
    $(".products .topics h3").removeClass("active");
    $(this).addClass("active");
    $(".products .content>div").fadeOut(300);
    $($(this).data("prod")).delay(500).fadeIn(300);
})

//heart
$(".products .content .item i.fa-heart").click(function() {
    $(this).toggleClass("far").toggleClass("fas");
})
$(".bedroom .item i.fa-heart").click(function() {
    $(this).toggleClass("far").toggleClass("fas");
})
$(".outdoor .item i.fa-heart").click(function() {
    $(this).toggleClass("far").toggleClass("fas");
})
$(".lighting .item i.fa-heart").click(function() {
    $(this).toggleClass("far").toggleClass("fas");
})


//**MEDIA FOOTER
$(".footer .media i").hover(function() {
    var c = $(this).data("color");
    //console.log(c);
    $(this).css("color",c);
})
$(".footer .media i").mouseleave(function () {
    $(this).css("color","#999");
})

//**TO TOP BUTTON
$(window).scroll(function() {
    //console.log($(this).scrollTop());
    if($(this).scrollTop() >= 700) {
        $(".toTop").fadeIn(600);
    } else{
        $(".toTop").fadeOut(600);
    }
})
$(".toTop").click(function() {
    $("html,body").animate({scrollTop:0},500);
})

(function infinteArrowAnimation() {
    "use strict";
    $(".toTop").animate({bottom:"30px",opacity:"0.7"},1000,function() {
        $(".toTop").animate({bottom:"70px",opacity:"1"},1000,function() {
            infinteArrowAnimation();
    });
    });
}());
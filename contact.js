

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
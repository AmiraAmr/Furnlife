
var h = $("body").height();
//console.log(h);
$(".layer2").height(h);

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

//heart
$(".categories .items .item i.fa-heart").click(function() {
    $(this).toggleClass("far").toggleClass("fas");
})

//CATEGORIES
$(".categories .categ li").click(function () {
    var appear = $(this).data("category");
    $(".categories .items .item").hide(300);
    //console.log(appear);
    if(appear == "all") {
        $(".categories .items .item").show(300);
    } else {
        $(appear).show(300);
    }
})


//LIST AND GRID VIEW
$(".categories .bar i").click(function() {
    $(".categories .bar i").removeClass("active");
    $(this).addClass("active");
    
    if($(this).hasClass("fa-list-ul")) { //list view
        $(".categories .items .item").removeClass("col-md-3 col-xs-6").addClass("col-xs-6 col-xs-offset-3 list");
    } else if($(this).hasClass("fa-th")) { //grid view
        $(".categories .items .item").removeClass("col-xs-6 col-xs-offset-3 list").addClass("col-md-3 col-xs-6");
    }
})


//HOVERING ITEM
$(".items .row>div").hover(function() {
    console.log("2");
   $(this).children(".cont2").css("visibility","visible");
})
$(".items .row>div").mouseleave(function() {
    $(this).children(".cont2").css("visibility","hidden");
})

//OPENING DISCRIPTION

$(".categories .items .cont2 .fa-external-link-alt").click(function () {
   /* var image = $(this).parentsUntil(".item").children("img").attr("src"),
        discription = $(this).parentsUntil(".item").children(".cont"),
        copy = document.getElementsByClassName(".content");
    copy.appendChild(discription);
    console.log(image);
    
    */
    var t = parseInt($(window).scrollTop()+200)+"px";
    
    $(".categitems .container").css({"top":t}); 
    $(".categitems").slideDown(400);
    $(".layer2").slideDown(400);
    (function noScroll(t) {
        $(window).scroll(function () {
            $(window).offset({
                top:t
            })
        })
    }());
})
//closing discription
$(".categitems i").click(function() {
    $(".categitems").slideUp(400);
    $(".layer2").slideUp(400);
})
//count
var counter = parseInt($(".categitems .count h4:nth-child(2)").text());
$(".categitems .add").click(function () {
    console.log($(".categitems .count h4:nth-child(2)").text());
    counter++;
    console.log(counter);
    $(".categitems .count h4:nth-child(2)").text(counter);
})
$(".categitems .minus").click(function () {
    if (counter > 1){
        console.log($(".categitems .count h4:nth-child(2)").text());
        counter--;
        console.log(counter);
        $(".categitems .count h4:nth-child(2)").text(counter);
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
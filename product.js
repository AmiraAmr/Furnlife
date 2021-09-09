

var h = $("body").height();
//console.log(h);
$(".layer2").height(h);

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


//count
var counter = parseInt($(".view .count h4:nth-child(2)").text());
$(".view .count .add").click(function () {
    console.log($(".view .count h4:nth-child(2)").text());
    counter++;
    console.log(counter);
    $(".view .count h4:nth-child(2)").text(counter);
})
$(".view .minus").click(function () {
    if (counter > 1){
        console.log($(".view .count h4:nth-child(2)").text());
        counter--;
        console.log(counter);
        $(".view .count h4:nth-child(2)").text(counter);
    }
})




//heart
$(".view i.fa-heart").click(function() {
    $(this).toggleClass("far").toggleClass("fas");
})



//share media color
$(".view .share i").each(function() {
    var iconColor = $(this).data("color")
    $(this).css("color",iconColor);
})



//**REVIEWING**//
$(".descriptions .content #reviews h5:nth-child(3)").click(function () {
    $(".descriptions .content #reviews .write").slideDown(500);
})

//STARS IN REVIEWING
var clicked = 0;

$(".descriptions .content #reviews .write .stars i").click(function () {
    clicked = 1;
    $(this).removeClass("far").addClass("fas");
    $(this).prevAll(".descriptions .content #reviews .write .stars i.far").removeClass("far").addClass("fas");
    $(this).nextAll(".descriptions .content #reviews .write .stars i.fas").removeClass("fas").addClass("far");
})

$(".descriptions .content #reviews .write .stars i").mouseenter(function () {
    $(this).removeClass("far").addClass("fas");
    $(this).prevAll(".descriptions .content #reviews .write .stars i.far").removeClass("far").addClass("fas");
})

$(".descriptions .content #reviews .write .stars i").mouseleave(function () {
    if (clicked == 0) {
        $(".descriptions .content #reviews .write .stars i").removeClass("fas").addClass("far");
    }
})

//submiting review
$(".descriptions .content #reviews .write .btn").click(function () {
    $(".descriptions .content #reviews .thank").show();
    $(".descriptions .content #reviews .write").slideUp(500);
    $(".descriptions .content #reviews .thank").append("<h3>Thanks for reviewing</h3>");
    $(".descriptions .content #reviews .thank").append("<img src='images/product/586612927d90850fc3ce2a46.png'>");
    setTimeout(function () {
        $(".descriptions .content #reviews .thank").fadeOut(800);
    },1500);
    setTimeout(function () {
        $(".descriptions .content #reviews .thank").children().remove()
    },2500);
})

//media icons color in comments
$(".descriptions .content #comments .media i").each(function() {
    var iconColor = $(this).data("color")
    $(this).css("backgroundColor",iconColor);
})

//heart of recommend
$(".descriptions .content #comments i.fa-heart").click(function() {
    $(this).toggleClass("far").toggleClass("fas");
    if($(this).hasClass("fas")){
        $(this).next("h4").text("Recommended");
    } else{
        $(this).next("h4").text("Recommend");
    }
})


//descriptions
$(".descriptions .topics h4").click(function() {
    $(".descriptions .topics h4").removeClass("active");
    $(this).addClass("active");
    $(".descriptions .content>div").slideUp(300);
    $($(this).data("topic")).delay(500).slideDown(400);
})


//hovering items
$(".related .item").hover(function() {
    $(this).children(".cont").hide();
    $(this).children(".cont2").fadeIn(500);
})
$(".related .item").mouseleave(function() {
    $(this).children(".cont2").hide();
    $(this).children(".cont").fadeIn(300);
})

$(".related .item .cont2 .fa-external-link-alt").click(function () {
    var t = parseInt($(window).scrollTop()+200)+"px";
    
    $(".categitems .container").css({"top":t}); 
    $(".categitems").slideDown(400);
    $(".layer2").slideDown(400);
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
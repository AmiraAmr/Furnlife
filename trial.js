//HOVERING ITEM
$(".items .row>div").hover(function() {
    console.log("2");
   $(this).children(".cont2").css("visibility","visible");
})
$(".items .row>div").mouseleave(function() {
    $(this).children(".cont2").css("visibility","hidden");
})


//OPENING DISCRIPTION

$(".items .cont2 .fa-external-link-alt").click(function () {
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
            });
        })
    }());
})
//closing discription
$(".categitems i").click(function() {
    $(".categitems").slideUp(400);
    $(".layer2").slideUp(400);
})

/*
//HOVERING ITEM
$(".items .row>div").hover(function() {
    $(this).append("<div class='rr'></div>");
    $(this).children(".rr").append('<i class="fas fa-shopping-cart"></i>');
    $(this).children(".rr").append('<i class="fas fa-external-link-alt"></i>');
    $(this).children(".cont").hide();
    //$(this).children(".rr").fadeIn(500);
})
$(".items .row>div").mouseleave(function() {
    $(".rr").remove();
    $(this).children(".cont").fadeIn(300);
})
*/
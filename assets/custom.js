$(document).ready(function() {
    $(window).scroll(function() {    
        var scrollDown = $(window).scrollTop();

        if (scrollDown >= 50) {
            $(".header").addClass("headerSticky");
        }
    });

    $(window).scroll(function() {    
        var scrollUp = $(window).scrollTop();

        if (scrollUp <= 250) {
            $(".header").removeClass("headerSticky");
        }
    });

    $(window).resize(function(){
        if ($(window).width() <= 900){  
            $('.header-search').attr('placeholder','Search');
        }  else {
            $('.header-search').attr('placeholder','Search games, systems, support, etc.');
        }
    });

	$("#scarousel-toggle-right").click(function() {
        $(".small-carousel-item").addClass("shift");
        $(".scarousel-indicator.one").removeClass("active");
        $(".scarousel-indicator.two").addClass("active");
    });
    $("#scarousel-toggle-left").click(function() {
        $(".small-carousel-item").removeClass("shift");
        $(".scarousel-indicator.two").removeClass("active");
        $(".scarousel-indicator.one").addClass("active");
    });

    $(".scarousel-indicator.one").click(function() {
        $(".small-carousel-item").removeClass("shift");
        $(this).addClass("active");
        $(".scarousel-indicator.two").removeClass("active");
    });

    $(".scarousel-indicator.two").click(function() {
        $(".small-carousel-item").addClass("shift");
        $(".scarousel-indicator.one").removeClass("active");
        $(this).addClass("active");
    });
   
   var banana = "hello world";
   alert(banana);

});
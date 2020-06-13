
/*
 * Theme Name: GoldCoin - bitcoin cryptocurrency HTML Template 
 * File name: main.js
 * Theme URL: http://www.kamric.com/Goldcoin
 * Description: GoldCoin - bitcoin cryptocurrency HTML Template 
 * Version: 1.0
 */
 
 

/*------------------------------------------*/
/* 
/*Nav Scroll Fix 
/* 
/*------------------------------------------*/
 $(window).on('scroll', function() {
     if ($(window).scrollTop() > 40) {
         $("nav.transparrent-bg").css({
             'background-color': '#fff', 'border-bottom': '1px solid #eee' 
        }
        );
         $("nav.transparrent-bg .menuzord-menu > li > a").css({
             'padding-top': '40px', 'color': '#333' 
        }
        );
         $("nav.transparrent-bg .menuzord-brand").css({
             'margin-top': '6px', 
        }
        );
         $("nav.transparrent-bg .right_mp_menu > ul > li > a").css({
             'padding-top': '40px', 'color': '#333' 
        }
        );
         $("nav.navbar-fixed-top").addClass("nav_border");
         $(".changeable").attr("src", "img/logo.png");
    }
     else {
         $("nav.transparrent-bg").css({
             'background-color': 'transparent', 'border': '1px solid transparent' 
        }
        );
         $("nav.transparrent-bg .menuzord-menu > li > a").css({
             'padding-top': '40px', 'color': '#fff' 
        }
        );
         $("nav.transparrent-bg .menuzord-brand").css({
             'margin-top': '6px', 
        }
        );
         $("nav.transparrent-bg .right_mp_menu > ul > li > a").css({
             'padding-top': '40px', 'color': '#fff' 
        }
        );
         $("nav.navbar-fixed-top").removeClass("nav_border");
         $(".changeable").attr("src", "img/logo-2.png");
    }
}
);
/*------------------------------------------*/
/* 
/*Menu 
/* 
/*------------------------------------------*/
 $("#menuzord").menuzord({
     align: "right", scrollable: true 
}
);
/*------------------------------------------*/
/* 
/*. loader 
/* 
/*------------------------------------------*/
 $("#loader").fadeOut("slow", function() {
     $("#preloader").delay(300).fadeOut("slow") 
}
) 

/*------------------------------------------*/
/* 
/*. Team 
/* 
/*------------------------------------------*/
 $('.team-carousel').owlCarousel({
     navigation: true, navigationText: [ '<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>' ], items: 3, itemsDesktop: [1024, 3], itemsDesktopSmall: [991, 3], itemsTablet: [768, 2], itemsMobile: [480, 1], pagination: false, autoPlay: true 
}
);
/*------------------------------------------*/
/* 
/*. clients 
/* 
/*------------------------------------------*/
 $("#clients").owlCarousel({
     autoPlay: 3000, items: 5, itemsDesktop: [1200, 4], itemsDesktopSmall: [991, 3], itemsTablet: [768, 2], itemsMobile: [480, 1], slideSpeed: 900, navigation: false, pagination: false, 
}
);
/*------------------------------------------*/
/* 
/*. full-heigh banner 
/* 
/*------------------------------------------*/
 $(".full-height").height($(window).height()), $(window).on("resize", function() {
     $(".full-height").height($(window).height()) 
}
) 
/*------------------------------------------*/
/* 
/*. CounterUp 
/* 
/*------------------------------------------*/
 if ($("span.count").length > 0) {
     $('span.count').counterUp({
         delay: 10, // the delay time in ms time: 1000 // the speed time in ms 
    }
    );
}
/*------------------------------------------*/
/* 
/*. Go to top 
/* 
/*------------------------------------------*/
 if ($('#back-to-top').length) {
     var scrollTrigger = 100, backToTop = function() {
         var scrollTop = $(window).scrollTop();
         if (scrollTop > scrollTrigger) {
             $('#back-to-top').addClass('show');
        }
         else {
             $('#back-to-top').removeClass('show');
        }
    }
    ;
     backToTop();
     $(window).on('scroll', function() {
         backToTop();
    }
    );
     $('#back-to-top').on('click', function(e) {
         e.preventDefault();
         $('html,body').animate({
             scrollTop: 0 
        }
        , 900);
    }
    );
}

/*------------------------------------------*/
/* 
/*. prettyphoto Lightbox 
/* 
/*------------------------------------------*/
 $("a[class^='work']").prettyPhoto();
 // JavaScript Document // JavaScript Document// JavaScript Document
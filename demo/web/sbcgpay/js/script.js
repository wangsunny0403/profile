$(function() {
    /*scrollTop*/
    $('.scrollTop, .topBtn').click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
    if ( $(window).width() < 768 ) {
        $(".navBar li a").click(function() {
            $(".navbar-collapse").attr("aria-expanded","false");
            $(".navbar-collapse").removeClass('in');
            var activeTab = $(this).attr("rel");
            $(".mbt").removeClass("addPadding");
	        $(".mbt[rel^='"+activeTab+"']").addClass("addPadding");
        });
    }
    if ( $(window).width() > 768 ) {
        /*animation*/
        new WOW().init();
    }
});
/*scroll menu*/
$(document).ready( function(){
    /*menuScroll*/
    $(".navBar li a[href^=#]:not([href=#])").click(function() {
        var target = $(this.hash);
        $("html,body").animate({
            scrollTop: target.offset().top
        }, 1000);
        return false;
    });

   //如何注册CGP
   $('.registered_body').slick({
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
            },
            {
                breakpoint: 760,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
            },
        ]
    });


    //如何购买CGP币
    $('.buy_body').slick({
        centerMode: true,
        slidesToShow: 3,
        centerPadding: '10px',
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    arrows: true,
                    slidesToShow: 3,
                    centerPadding: '10px',
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    centerPadding: '10px',
                    dots: true
                }
            }
        ]
    });

    // Cache selectors
    var topnavBar = $(".navBar"),
        //topnavBarHeight = topnavBar.outerHeight(),
        calcnavBarHeight = ($(window).height())/2,
        // All list items
        navBarItems = topnavBar.find('a:not([href ^="http://"])'),
        // Anchors corresponding to navBar items
        scrollItems = navBarItems.map(function(){
            var item = $($(this).attr("href"));
            if (item.length) { 
                return item;
            }
            
        });

    // Bind to scroll
    $(window).scroll(function(){
        // Get container scroll position
        var // fromTop = $(this).scrollTop()+topnavBarHeight,
            fromTop = $(this).scrollTop()+calcnavBarHeight;
        // Get id of current scroll item
        var cur = scrollItems.map(function(){
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";
        // Set/remove active class
        navBarItems
            .parent().removeClass("act")
            .end().filter('[href=#'+id+']').parent().addClass("act");
        if ($(window).scrollTop() <= 0) {
            $(".navBar li").removeClass("act");
        }
        
    });
});
$(document).scroll(function() {
    /*fixedTop*/
    if ( $(window).width() > 768 ) {
        if($(this).scrollTop()>130){
            $("body").addClass("scroll");
        }
        else{
            $("body").removeClass("scroll");
        }
    }
    /*scrollTop*/
    if($(this).scrollTop()>300){
        $(".scrollTop").fadeIn();
    }
    else{
        $(".scrollTop").fadeOut();
    }
})








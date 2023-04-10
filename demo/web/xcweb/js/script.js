$(function() {
    /*scrollTop*/
    $('.scrollTop, .topBtn').click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
    //click menu and close
    if ( $(window).width() < 991 ) {
        $(".navBar div a").click(function() {
            $(".navbar-toggler").attr("aria-expanded","false");
            $(".navbar-collapse").removeClass('show');
        });
    }
    if ( $(window).width() > 991 ) {
        /*animation*/
        new WOW().init();
    }
});
/*scroll menu*/
$(document).ready( function(){
    /*menuScroll*/
    $(".navBar div a[href^=#]:not([href=#])").click(function() {
        var target = $(this.hash);
        $("html,body").animate({
            scrollTop: target.offset().top
        }, 1000);
        return false;
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
    //slider
    $('.quality-list').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
          
});
$(document).scroll(function() {
    /*fixedTop*/
    if ( $(window).width() > 991 ) {
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



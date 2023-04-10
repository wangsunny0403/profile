/*imgLiquid*/
$(".imgLiquidFill").imgLiquid();
$('.bannerBox .item').css('height', $(window).height());

/*works*/
$(document).ready(function(){
    //FANCYBOX
    //https://github.com/fancyapps/fancyBox
    $(".fancybox").fancybox({
        padding:0
    });
});

$(document).ready( function(){
    /*scrollTop*/
    $('.scrollTop').click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
    /*menuScroll*/
    $("a[href^=#]:not([href=#])").click(function() {
        var target = $(this.hash);
        $("html,body").animate({
            scrollTop: target.offset().top-62
        }, 1000);
        return false;
    });
    /*scrollMenu*/
    // Cache selectors
    var topnavBar = $(".navBar"),
        //topnavBarHeight = topnavBar.outerHeight(),
        calcnavBarHeight = ($(window).height())/2,
        // All list items
        navBarItems = topnavBar.find("a"),
        // Anchors corresponding to navBar items
        scrollItems = navBarItems.map(function(){
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
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
            .end().filter("[href=#"+id+"]").parent().addClass("act");
        if ($(window).scrollTop() <= 0) {
            $(".navBar li").removeClass("act");
        }
    });
    $('.products_list').slick({
      dots: true,
      infinite: true,
      speed: 300,
      arrows: false,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint:900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    /*works_list*/
    $('.works_list').slick({
      dots: false,
      infinite: true,
      speed: 300,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint:900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
});
$(document).scroll(function() {
    /*scrollTop*/
    if($(this).scrollTop()>300){
        $(".scrollTop").fadeIn();
        $(".header").addClass("header_scroll");
    }
    else{
        $(".scrollTop").fadeOut();
        $(".header").removeClass("header_scroll");
    }
    /*fixedTop*/
    if ( $(window).width() > 768 ) {
        if($(this).scrollTop()>130){
            $("body").addClass("scroll");
        }
        else{
            $("body").removeClass("scroll");
        }
    }
})

/*animation*/
new WOW().init();





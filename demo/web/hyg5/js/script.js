$(document).scroll(function() {
    /*scrollTop*/
    if($(this).scrollTop()>100){
        $(".scrollTop").fadeIn();
    }
    else{
        $(".scrollTop").fadeOut();
    }
})
/*tab accordion*/
$(".tab-content").hide();
$(".tab-content:first").show();

$("ul.page-tabs li").click(function() {

    $(".tab-content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();

    $("ul.page-tabs li").removeClass("active");
    $(this).addClass("active");
});
$('ul.page-tabs li').last().addClass("tab-last");

//side-time
$(".side-tag").click(function(){
    $(".side-time").toggleClass("show");
})

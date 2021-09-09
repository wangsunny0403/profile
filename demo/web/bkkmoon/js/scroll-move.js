// JavaScript Document
// $(function(){
// 	$('#float_btn').css('top',$(window).height()/2)
// 	$(document).scroll(
// 		function(){
// 			var theTOP=$(window).scrollTop()
// 			var contentHeight=$(window).height()
// 			$('#float_btn').stop().animate({top:theTOP+contentHeight/2},1000,'easeOutElastic')
// 		});
// })



// JavaScript Document
$(function(){


	
	//按下TOP按鈕
	$('#scroll-a').click(
		function(){
			
			//控制整個網頁畫面,設定HTML或body進行animate動畫,移到網頁最上方
			$('html,body').animate({scrollTop:'0px'},1000,'easeOutQuint')
			
			//不回傳,使原本的HTML超連結失去效果，針對只讀取jQuery效果。
			return false;
		});


	$('#scroll-b').click(
		function(){
			
			//控制整個網頁畫面,設定HTML或body進行animate動畫,移到網頁最上方
			$('html,body').animate({scrollTop:$('#login').offset().top},1000,'easeOutQuint')
			
			//不回傳,使原本的HTML超連結失去效果，針對只讀取jQuery效果。
			return false;
		});


	$('#scroll-c').click(
		function(){
			
			//控制整個網頁畫面,設定HTML或body進行animate動畫,移到網頁最上方
			$('html,body').animate({scrollTop:$('#winner-list').offset().top},1000,'easeOutQuint')
			
			//不回傳,使原本的HTML超連結失去效果，針對只讀取jQuery效果。
			return false;
		});

	$('#scroll-d').click(
		function(){
			
			//控制整個網頁畫面,設定HTML或body進行animate動畫,移到網頁最上方
			$('html,body').animate({scrollTop:$('#activity-details').offset().top},1000,'easeOutQuint')
			
			//不回傳,使原本的HTML超連結失去效果，針對只讀取jQuery效果。
			return false;
		});
	
})


// JavaScript Document

$(function(){
	
	//網頁文件載入後，設定top位置
	//$('#float_btn').css('top',$(window).height()/2)
	
	//設TOP位置，定位的上邊界：(視窗的高度-下邊界距離)
	//$('#float_nav').css('top','$(window).height()-100')
	
	//網頁文件捲動時，執行的動作
	/*$(document).scroll(
		function(){
			//紀錄視窗目前上方捲動的相對位置值
			var theTOP=$(window).scrollTop()
			
			//紀錄視窗內容的高度
			var contentHeight=$(window).height()
			
			//捲動時，固定於視窗的右下角(定位上方距離：視窗目前上方捲動的相對位置+視窗內容區的高度一下邊界距離)
			$('#float_btn').stop().animate({top:theTOP+contentHeight/2},1000,'easeOutElastic')
			
		});*/
		//按下TOP按鈕
		/*$('#float_nav a').click(
		function(){
		
			//控制整個網頁畫面,設定HTML或body進行animate動畫,移到網頁最上方
			$('html,body').animate({scrollTop:'0px'},1000,'easeOutBounce')
		
		//不回傳,使原本的HTML超連結失去效果，針對只讀取jQuery效果。
		return false;
		});*/
})



// JavaScript Document
$(function(){

	//網頁文件捲動時,執行的動作
/*	$(document).scroll(
	function(){
		
		//記錄視窗目前上方捲動的相對位置值
		var theTOP=$(window).scrollTop()
		
		//記錄視窗內容區的高度
		var contentHeight=$(window).height()
		
		//捲動時,固定於視窗的右下角（定位上方距離：視窗目前上方捲動的相對位置值＋視窗內容區的高度－下邊界距離）
		$('#float_btn').stop().animate({top:(theTOP+contentHeight)-100},500,'easeOutBounce')
			
	});*/
	
	//按下TOP按鈕
	$('#float_btn a').click(
		function(){
			
			//控制整個網頁畫面,設定HTML或body進行animate動畫,移到網頁最上方
			$('html,body').animate({scrollTop:'0px'},1000,'easeInExpo')
			
			//不回傳,使原本的HTML超連結失去效果，針對只讀取jQuery效果。
			return false;
		});


	$('#go_uefa_act').click(
		function(){
			
			//控制整個網頁畫面,設定HTML或body進行animate動畫,移到網頁最上方
			$('html,body').animate({scrollTop:$('#uefa_act').offset().top},1000,'easeOutQuint')
			
			//不回傳,使原本的HTML超連結失去效果，針對只讀取jQuery效果。
			return false;
		});


	$('#go_btn').click(
		function(){
			
			//控制整個網頁畫面,設定HTML或body進行animate動畫,移到網頁最上方
			$('html,body').animate({scrollTop:$('#activity-roulette-game').offset().top},1000,'easeOutQuint')
			
			//不回傳,使原本的HTML超連結失去效果，針對只讀取jQuery效果。
			return false;
		});
	
})


$(function(){
	$(".go-call").on("click",function(){
		$(".s-mask").fadeIn(300);
		$(".o-warn").hide();
	});
	$(".go-collect").on("click",function(){
		$(".s-mask").fadeIn(300);
		$(".s-connect").hide();
		// setTimeout(function(){
		// 	$(".s-mask").fadeOut(200);
		// },1000);
	});
	$(".cancel,.tc-footer input:button").on("click",function(){
		$(".s-mask").hide();
	});

	// vip_info.html
	// 点击历史
	$(".history,a.bg-green,a.bg-orange").on("click",function(){
		$(".s-mask").fadeIn(300);
		// setTimeout(function(){
		// 	$(".s-mask").fadeOut(200);
		// },1500);
	});
	//food-choosed
	
});
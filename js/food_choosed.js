$(function(){
	cal();
	$("#cancel").on("click",function(){
		$(".s-mask").hide();
	});
	$("li.add-list").on("click",function(){
		$(this).children("i").addClass("choosed").parent().siblings().children('i').removeClass("choosed");
	});
	$(".add-some").on("click",function(){
		var that = this;
		$(".s-mask").fadeIn(300);
	});
	$("#navBtn").children('a').on("click",function(){
		var index = $(this).index();
		if (!index == 0) {
			$(this).next().addClass("pr").prev().addClass("orange").prev().removeClass("orange");
		}else{
			$(this).addClass("orange").next().removeClass("orange").next().removeClass("pr");
		}
		$(".list-box").eq(index).removeClass("none").siblings().addClass('none');
	});
	$('.s-cut').on('click',function(){
		$(this).parents('.food').remove();
		cal();
	});
	var arr_mt = [];
	$(".way-confirm a").on("click",function(){
		var arr1 = [],
			arr2 = [],
			str = '',
			$i = $("#list1").find("i"),
			$I = $("#list2").find("i");
		getArr($i,arr1,str);
		getArr($I,arr2);
		arr_mt.push(arr1,arr2);
		$(".s-mask").hide();
	});
	$(".list-box li").on("click",function(){
		$(this).children("i").toggleClass("choosed");
	});
	function getArr(obj,arr,str){
		for (var i = 0; i < obj.length; i++) {
			if(obj.eq(i).hasClass('choosed')){
				var str = obj.eq(i).prev().children('span').eq(0).text();
					arr.push(str);
			}else{
				continue;
			}
		}
	}
	function cal(){//计算金额
		var $unit = $('.unit'),
			money = 0,
			$remind = $(".remind"),
			limit = Number($remind.find('span').text());
		for (var i = 0; i < $unit.length; i++) {
			var mo = Number($unit.eq(i).text());
			money += mo;
		}
		money = money.toFixed(1);
		$('#pay-total').text(money);
		$('#num').text($unit.length);
		if (money < 80) {
			$('.remind').show().next().hide();
		}else{
			$('.remind').hide().next().show();
		}
	}
})
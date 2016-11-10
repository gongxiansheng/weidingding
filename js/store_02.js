$(function(){
	// 菜品添加删除
	$(".s-add").on('click',function(){
		$(this).hide().parents(".add-cut").children().children("a:eq(0),a:eq(2)").css('display','block');
		caculate();
	});
	$(".s-cut").on('click',function(){
		$(this).parent().next().children(".s-add").show().parents(".add-cut").children().children("a:eq(0),a:eq(2)").hide();
		caculate();
	});
	// 优惠与分类菜单切换
	$(".food-devide a").on('click',function(e){
		var index=$(this).index();
		$(".food-devide a").eq(index).addClass('btn').siblings().removeClass('btn');
		$(".s-mask").show();
		$(".sub-menu").eq(index).slideDown().siblings(".sub-menu").slideUp()
		
	});
	// 点击蒙版，蒙版隐藏
	$(".s-mask").on('click',function(e){
		$(".food-devide a").removeClass('btn').parent().children(".sub-menu").hide();
		$(this).css('display','none');
	});
	// 点击菜名弹出菜图片
	$(".food-name span").on("click",function(){
		$(".s-mask").css("z-index","1000").show().children().show();
	});

	function caculate(){
		var num = 0,
			money = 0,
			$remind = $(".remind"),
			limit = Number($remind.find('span').text());
		$(".s-cut").each(function(){
			if ($(this).css("display")==="block") {
				var s = Number($(this).parents(".amount").children(".money").children().last().text());
				num++;
				money += s;
			}
		});
		money = money.toFixed(1);
		$(".num").text(num);
		$(".pay-total").text(money);
		if (money > limit) {
			$remind.hide().siblings().show();
		}else{
			$remind.show().siblings().hide();
		}
	}
});
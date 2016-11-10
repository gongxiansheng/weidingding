$(function(){
	(function(){
		var $price = $('.price'),
			tltal = null,
			money = 0;
			for (var i = 0; i < $price.length; i++) {
				var mo = Number($price.eq(i).children('span').text());
				money += mo;
			}
			total = Number((money -Number($('#discut').text())).toFixed(2));
			$('#beforecut').text(money);
			$('.num').each(function(){
				$(this).text($price.length);
			});
			$('#total').text(total);
			$('.pay-total').text(total);
	})();
	$('.o-btn').on('click',function(){
		$('.s-mask').css('z-index','10000').fadeIn(200);
		
	});
	$('.s-mask').on('click',function(){
			$(this).fadeOut(200);
	});
})
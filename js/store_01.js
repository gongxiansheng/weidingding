$(function(){
	$(".s-add").on('click',function(){
		$(this).addClass('display').parent().parent(".add-cut").children().children("a:eq(0),a:eq(1),a:eq(3)").removeClass('display')
	});
	$(".s-cut").on('click',function(){
		$(this).parent().next().children(".s-add").removeClass('display').parent().parent(".add-cut").children().children("a:eq(0),a:eq(1),a:eq(3)").addClass('display')
	});





})
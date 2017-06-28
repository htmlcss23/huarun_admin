$(function(){
	$('.list h3').click(function(){
		$(this).parent().toggleClass('active');		
	});
	$(".side").click(function(){
		$(this).toggleClass('se');
		$('.menu').toggle();
		$('.content').toggleClass('se');
	});
	
	
	/*隐藏查询*/
	$('.refer').click(function(){
		$(this).toggleClass('se');
		$('.see').toggle();
	})
})

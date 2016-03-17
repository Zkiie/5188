$(document).ready(function(){

	// 点击抽奖
	$(".red").click(function(){
		$('.red').addClass("shake");
		setTimeout(function(){
			$(".red").removeClass("shake");
		
			
		},2000);

	});
});
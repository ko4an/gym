$(document).scroll(function(){
	var scro = $('.bxslider').offset().top;
	var scr=document.documentElement.scrollTop;
	 	if(scr<=scro){
	 		$("#f").css({"display":"none"})
	 		$("#s").css({"display":"inline"})

	 	}
	 	else if(scr>=scro){
	 		$("#s").css({"display":"none"})
	 		$("#f").css({"display":"inline"})
	 	}
	 })
$(document).scroll(function () {
var dds=document.documentElement.scrollTop;
	if(dds<=40){
	 	$("body").css({"overflow-y":"hidden"})
	}
	else{
		$("body").css({"overflow-y":"auto"})
	}
})

$(document).ready(function(){
	$("#f").click(function(){
		var scro = $('.bxslider').offset().top;
		$("html").animate({scrollTop:scro},1000)
		$("body").css({"overflow-y":"hidden"})
	})
	$("#s").click(function(){
		var scro = $('.main_usl').offset().top;
		$("html").animate({scrollTop:scro},1000)
		$("body").css({"overflow-y":"scroll"})
	})
})


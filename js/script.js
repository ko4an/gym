$(document).scroll(function(){
	var scr=document.documentElement.scrollTop;
	 	if(scr<=1030){
	 		$("#f").css({"display":"none"})
	 		$("#s").css({"display":"inline"})

	 	}
	 	else if(scr>=1030){
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
		$("html").animate({scrollTop:0},1000)
		$("body").css({"overflow-y":"hidden"})
	})
	$("#s").click(function(){
		$("html").animate({scrollTop:1080},1000)
		$("body").css({"overflow-y":"scroll"})
	})
})


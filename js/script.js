$(document).ready(function(){
	 $(".bwrktext").hover(function(){
	 	$(".bwrki").animate({"margin-left":"0.75vw"},500);
	 	$(".bwrki").animate({"margin-left":"1.25vw"},500);
	 })
})
$(document).ready(function(){
	var i=3;
	$(".btstbtnl").click(function(){
		i=i-1;
		if(i==0){
			i=5;
			$(".btstav5").css({"background-size":"4.375vw 4.375vw"});
			$(".btstav4, .btstav3, .btstav2, .btstav1").css({"background-size":"2.8125vw 2.8125vw"})
			$(".btstnm").text("COLE MATTHEW");
		}
		else if(i==1){
			$(".btstav1").css({"background-size":"4.375vw 4.375vw"});
			$(".btstav4, .btstav3, .btstav2, .btstav5").css({"background-size":"2.8125vw 2.8125vw"})
			$(".btstnm").text("WILLIAMS EUGENE");
		}
		else if(i==2){
			$(".btstav2").css({"background-size":"4.375vw 4.375vw"});
			$(".btstav4, .btstav3, .btstav5, .btstav1").css({"background-size":"2.8125vw 2.8125vw"})
			$(".btstnm").text("GREGORY HUGH");
		}
		else if(i==3){
			$(".btstav3").css({"background-size":"4.375vw 4.375vw"});
			$(".btstav4, .btstav5, .btstav2, .btstav1").css({"background-size":"2.8125vw 2.8125vw"})
			$(".btstnm").text("JANE GALDRIEL");
		}
		else if(i==4){
			$(".btstav4").css({"background-size":"4.375vw 4.375vw"});
			$(".btstav5, .btstav3, .btstav2, .btstav1").css({"background-size":"2.8125vw 2.8125vw"})
			$(".btstnm").text("CLARKE CLAUD");
		}
		else if(i==5){
			$(".btstav5").css({"background-size":"4.375vw 4.375vw"});
			$(".btstav4, .btstav3, .btstav2, .btstav1").css({"background-size":"2.8125vw 2.8125vw"})
			$(".btstnm").text("COLE MATTHEW");
		}
	})
	$(".btstbtnr").click(function(){
		i=i+1;
		if(i==6){
			i=1;
			$(".btstav5").css({"background-size":"4.375vw 4.375vw"});
			$(".btstav4, .btstav3, .btstav2, .btstav1").css({"background-size":"2.8125vw 2.8125vw"})
			$(".btstnm").text("WILLIAMS EUGENE");
		}
		if(i==1){
			$(".btstav1").css({"background-size":"4.375vw 4.375vw"});
			$(".btstav4, .btstav3, .btstav2, .btstav5").css({"background-size":"2.8125vw 2.8125vw"})
			$(".btstnm").text("WILLIAMS EUGENE");
		}
		if(i==2){
			$(".btstav2").css({"background-size":"4.375vw 4.375vw"});
			$(".btstav4, .btstav3, .btstav5, .btstav1").css({"background-size":"2.8125vw 2.8125vw"})
			$(".btstnm").text("GREGORY HUGH");
		}
		if(i==3){
			$(".btstav3").css({"background-size":"4.375vw 4.375vw"});
			$(".btstav4, .btstav5, .btstav2, .btstav1").css({"background-size":"2.8125vw 2.8125vw"})
			$(".btstnm").text("JANE GALDRIEL");
		}
		if(i==4){
			$(".btstav4").css({"background-size":"4.375vw 4.375vw"});
			$(".btstav5, .btstav3, .btstav2, .btstav1").css({"background-size":"2.8125vw 2.8125vw"})
			$(".btstnm").text("CLARKE CLAUD");
		}
		if(i==5){
			$(".btstav5").css({"background-size":"4.375vw 4.375vw"});
			$(".btstav4, .btstav3, .btstav2, .btstav1").css({"background-size":"2.8125vw 2.8125vw"})
			$(".btstnm").text("COLE MATTHEW");
		}
	})
})
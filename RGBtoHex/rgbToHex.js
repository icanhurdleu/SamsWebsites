
$(document).ready(function () { 
	$("#calculatehex").click(function () { 
		var e = document.getElementById("R"); 
		var d = document.getElementById("G"); 
		var a = document.getElementById("B"); 
		var c = document.getElementById("hex"); 
		c.value = RGBtoHex(e.value, d.value, a.value); 
		$("#circle1").css("background-color", "#" + c.value);
		$("#circle2").css("background-color", "#" + c.value);
		$("#circle3").css("background-color", "#" + c.value);
		$('#text1').css("color", "#" + c.value);
		$('#text2').css("color", "#" + c.value); 
	}) 
}); 

function RGBtoHex(b, a, c) { 
	return toHex(b) + toHex(a) + toHex(c) 
}

 function toHex(a) { 
 	if (a == null) { return "00" } 
 	a = parseInt(a); if (a == 0 || isNaN(a)) { return "00" } 
 	a = Math.max(0, a); a = Math.min(a, 255); a = Math.round(a); 
 	return "0123456789ABCDEF".charAt((a - a % 16) / 16) + "0123456789ABCDEF".charAt(a % 16) 
 };
$(document).ready(function () { 
	$("#check").click(function () { 
		var num = document.getElementById("num"); 
		var last = isPrime(num);
        writeNum(last);
	}) 
}); 

function isPrime(num) {
    num = parseInt(num.value);

        if (num < 2) {
            return false;
        } else if (num == 2) {
            return true;
        } else {
            var i = 2;
            while (i < num) {
            	if (num % i == 0) {
            		return false;
            	} 
            	i++;
            }
            return true;
        }
}

function writeNum(x) {
    if (x) {
        $('#write').html("");
        $('#write').html("Prime Number!");
    } else {
        $('#write').html("");
        $('#write').html("Not a prime number :(");
    }
}
var clickedTime;
var createdTime;
var reactionTime;
var boxNumber = 0;
var timeArray = [];
var sum = 0;
var averageTime;
var fastTime;
var slowTime;

document.getElementById("start").onclick = function() {
	this.style.display = "none";
	document.getElementById("desc").style.display = "none";
	makeBox();
}

function makeBox() {

 	var time = Math.random();
 	time = time*3000;

 		setTimeout(function() {

 			var top = 400 * Math.random();
 			var left = 1200 * Math.random();

 			document.getElementById("box").style.top = top + "px";
 			document.getElementById("box").style.left = left + "px";
 			document.getElementById("box").style.backgroundColor = getRandomColor();
 			document.getElementById("box").style.display = "block";

 			createdTime = Date.now();

 		}, time);

}

function getRandomColor() {
 	var letters = '0123456789ABCDEF'.split('');
 	var color = "#";
 	for (var i = 0; i < 6; i++) {
 		color += letters[Math.round(Math.random() * 15)];
 	}
 	return color;
 }

function displayStats() {

	for( var i = 0; i < timeArray.length; i++ ){
    	sum += timeArray[i]; //don't forget to add the base
	}

	averageTime = sum/timeArray.length;

	document.getElementById("sum").innerHTML = sum;
	document.getElementById("avg").innerHTML = averageTime;

	document.getElementById("results").style.display = "block";
}

document.getElementById("box").onclick = function() {

 	clickedTime = Date.now();

 	reactionTime = (clickedTime - createdTime)/1000;

 	document.getElementById("time").innerHTML = document.getElementById("time").innerHTML + "<li>"+reactionTime+"</li>";

 	timeArray[boxNumber] = reactionTime;

 	this.style.display = "none";

 	boxNumber += 1;

 	if (boxNumber < 10) {
 		makeBox();
 	} else {
 		displayStats();
 	}

 }

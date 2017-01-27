$(document).ready(function(){
	$('#roster').mouseenter(function(){
		$('#desc').html('In the roster you can find details about each team member, including high school and acheivements.')
	});
	$('#roster').mouseleave(function(){
		$('#desc').html('Hover over a list item to get more information.')
	});

	$('#schedule').mouseenter(function(){
		$('#desc').html('The schedule shows all the games/meets for the team\'s current season.')
	});
	$('#schedule').mouseleave(function(){
		$('#desc').html('Hover over a list item to get more information.')
	});

	$('#news').mouseenter(function(){
		$('#desc').html('View highlights from previous games/meets and any other news associated with the team.')
	});
	$('#news').mouseleave(function(){
		$('#desc').html('Hover over a list item to get more information.')
	});

	$('#records').mouseenter(function(){
		$('#desc').html('View current team records and acheivements.')
	});
	$('#records').mouseleave(function(){
		$('#desc').html('Hover over a list item to get more information.')
	});
})
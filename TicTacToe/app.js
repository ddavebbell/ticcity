$(document).ready(function(){

	let currentTurn = 1;
	let movesMade = 0;
	let square = $(".square");
	let player1 = "x";
	let player2 = "o";

	square.on('mouseover', function(event){

		if (currentTurn === 1) {
				$(".square:hover").css({"background-image": "url(wizard.jpg)"});
		} else if (currentTurn != 1) {
				$(".square:hover").css({"background-image": "url(hotdog.jpg)"})
		} else if (event.target.style.backgroundImage) {
				null
		}
	});

	square.on('mouseout', function(event){
		if (currentTurn === 1) {
			event.target.style.backgroundImage = null;
		} else if (currentTurn != 1) {
			event.target.style.backgroundImage = null;
		} else if (event.target.style.backgroundImage) {
				null
		}
	});

	square.on('click', function(event){
		movesMade++;

		if (currentTurn === 1) {
	
			event.target.style.backgroundImage = 'wizard.jpg';
			currentTurn++;

		} else if (currentTurn != 1) {

			event.target.style.backgroundImage = 'hotdog.jpg';
			currentTurn--;

		}

});

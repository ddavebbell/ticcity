$(document).ready(function() {
	const square = $(".square");
	const player1 = "x";
	const player2 = "o";

	let currentTurn = 1;
	let movesMade = 0;

	square.on('mouseover', function(event) {
		if (isEven(currentTurn) && !event.target.style.backgroundImage) {
			$(".square:hover").css({"background-image": "url(wizard.jpg)"});
		} else if (isOdd(currentTurn) && !event.target.style.backgroundImage) {
			$(".square:hover").css({"background-image": "url(hotdog.jpg)"});
		}
	});

	square.on('mouseout', function(event){
		if (event.target.getAttribute('data-status') != 'in-use') {
			event.target.style.backgroundImage = null;
		}
	});

	square.on('click', function(event) {
		movesMade++;
		if (isEven(currentTurn)) {
			event.target.style.backgroundImage = "url('./wizard.jpg')"
			event.target.setAttribute('data-status', 'in-use');
			currentTurn++;
		} else if (isOdd(currentTurn)) {
			event.target.style.backgroundImage = "url('./hotdog.jpg')"
			event.target.setAttribute('data-status', 'in-use');
			currentTurn--;
		}
	});

	function isEven(n) {
  	return n % 2 == 0;
	}

	function isOdd(n) {
	  return Math.abs(n % 2) == 1;
	}
});

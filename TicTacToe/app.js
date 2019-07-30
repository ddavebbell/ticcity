$(document).ready(function() {

	const square = $(".square");
	const player1 = "X";
	const player2 = "O";

	let currentTurn = 1;
	let movesMade = 0;

	let winnerContainer = $(".winner");
	let reset = $(".reset");


// Reset the Board
	reset.on('click', function(event) {

		let moves = Array.prototype.slice.call($(".square"));
		moves.map((m) => {
			m.innerHTML = ""
			m.style.backgroundImage = ""
			m.setAttribute('data-status', '');
		});
		winnerContainer.html('');
		winnerContainer.css('display', "none");
		currentTurn = 1;
		movesMade = 0;

	});

	function isEven(n) {
  	return n % 2 == 0;
	}

	function isOdd(n) {
	  return Math.abs(n % 2) == 1;
	}

	function declareWinner(winner) {
			winnerContainer.css('display', "block");
			// reset.css('display', 'block');
			winner = winner === player1 ? 'Wizard' : 'Hot Dog Sheriff';
			winnerContainer.html(winner + " Wins!");
	}

	function checkForWinner() {

		if (movesMade > 4) {
			var square = $('.square');
			var moves = Array.prototype.slice.call($(".square"));
			var results = moves.map(function(square) { return square.innerHTML; });
			var winningCombos = [
				[0,1,2],
				[3,4,5],
				[6,7,8],
				[0,3,6],
				[1,4,7],
				[2,5,8],
				[0,4,8],
				[2,4,6]
			];
			return winningCombos.find(function(combo) {
        if (results[combo[0]] !== "" && results[combo[1]] !== "" && results[combo[2]] !== "") {
					if (results[combo[0]] === results[combo[1]] && results[combo[1]] === results[combo[2]]) {
						return true;
					} else {
						return false;
					}
				};
      });
		};

	};



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
		if (isEven(currentTurn) && !(event.target.getAttribute('data-status'))) {
			event.target.style.color = "lightgrey";
			event.target.innerHTML = "o";
			event.target.style.backgroundImage = "url('./wizard.jpg')";
			event.target.setAttribute('data-status', 'in-use');
			currentTurn++;
		} else if (isOdd(currentTurn) && !(event.target.getAttribute('data-status'))) {
			event.target.style.color = "lightgrey";
			event.target.innerHTML = "x";
			event.target.style.backgroundImage = "url('./hotdog.jpg')";
			event.target.setAttribute('data-status', 'in-use');
			currentTurn--;
		}
		if (checkForWinner()) {
			let theWinner = currentTurn === 1 ? player1 : player2;
			declareWinner(theWinner);
		}
	});

});

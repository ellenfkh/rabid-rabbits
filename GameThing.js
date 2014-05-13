
(function(){

	// random board creation until we have real things
	function defineBoard(board) {
		// make some tiles
		for (var i = 0; i < 10; i++) {
			var row = [];
			for (var j = 0; j < 10; j++) {
				row.push(Math.floor(Math.random() * 3))
			}
			board.tiles.push(row);
		}

		// make some bunnies
		for (var i = 0; i < Math.floor((Math.random() * 20) + 1); i++) {

			var randPlayer = Math.floor((Math.random() * 2) + 1);

			if (Math.floor((Math.random() * 2) + 1) === 1) {
				var randBunny = "warrior";
			}
			else {
				var randBunny = "worker";
			}

			var randX = Math.floor((Math.random() * board.tiles.length))
			var randY = Math.floor((Math.random() * board.tiles.length))

			var bunny = {
				player: randPlayer,
				type: randBunny,
				xPos: randX,
				yPos: randY
			};
			board.bunnies.push(bunny);
		}

		// make monies
		for (var i = 0; i < Math.floor((Math.random() * 20) + 1); i++) {

			var randX = Math.floor((Math.random() * board.tiles.length))
			var randY = Math.floor((Math.random() * board.tiles.length))

			board.money.push([randX, randY]);
		}

		// create players
		var player1 = {
			money: Math.floor((Math.random() * 50)),
			score: Math.floor((Math.random() * 1000))
		}
		var player2 = {
			money: Math.floor((Math.random() * 50)),
			score: Math.floor((Math.random() * 1000))
		}
		board.player1 = player1;
		board.player2 = player2;	

	}

	function initialize(board) {

		var numMoney = 7;

		// Create random types of tiles to fill board
		for (var i = 0; i < 10; i++) {
			var row = [];
			for (var j = 0; j < 10; j++) {
				row.push(Math.floor(Math.random() * 3))
			}
			board.tiles.push(row);
		}

		// Place money on board at random locations
		for (var i = 0; i < 7; i++) {
			var randX = Math.floor((Math.random() * board.tiles.length))
			var randY = Math.floor((Math.random() * board.tiles.length))

			while (board.money.indexOf([randX, randY]) > -1) {
				randX = Math.floor((Math.random() * board.tiles.length))
				randY = Math.floor((Math.random() * board.tiles.length))
			}

			board.money.push([randX, randY]);
		}


	}

	// placeholders until we get real values
	var board = {
		tiles: [],
	    bunnies: [],
	    money: [],
	    player1: null,
	    player2: null
	};

	//defineBoard(board);
	initialize(board);

	// Get canvas
	var canvas = document.getElementById("myCanvas");

	drawBoard(canvas, board);
	
	window.update = function(commands) {

	};
})();







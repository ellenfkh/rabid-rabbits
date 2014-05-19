
(function(){

	// Removes the given tile from an array of tiles
	function removeTileFromArray(array, item) {
		var index = findTileIndex(array, item);
		if (index != -1 ) {
			array.splice(index, 1);
		}
	}

	// Finds the index of the array representing a 
	// tile in an array of tiles
	function findTileIndex(array, item) {
		for (var i = 0; i < array.length; i++) {
			if (array[i][0] === item[0] && array[i][1] === item[1]) {
				return i;
			}
		}
		return -1
	}

	// Adds a base and starting bunnies to the board for the specified player
	function initializeBase(board, useableTiles, player) {
		// choose a random tile for the first base
		var randTile = useableTiles[Math.floor(Math.random()
			*useableTiles.length)];

		if (player === 1) {
			board.base1 = randTile;
		}
		else {
			board.base2 = randTile;
		}
		

		// remove all tiles in and surrounding the base from usable tiles
		for (var x = randTile[0] - 2; x < randTile[0] + 3; x++) {
			for (var y = randTile[1] - 2; y < randTile[1] + 3; y++) {
				removeTileFromArray(useableTiles, [x,y]);
			}
		}

		// add initial bunnies at the base
		var origWorker = {
			player: player,
			type: "worker",
			xPos: randTile[0] + 1,
			yPos: randTile[1] + 1
		};
		board.bunnies.push(origWorker);
		origWorker = {
			player: player,
			type: "worker",
			xPos: randTile[0] + 1,
			yPos: randTile[1] - 1
		};
		board.bunnies.push(origWorker);
		var origWarrior = {
			player: player,
			type: "warrior",
			xPos: randTile[0],
			yPos: randTile[1]
		};
		board.bunnies.push(origWarrior);
	}

	// Randomized start for board
	function initialize(board, useableTiles) {
		// Initialize amount of money originally on board and board size
		var numMoney = 10;
		var boardSize = 15;

		// Create random types of tiles to fill board
		for (var i = 0; i < boardSize; i++) {
			var row = [];
			for (var j = 0; j < boardSize; j++) {
				row.push(Math.floor(Math.random() * 3))

				// Add tiles to usable tiles if not on the border
				if (j != 0 && i != 0 && i != 
					boardSize - 1 && j != boardSize - 1) {
					useableTiles.push([i,j]);
				}

			}
			board.tiles.push(row);
		}
		
		initializeBase(board, useableTiles, 1);
		initializeBase(board, useableTiles, 2);


		// Place money on board at random locations
		for (var i = 0; i < numMoney; i++) {
			randTile = useableTiles[Math.floor(Math.random()
				*useableTiles.length)];

			board.money.push(randTile);

			// remove the used up money
			removeTileFromArray(useableTiles, randTile);
		}
	}

	// Tiles that can have items placed on them
	var useableTiles = []

	// Current board state
	var board = {
		tiles: [],
	    bunnies: [],
	    money: [],
	    base1: null,
	    base2: null,
	    player1: null,
	    player2: null
	};

	initialize(board, useableTiles);

	// Get canvas
	var canvas = document.getElementById("myCanvas");
    var currentPlayer = 1;

    function queryPlayer(player, state) {
        var url = "http://localhost:900" + player + "/player/update";
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("POST", url, false);
        xmlHttp.send(JSON.stringify(state));
        var response = xmlHttp.responseText;
        console.log(response);
        return JSON.parse();
    }

	drawBoard(canvas, board);
    console.log(queryPlayer(1, board));
	
	window.update = function(commands) {

	};
})();







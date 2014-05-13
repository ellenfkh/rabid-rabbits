
(function(){

	// Takes in a 2D array of tiles and draws the board
	function makeTiles(tiles,ctx,squareSize) {
		var tilesDimension = tiles.length;

		for (var i = 0; i < tilesDimension; i++) {
		    for (var j = 0; j < tilesDimension; j++) {
		    	if (tiles[i][j] === 0) {
		    		ctx.fillStyle = "bisque";
		    	}
		    	else if (tiles[i][j] === 1) {
		    		ctx.fillStyle = "olivedrab";
		    	}
		    	else {
		    		ctx.fillStyle = "lightsteelblue";
		    	}
		    	ctx.fillRect(squareSize*i,squareSize*j,
		    		squareSize,squareSize);
			}
		}
	};

	// takes in an array of units, the player they belong to, and thier
	// locations, then draws them on the board
	function addUnits(bunnies, ctx, squareSize) {

		// load images
		var warBunny = new Image();
		warBunny.src = "WarriorBunny.jpg";

		var workerBunny = new Image();
		workerBunny.src = "WorkerBunny.jpg";


		for (var i = 0; i < bunnies.length; i++) {
			var xpos = bunnies[i].xPos * squareSize;
			var ypos = bunnies[i].yPos * squareSize;

			// Add border of player's color
			if (bunnies[i].player == 1) {
				ctx.fillStyle = "red";
			}
			else if (bunnies[i].player == 2) {
				ctx.fillStyle = "blue";
			}
			ctx.fillRect(xpos+squareSize*.05,
					ypos+squareSize*.05,squareSize*.9,squareSize*.9);

			// Draw appropriate bunny on square
			if (bunnies[i].type == "warrior") {
				ctx.drawImage(warBunny,xpos+squareSize*.1,
					ypos+squareSize*.1,squareSize * .8,squareSize * .8);
			}
		    else if (bunnies[i].type == "worker") {
		        ctx.drawImage(workerBunny,xpos+squareSize*.1,
		            ypos+squareSize*.1,squareSize * .8,squareSize * .8);
		    }
		}
	}

	// draw money on board from array of locations
	function addMoney(money, ctx, squareSize) {

		// load image
		var moneyImg = new Image();
		moneyImg.src = "money.jpg";

		for (var i = 0; i < money.length; i++) {
			var xpos = money[i][0] * squareSize;
			var ypos = money[i][1] * squareSize;
			ctx.drawImage(moneyImg,xpos+squareSize*.1,
					ypos+squareSize*.1,squareSize * .8,squareSize * .8);
		}
	}


	window.drawBoard = function(canvas, board) {

		var ctx = canvas.getContext("2d");

		// Calculate size of tiles
		var tilesDimension = board.tiles.length;
		var squareSize = canvas.width/tilesDimension;

		// Add features to the board
		makeTiles(board.tiles, ctx, squareSize);
		addUnits(board.bunnies, ctx, squareSize);
		addMoney(board.money, ctx, squareSize);

	};

})();


const vars = require('./vars.js');

// The 2D array of the game
function createBaseGameBoard(){
	// Don't rely on any specific `this` value, so `null` is a common convention in such situations.
	const arr2d = Array.apply(null,Array(vars.SIZE_WITH_BORDER)).map( () => Array.apply(null,Array(vars.SIZE_WITH_BORDER)).map(()=> vars.DEAD_CHAR));
	addFrameToBoard(arr2d);  // adding border
	return arr2d;
}
module.exports.createBaseGameBoard =  createBaseGameBoard;

// Creating life on the board
function createLifeOnBoard(arr2d){
	for(let i = 1; i<vars.SIZE;i++){  // Not adding to the border
		for(let j = 1; j<vars.SIZE;j++){
			if (Math.random() < vars.LIFE_PROB){
				arr2d[i][j]= vars.LIVE_CHAR;
			}
		}
	}
}

function addFrameToBoard(arr2d){
	// Y axis
	for(let i=0;i<vars.SIZE_WITH_BORDER;i++){
		arr2d[i][0] = vars.BORDER_CHAR;
		arr2d[i][vars.SIZE] = vars.BORDER_CHAR;
	}
	// X axis
	for(let j=0;j<vars.SIZE_WITH_BORDER;j++){
		arr2d[0][j] = vars.BORDER_CHAR;
		arr2d[vars.SIZE][j] = vars.BORDER_CHAR;
	}
}

// Rerunning the game board
module.exports.createGameBoard = function(){
	const gameBoard = createBaseGameBoard();
	createLifeOnBoard(gameBoard);
	return gameBoard;
}

// Printing the game board
module.exports.print2dArr = function(arr2d){
	for(let i = 0; i<arr2d.length;i++){
		for(let j = 0; j<arr2d[i].length;j++){
			process.stdout.write(arr2d[i][j]);
		}
		console.log();
	}
}

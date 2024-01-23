/*
	Rules:
	- Any live cell with fewer than two live neighbours dies, as if by underpopulation.
	- Any live cell with two or three live neighbours lives on to the next generation.
	- Any live cell with more than three live neighbours dies, as if by overpopulation.
	- Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
	*/

// Modules
const vars = require('./vars.js');
const game_board = require('./game_board.js');

module.exports.gameLogic = function(arr2d){
	// Creating an updated array
	const update2dArr = game_board.createBaseGameBoard();
	// Checking inner square, that is all that we need because of the border approach
	checkInnerSquare(arr2d, update2dArr);
	return update2dArr;
}

function checkInnerSquare(arr2d,update2dArr){
	// Inner square of the array - can check regularly
	for(let i = 1; i<vars.SIZE;i++){
		for(let j = 1; j<vars.SIZE;j++){
			// How many live cells around it
			let live_cells = 0;
			for(let i_a = i-1;i_a<=i+1;i_a++){
				for(let j_a = j-1;j_a<=j+1;j_a++){
					if(arr2d[i_a][j_a] === vars.LIVE_CHAR && (!(i_a === i && j_a === j))){  // Not counting us
						live_cells++;  // Anther live char around it
					}
				}
			}
			switch (live_cells){
				case 3:
					// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
						update2dArr[i][j] = vars.LIVE_CHAR;
					break;
				case 2:
					// Any live cell with two or three(the one before it) live neighbours lives on to the next generation.
						if(arr2d[i][j] === vars.LIVE_CHAR){
							update2dArr[i][j] = vars.LIVE_CHAR;
						}
					break;
				default:
					// Any live cell with fewer than two live neighbours dies, as if by underpopulation.
					// Any live cell with more than three live neighbours dies, as if by overpopulation.
					break;
			}
		}
	}
}

#! /usr/bin/env node
// Conway's Game of Life

// The consts
const vars = require('./modules/vars.js');
const game = require('./modules/game_board.js');
const logic = require('./modules/game_logic.js');

// Gracefully handle Ctrl+C
function handleExit() {
    console.log('\nExiting Conway\'s Game of Life. Goodbye!');
    process.exit();
}

// Game play inside loop
function gamePlay(gameBoard){
	// New frame
	console.clear();
	// Printing game board
	game.print2dArr(gameBoard.board);
	// Logic
	gameBoard.board = logic.gameLogic(gameBoard.board);
}


// Main function
function main(){
	// Creating the board, as an object to bing able to update it inside functions
	const gameBoard = {board : game.createGameBoard()};
	// Calling the game play at the wanted frame rate
	setInterval(gamePlay,vars.FRAME_RATE,gameBoard);
	// Handle Ctrl+C gracefully
    process.on('SIGINT', handleExit);
}

// Calling Main function
main();

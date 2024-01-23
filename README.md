# Conway's Game of Life Terminal App 🎮🕹️

![Game of Life](https://img.shields.io/badge/Conway's_Game_of_Life-Node_App-green) ![Node Version](https://img.shields.io/badge/Node-v14.17.4-brightgreen) ![License](https://img.shields.io/badge/License-MIT-blue)

## Overview

Conway's Game of Life Node.js Terminal App!

To wikipedia: [HERE](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life).

The rules:

- Any live cell with fewer than two live neighbours dies, as if by underpopulation.
- Any live cell with two or three live neighbours lives on to the next generation.
- Any live cell with more than three live neighbours dies, as if by overpopulation.
- Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.


## How to Play

1. **Clone the Repository:**
   ```bash
   git clone  ~/Documents/game-of-life
   ```

2. **Go to the Game directory:**
   ```bash
   cd ~/Documents/game-of-life
   ```

3. **Run the App:**
   ```bash
   node main.js
   ```
4. **Quit the Game:**
   - Press `Ctrl + C` to exit the game at any time.

## Screenshots

![Gameplay](https://github.com/YanivZalach/the_game_of_life/assets/131461377/158ae6e5-3300-4366-9b57-72fcf7937341)

## Features

- 🌐 Node.js based, runs in your terminal.
- 🔄 Dynamic grid rendering.
-  Pause and resume the simulation.
- 🎨 Customizable grid size.
- ⏯️  The game is bing simplified using a border to the array, so we can check only the inside cells and by that doing all the checks we need(O(n**2)).

## Personalization

You are welcome to configure the game to your liking in the `./modules/vars.js` file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### 🚀 Happy coding! Enjoy playing Conway's Game of Life in your terminal! 🎉

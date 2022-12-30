// 2D Retro Game - Box Hunt
// Inspired by the 'Whac-A-Mole' game by Ania Kubow
//

// game object
let game = {
    score: 0,
    level: 0,
    numberOfTiles: 9,
    timePeriod: 60,
};

// get the game elements with their classes and ids
const grid = document.querySelector('.grid');

const timeLeft = document.querySelector('#time-left');
const scoreDisplayed = document.querySelector('#score');

// create the game grid
function createGrid() {
    for (let n = 0; n < game.numberOfTiles; n++) {
        // create the <div> tag for each tile
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.setAttribute('id', n); // each tile gets it's 'id'. Also use 'n' for looping
        grid.appendChild(tile);
    }
}
createGrid();
const tiles = document.querySelectorAll('.tile'); // select all elements with class .tile


// END of file - place module exports here
// remember to import these into app.test.js
module.exports = { game };
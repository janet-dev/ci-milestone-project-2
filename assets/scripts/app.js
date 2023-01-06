// 2D Retro Game - Box Hunt
// Inspired by the 'Whac-A-Mole' game by Ania Kubow
// https://www.freecodecamp.org/news/learn-javascript-by-building-7-games-video-course/

// game object
let game = {
    score: 0,
    numberOfTiles: 9,
    timePeriod: 60,
};
/* istanbul ignore next */

// get the game elements with their classes and ids
const grid = document.querySelector('.grid');
const target = document.querySelector('.target');
const timeLeft = document.querySelector('#time-left');
const scoreDisplayed = document.querySelector('#score');

const start = document.querySelector('#start-game');
const reset = document.querySelector('#reset-game');

// game variables
let hitPosition;
let randomTargetTimer;
let countDownTimer;

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

// generate random target tile
function randomTarget() {
    // get each tile (0-8) and remove the class .target
    tiles.forEach(tile => {
        tile.classList.remove('target');
    });
    let randomNumber = Math.floor(Math.random() * 9) //0-8
    let randomTile = tiles[randomNumber];
    randomTile.classList.add('target');
    hitPosition = randomTile.id;
}

// countdown timer and check if game is over
function countDown() {
    game.timePeriod--  //decrement
    timeLeft.textContent = game.timePeriod;

    if (game.timePeriod == 0) {
        clearInterval(countDownTimer);
        clearInterval(randomTargetTimer);
        //end game
        gameOver();
    }
}

// check if random target has been clicked or touched
function isTargetHit() {
    tiles.forEach(tile => {
        tile.addEventListener('click', () => {
            // 'click' for mouse click or touch on touchscreen
            if (tile.id == hitPosition) {
                game.score++;
                scoreDisplayed.textContent = game.score;
                hitPosition = null;
            } // if you hit the pink box
        });
    });
}

// reset game when Reset button is clicked/touched
function resetGame() {
    reset.onclick = () => {
        clearInterval(countDownTimer);
        clearInterval(randomTargetTimer);
        scoreDisplayed.textContent = 0;
        timeLeft.textContent = 60;
    }     
}
resetGame();

function startGame() {
    // start game when Start button is clicked/touched
    start.onclick = () => {
        game.score = 0;
        game.timePeriod = 60;
        isTargetHit();
        randomTargetTimer = setInterval(randomTarget, 1000); //every 1.0 sec for Level-1
        countDownTimer = setInterval(countDown, 1000); // every 1 sec
    }
}
startGame();

function gameOver() {    
    // create the text 'Game Over'
    const gameOverText = document.querySelector('#game-over');
    const gameOverDisplay = document.createElement('span');
    gameOverDisplay.textContent = "Game Over!";
    gameOverDisplay.style.color = 'red';
    gameOverText.appendChild(gameOverDisplay);
}

// END of file - place module exports here
// remember to import these into app.test.js
module.exports = { game };
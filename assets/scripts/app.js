/**
 * 2D Retro Game - Box Hunt
 * Some code sourced from games by Ania Kubow
 * 
 * DOM event listener - all HTML elements to be read before loading JS file
 * makes sure events happen in order.
 */

// game object
const GAME_CONFIG = {
    numberOfTiles: 9,
    timePeriod: 60,
    countDownPeriod: 1000,
    startPeriod: 1000
};

let score = 0;
let period = GAME_CONFIG.timePeriod;

let grid = document.querySelector('.grid'); // get the game elements with their classes and ids
let timeLeft = document.querySelector('#time-left');
let scoreDisplayed = document.querySelector('#score');
let tiles = null;

let start = document.querySelector('#start-game');
let reset = document.querySelector('#reset-game');
// ensure when 'start' is available, 'reset' is not and vice versa

// game variables
let hitPosition = null;
let randomTargetPeriod = GAME_CONFIG.startPeriod; // on start, move target every 1000ms (1.0s) 
let randomTargetTimer = GAME_CONFIG.startPeriod;
let countDownTimer = GAME_CONFIG.countDownPeriod;

function initialiseGame() {
    start.disabled = false;
    reset.disabled = true;

    createGrid();
    tiles = document.querySelectorAll('.tile'); // select all elements with class .tile

    reset.addEventListener('click', resetGame);
    start.addEventListener('click', startGame);
}

document.addEventListener('DOMContentLoaded', initialiseGame);

function createGrid() {
    //Code from 'Build your own CANDY CRUSH using JavaScript, HTML and CSS' by Ania Kubow
    // create the game grid
    for (let n = 0; n < GAME_CONFIG.numberOfTiles; n++) {
        // create the <div> tag for each tile
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.setAttribute('id', n); // each tile gets it's 'id'. Also use 'n' for looping
        grid.appendChild(tile);
    }
}

function randomTarget() {
    // generate random target tile
    // get each tile (0-8) and remove the class .target
    // code from 'Learn JavaScript by building 7 games: Whac-A-Mole' by Ania Kubow
    
    tiles.forEach(tile => {
        tile.classList.remove('target'); // remove target before producing new one
    });
    let randomNumber = Math.floor(Math.random() * 9); //generate random target tile number 0-8
    let randomTile = tiles[randomNumber]; //generate random target tile
    randomTile.classList.add('target'); // assign target class
    hitPosition = randomTile.id; // assign potential hit position with tile and it's id
}

function clearTheIntervals() {
    clearInterval(countDownTimer);
    clearInterval(randomTargetTimer);
}

function countDown() {
    // countdown timer and check if game is over
    //some code from 'Learn JavaScript by building 7 games: Whac-A-Mole' by Ania Kubow
    period--;  //decrement
    timeLeft.textContent = period;
    if (period == 0) {
        clearTheIntervals();
        
        gameOver(); //end the game
    }
}

function onTileClicked() {
    clearInterval(randomTargetTimer); // clear repeat period

    score++;
    scoreDisplayed.textContent = score;
    hitPosition = null;

    // speed up the moving target depending on score
    randomTargetPeriod = GAME_CONFIG.startPeriod - (score * 50); //set the new repeat period
    randomTargetTimer = setInterval(randomTarget, randomTargetPeriod); // run faster
}

function isTargetHit() {
    // check if random target has been clicked or touched
    //some code from 'Learn JavaScript by building 7 games: Whac-A-Mole' by Ania Kubow
    tiles.forEach(tile => {
        tile.addEventListener('click', () => {
            // 'click' for mouse click or touch on touchscreen
            if (tile.id == hitPosition) {
                onTileClicked();
            } // if you hit the coloured box
        });
    });
}

function removeTarget() {
    // remove event listener and ability to restart game by random clicking on grid 
    tiles.forEach(tile => {
        tile.classList.remove('target');
        hitPosition = null;
        tile.removeEventListener('click', isTargetHit);
    });
}
   
function resetGame() {
    // reset game when Reset button is clicked/touched
    clearTheIntervals();
    scoreDisplayed.textContent = 0;
    timeLeft.textContent = 60;

    removeTarget(); // remove coloured tile and deactivate clicking

    // if the 'Game Over!' is displayed, remove it
    const element = document.querySelector('#game-over');
    element.textContent = "";

    start.disabled = false;
    reset.disabled = true;
}

function startGame() {
    // start game when Start button is clicked/touched
    score = 0;
    period = GAME_CONFIG.timePeriod;
    start.disabled = true;
    reset.disabled = false;
    
    countDownTimer = setInterval(countDown, GAME_CONFIG.countDownPeriod); // every 1 sec
    randomTargetTimer = setInterval(randomTarget, GAME_CONFIG.startPeriod);
    
    isTargetHit(); // check if target is hit
}

function gameOver() {    
    // create the text 'Game Over'
    const gameOverText = document.querySelector('#game-over');
    gameOverText.textContent = "Game Over!";

    removeTarget(); // remove coloured tile and deactivate clicking

    start.disabled = true;
    reset.disabled = false;
}


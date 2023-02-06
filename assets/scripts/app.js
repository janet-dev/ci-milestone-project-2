/**
 * 2D Retro Game - Box Hunt
 * Some code sourced from games by Ania Kubow
 */

// Game object
const GAME_CONFIG = {
    numberOfTiles: 9,
    timePeriod: 60,
    countDownPeriod: 1000,
    startPeriod: 1000
};

// Game variables
let score = 0;
let period = GAME_CONFIG.timePeriod; // length of the game

let grid = document.querySelector('.grid'); // get the game elements with their classes and ids
let timeLeft = document.querySelector('#time-left');
let scoreDisplayed = document.querySelector('#score');
let tiles = null;

// ensure when 'Start' is available, 'Replay' is not and vice versa
let start = document.querySelector('#start-game'); // Play button
let reset = document.querySelector('#reset-game'); // Replay button

let hitPosition = null;
let randomTargetPeriod = GAME_CONFIG.startPeriod; // on start, move target every 1000ms (1.0s) 
let randomTargetTimer = GAME_CONFIG.startPeriod;
let countDownTimer = GAME_CONFIG.countDownPeriod;

/**
 * Function sets up the game before play and runs when the DOMContentLoaded event is triggered -
 * once the basic HTML document is loaded.
 */
function initialiseGame() {
    start.disabled = false; // 'Start' button is enabled
    reset.disabled = true; // 'Replay' button is disabled

    createGrid();
    tiles = document.querySelectorAll('.tile'); // select all elements with class .tile

    reset.addEventListener('click', resetGame);
    start.addEventListener('click', startGame);
}

/**
 * Function creates the game grid of 'n' number of tiles.
 * Code sourced from 'Build your own CANDY CRUSH using JavaScript, HTML and CSS' by Ania Kubow
 */
function createGrid() {
    for (let n = 0; n < GAME_CONFIG.numberOfTiles; n++) {
        // create the <div> tag for each tile
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.setAttribute('id', n); // each tile gets it's 'id'. Also use 'n' for looping
        grid.appendChild(tile); // append the tile to the grid <div>
    }
}

/**
 * Function generates the random target tile.
 * Code sourced from 'Learn JavaScript by building 7 games: Whac-A-Mole' by Ania Kubow
 */
function randomTarget() {
    tiles.forEach(tile => {
        // removes target before producing new one, otherwise will have several targets at once
        tile.classList.remove('target');
    });
    let randomNumber = Math.floor(Math.random() * 9); //generate random number 0-8
    let randomTile = tiles[randomNumber]; //generate random target tile position
    randomTile.classList.add('target'); // assign target class to position
    hitPosition = randomTile.id; // assign potential hit position with tile and it's id
}

/**
 * Function clears the intervals when 
 * game has timed out for game over, or when 'Replay' button is hit.
 */
function clearTheIntervals() { 
    clearInterval(countDownTimer);
    clearInterval(randomTargetTimer);
}

/**
 * Function counts down and checks if game is over.
 * Some code from 'Learn JavaScript by building 7 games: Whac-A-Mole' by Ania Kubow.
 */
function countDown() {
    period--;  //decrement
    timeLeft.textContent = period;
    if (period == 0) {
        clearTheIntervals();   
        gameOver(); //end the game
    }
}

/**
 * Function increases the score and speed of the game, if target is hit.
 */
function onTileClicked() {
    clearInterval(randomTargetTimer); // clear current repeat period

    score++;
    scoreDisplayed.textContent = score;
    hitPosition = null; // clear the hit position - no multiple scoring 

    // speed up the moving target depending on score
    randomTargetPeriod = GAME_CONFIG.startPeriod - (score * 50); //set the new repeat period
    randomTargetTimer = setInterval(randomTarget, randomTargetPeriod); // run faster
}

/**
 * Function checks if random target has been clicked or touched.
 * Some code from 'Learn JavaScript by building 7 games: Whac-A-Mole' by Ania Kubow.
 */
function isTargetHit() {
    tiles.forEach(tile => {
        tile.addEventListener('click', () => {
            // 'click' is used for mouse click or touch on touchscreen
            if (tile.id == hitPosition) {
                onTileClicked(); // if target is hit
            }
        });
    });
}

/**
 * Function removes event listener and ability to restart game by random clicking on grid.
 */
function removeTarget() { 
    tiles.forEach(tile => {
        tile.classList.remove('target');
        hitPosition = null;
        tile.removeEventListener('click', isTargetHit);
    });
}

/**
 * Function resets game when 'Replay' button is clicked/touched
 */
function resetGame() {
    clearTheIntervals();
    scoreDisplayed.textContent = 0;
    timeLeft.textContent = GAME_CONFIG.timePeriod;

    removeTarget(); // remove coloured tile and deactivate clicking

    // if the 'Game Over!' is displayed, remove it
    let element = document.querySelector('#game-over');
    element.textContent = "";

    startGame(); // start play again
}

/**
 * Function makes sure 'Replay' button is active, whilst 'Start' is inactive
 */
function enableReplay() {
    start.disabled = true;
    reset.disabled = false;
}

/**
 * Function is the first play of the game.
 */
function startGame() { 
    score = 0;
    period = GAME_CONFIG.timePeriod;

    enableReplay();
    
    countDownTimer = setInterval(countDown, GAME_CONFIG.countDownPeriod); // countdown every 1 sec
    randomTargetTimer = setInterval(randomTarget, GAME_CONFIG.startPeriod); // create target initially every 1 sec
    
    isTargetHit(); // check if target is hit
}

/**
 * Function ends the game and creates the text 'Game Over!'
 */
function gameOver() {    
    let gameOverText = document.querySelector('#game-over');
    gameOverText.textContent = "Game Over!";

    removeTarget(); // remove coloured tile and deactivate clicking
    enableReplay();
}

/**
 * DOM event listener -  
 * all HTML elements to be read before loading JS file,
 * as it makes sure events happen in order.
 */
document.addEventListener('DOMContentLoaded', initialiseGame);


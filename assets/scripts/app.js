// 2D Retro Game - Box Hunt
// Some code sourced from 'Whac-A-Mole' game by Ania Kubow

// DOM event listener - all HTML elements to be read before loading JS file
// makes sure events happen in order, because I 
// had issues with Jest testing as DOM hadn't loaded
document.addEventListener('DOMContentLoaded', () => {

    // game object
    let game = {
        score: 0,
        numberOfTiles: 9,
        timePeriod: 60,
    };

    const grid = document.querySelector('.grid'); // get the game elements with their classes and ids
    // const target = document.querySelector('.target');
    const timeLeft = document.querySelector('#time-left');
    const scoreDisplayed = document.querySelector('#score');

    const start = document.querySelector('#start-game');
    const reset = document.querySelector('#reset-game');

    // game variables
    let hitPosition;
    let randomTargetTimer;
    let countDownTimer;

    function createGrid() {
        //Build your own CANDY CRUSH using JavaScript, HTML and CSS | Ania Kubow
        // create the game grid
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

    function randomTarget() {
        // generate random target tile
        // get each tile (0-8) and remove the class .target
        tiles.forEach(tile => {
            tile.classList.remove('target');
        });
        let randomNumber = Math.floor(Math.random() * 9) //0-8
        let randomTile = tiles[randomNumber];
        randomTile.classList.add('target');
        hitPosition = randomTile.id;
    }

    function countDown() {
        // countdown timer and check if game is over
        game.timePeriod--  //decrement
        timeLeft.textContent = game.timePeriod;

        if (game.timePeriod == 0) {
            clearInterval(countDownTimer);
            clearInterval(randomTargetTimer);
            //end game
            gameOver();
        }
    }
    
    function isTargetHit() {
        // check if random target has been clicked or touched
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
   
    function resetGame() {
        // reset game when Reset button is clicked/touched
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
    module.exports = { game, createGrid, startGame };

}) 


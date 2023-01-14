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
        countDownPeriod: 1000,
        startPeriod: 1000
    };

    const grid = document.querySelector('.grid'); // get the game elements with their classes and ids
    const timeLeft = document.querySelector('#time-left');
    const scoreDisplayed = document.querySelector('#score');

    const start = document.querySelector('#start-game');
    const reset = document.querySelector('#reset-game');
    // ensure when 'start' is available, 'reset' is not and vice versa
    start.disabled = false;
    reset.disabled = true;

    // game variables
    let hitPosition;
    let randomTargetPeriod = game.startPeriod; // on start move target every 1000ms (1.0s) 
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
                    clearInterval(randomTargetTimer); // clear repeat period

                    game.score++;
                    scoreDisplayed.textContent = game.score;
                    hitPosition = null;

                    // speed up the moving target depending on score
                    randomTargetPeriod = game.startPeriod - (game.score * 50); //set the new repeat period
                    randomTargetTimer = setInterval(randomTarget, randomTargetPeriod); // run faster
                } // if you hit the coloured box
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

            // remove event listener and ability to restart game by random clicking
            tiles.forEach(tile => {
                tile.classList.remove('target');
                hitPosition = null;
                tile.removeEventListener('click', isTargetHit);
            });

            // if the 'Game Over!' is displayed, remove it
            const element = document.querySelector('#game-over');
            element.textContent = "";

            start.disabled = false;
            reset.disabled = true;
        }     
    }
    resetGame();

    function startGame() {
        // start game when Start button is clicked/touched
        start.onclick = () => {
            game.score = 0;
            game.timePeriod = 60;
            isTargetHit();
            countDownTimer = setInterval(countDown, game.countDownPeriod); // every 1 sec
            randomTargetTimer = setInterval(randomTarget, game.startPeriod); //every 0.5 sec
            
            start.disabled = true;
            reset.disabled = false;
        }
    }
    startGame();

    function gameOver() {    
        // create the text 'Game Over'
        const gameOverText = document.querySelector('#game-over');
        gameOverText.textContent = "Game Over!";

       // remove event listener and ability to restart game by random clicking
        tiles.forEach(tile => {
            tile.classList.remove('target');
            hitPosition = null;
            tile.removeEventListener('click', isTargetHit);
        });

        start.disabled = true;
        reset.disabled = false;
    }

    // END of file - place module exports here
    // remember to import these into app.test.js
    //module.exports = { game, createGrid, startGame }; // Uncomment when running Jest tests

}) 


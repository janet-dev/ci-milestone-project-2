/**
 * @jest-environment jsdom
 */

// ARE YOU STRUGGLING WITH NULL VALUES IN JEST?
// Code Institute Slack Channel project-milestone-2 by Benjamin Kavanagh
let GAME_CONFIG; 
let createGrid; 
let startGame;

// Box Hunt Game
beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
    GAME_CONFIG = require("../app");
    createGrid = require("../app");
    startGame = require("../app");
});

describe("score and time left have initial values on loading game and before start of play", () => {
    test("score text content is '0'", () => {
        const score = document.querySelector("#score");
        expect(score.textContent).toEqual("0");
    });
    test("time left text content is '60'", () => {
        const time = document.querySelector("#time-left");
        expect(time.textContent).toEqual("60");
    });
});

describe("grid has been built", () => {
    const squares = document.getElementsByClassName("tile");
    test("grid has 9 tiles", () => {
        expect(squares.length).toEqual(9);
    });
    test("tiles have id=0 to 8", () => {
        expect(squares[0].id).toEqual('0');
        expect(squares[1].id).toEqual('1');
        expect(squares[2].id).toEqual('2');
        expect(squares[3].id).toEqual('3');
        expect(squares[4].id).toEqual('4');
        expect(squares[5].id).toEqual('5');
        expect(squares[6].id).toEqual('6');
        expect(squares[7].id).toEqual('7');
        expect(squares[8].id).toEqual('8');
    });           
});

describe("check initial HTML when Start button ONLY is clicked", () => {
    // code from 'Use Jest write unit testing for DOM manipulation' by Clark on Dev.to
    test("should set score to 0 and time left to 60", () => {
        document.body.innerHTML = `
        <h2 class="full-width">Score: <span id="score">0</span> Time left: <span id="time-left">60</span>s</h2>
        <div class="buttons-div">
            <button id="start-game">Start</button>
            <button id="reset-game">Replay</button>
        </div>
        `;           
        const newScore = document.getElementById('score');
        const newTime = document.getElementById('time-left');
        const startGameBtn = document.getElementById('start-game');
        newScore.value = '88';
        newTime.value = '8';
        startGameBtn.click();
        expect(newScore.textContent).toBe('0');
        expect(newTime.textContent).toBe('60');
    });
});

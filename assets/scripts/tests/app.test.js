/**
 * @jest-environment jsdom
 */

// ARE YOU STRUGGLING WITH NULL VALUES IN JEST?
// Code Institute Slack Channel project-milestone-2 by Benjamin Kavanagh
let game; 
let createGrid; 
let startGame;

/*
Jest Spy to check if alert has been called.
First argument to spyOn is the window and  the second is the name of the method, in this case "alert".
So we're going to catch it when an alert happens  and divert it harmlessly into an empty function. 
*/

// Box Hunt Game
beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
    game = require("../app");
    createGrid = require("../app");
    startGame = require("../app");
});

describe("score and time left have initial values on loading game and before start of play", () => {
    test("score text content is '000'", () => {
        const score = document.querySelector("#score");
        expect(score.textContent).toEqual("000");
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
        //expect(squares[9].id).toEqual('9'); //this should fail the test
    });           
});

describe("check initial HTML when Start button ONLY is clicked", () => {
    //Use Jest write unit testing for DOM manipulation by Clark on Dev.to
    test("should set score to 000 and time left to 60", () => {
        document.body.innerHTML = `
        <h2 class="full-width">Score: <span id="score">000</span> Time left: <span id="time-left">60</span>s</h2>
        <div class="buttons-div">
            <button id="start-game">Start</button>
            <button id="reset-game">Reset</button>
        </div>
        `;           
        const newScore = document.getElementById('score');
        const newTime = document.getElementById('time-left');
        const startGameBtn = document.getElementById('start-game');
        newScore.value = '88';
        newTime.value = '8';
        startGameBtn.click();
        expect(newScore.textContent).toBe('000');
        expect(newTime.textContent).toBe('60');
    });
});

/**
 * @jest-environment jsdom
 */
//const { game, createGrid } = require("../app"); // app.js file
let game;
let createGrid;

/*
Jest Spy to check if alert has been called.
First argument to spyOn is the window and  the second is the name of the method, in this case "alert".
So we're going to catch it when an alert happens  and divert it harmlessly into an empty function. 
*/
//jest.spyOn(window, "alert").mockImplementation(() => { });

// ARE YOU STRUGGLING WITH NULL VALUES IN JEST?
// https://code-institute-room.slack.com/archives/C7HD37Q1F/p1650618994260909

// Retro Game
beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
    game = require("../app");
    createGrid = require("../app");
});

describe("score and time left have default values", () => {
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
        //expect(squares[9].id).toEqual('9');
    });           
});

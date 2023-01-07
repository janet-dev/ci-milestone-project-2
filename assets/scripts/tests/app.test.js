/**
 * @jest-environment jsdom
 */
let createGrid;
const { game } = require("../app"); // app.js file

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
    createGrid = require("../app"); // app.js file
});



//check game object
describe("game object contains correct keys and default values", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("number of tiles key exists", () => {
        expect("numberOfTiles" in game).toBe(true);
    });
    test("time period key exists", () => {
        expect("timePeriod" in game).toBe(true);
    });
    test("score key exists", () => {
        expect(game.score).toEqual(0);
    });
    test("number of tiles key exists", () => {
        expect(game.numberOfTiles).toEqual(9);
    });
    test("time period key exists", () => {
        expect(game.timePeriod).toEqual(60);
    });
});


// check grid is created correctly
describe("createGrid works correctly", () => {
    beforeAll(() => {
        createGrid();
    });
    
});

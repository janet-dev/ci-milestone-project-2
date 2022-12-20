/**
 * @jest-environment jsdom
 */

const { game } = require("../app"); // app.js file

/*
Jest Spy to check if alert has been called.
First argument to spyOn is the window and  the second is the name of the method, in this case "alert".
So we're going to catch it when an alert happens  and divert it harmlessly into an empty function. 
*/
jest.spyOn(window, "alert").mockImplementation(() => { });

// Flappy Game
beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

//check for game score and level
describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("level key exists", () => {
        expect("level" in game).toBe(true);
    });
});
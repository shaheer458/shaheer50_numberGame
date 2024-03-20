#!/usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow(`let start game`);
    await sleep();
    rainbowTitle.stop();
}
welcome();
async function playGame() {
    const systemGenratedNO = Math.floor(Math.random() * 100);
    let continueGame = true;
    do {
        const game = await inquirer.prompt([
            {
                type: "number",
                name: "userGuess",
                message: "guess the number"
            }
        ]);
        const { userGuess } = game;
        if (userGuess === systemGenratedNO) {
            let rainbowTitle = chalkAnimation.rainbow(`conguratlations your guess is right`);
            await sleep();
            rainbowTitle.stop();
        }
        else {
            let rainbowTitle = chalkAnimation.rainbow(`try again`);
            await sleep();
            rainbowTitle.stop();
        }
        const { continueGam } = await inquirer.prompt([
            {
                type: "confirm",
                name: "continueGam",
                message: "do you want to play another round",
                default: true
            }
        ]);
        continueGame = continueGam;
    } while (continueGame);
}
playGame();

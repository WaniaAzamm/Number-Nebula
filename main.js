import inquirer from "inquirer";
let input1 = await inquirer.prompt({
    name: "username",
    type: "input",
    message: "Kindly, Enter your Name!"
});
let input2 = await inquirer.prompt({
    name: "age",
    type: "number",
    message: "Please, Enter your age!"
});
if (input2.age >= 12) {
    console.log(`${input1.username}, you can enjoy this game!!`);
    console.log("Now let's start the game!!");
    let userGuess = await inquirer.prompt({
        name: "userguess",
        type: "number",
        message: "Guess a Number!!"
    });
    let winningNumber = 38;
    if (userGuess.userguess == winningNumber) {
        console.log(`Wow ${input1.username}, you won this game.`);
    }
    else {
        if (userGuess.userguess > winningNumber) {
            console.log(`${input1.username}, it's too high!`);
        }
        else {
            console.log(`${input1.username}, it's too low!`);
        }
    }
}
else {
    let input3 = await inquirer.prompt({
        name: "parentpermission",
        type: "input",
        message: "Parent, do you allow your kid to play this game? (yes/no)"
    });
    if (input3.parentpermission.toLowerCase() === "yes") {
        console.log(`${input1.username}, enjoy your Game`);
        console.log("Now let's start the game!!");
        let userGuess = await inquirer.prompt({
            name: "userguess",
            type: "number",
            message: "Guess a Number!!"
        });
        let winningNumber = 38;
        if (userGuess.userguess == winningNumber) {
            console.log(`Wow ${input1.username}, you won this game.`);
        }
        else {
            if (userGuess.userguess > winningNumber) {
                console.log(`${input1.username}, it's too high!`);
            }
            else {
                console.log(`${input1.username}, it's too low!`);
            }
        }
    }
    else {
        console.log(`${input1.username}, sorry you can play others game.`);
    }
}

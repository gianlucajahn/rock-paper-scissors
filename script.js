// All functions and declarations are explained within the comments. In front of the explanations, you will find square brackets. Within these square brackets,
// the lines which the explained code lies within, is mentioned. I hope it makes for a comprehensible read. Thank you for inspecting my project. Feedback is always welcome.
// [l. 5-12] Declaring global variables

const min = 1;
const max = 3;
let pickNumber;
let computerPick;
let userInput;
let userPick;
let userPoints = 0;
let computerPoints = 0;

// [l. 20]    Defining the function getUserPick. Purpose: Getting the user's pick via prompt and converting it into a legal value for the game to work.
// [l. 21]    Getting the user's input via prompt and saving it in the userInput value.
// [l. 22]    Converting the userInput into a string with a capital first letter, lowercasing the rest of the string, saving it as userPick.
// [l. 23-24] Checking if the userPick variable contains a legal pick and give out an Error in case it's not.
// [l. 25]    Returning the userPick variable.

function getUserPick() {
    userInput = prompt("Please pick either Rock, Paper or Scissors!");
    userPick = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
    if ((userPick != "Rock") && (userPick != "Paper") && (userPick != "Scissors")) {
        console.log("Error: Invalid input. Please input either Rock, Paper or Scissors.")
    } else return userPick;
}

// [l. 36]    Defining the function getComputerPick. Purpose: Generating a random result within our spectrum of min to max and using it as the computer's pick in our game.
// [l. 37-38] Assigning 'min' and 'max' the ceiling and floor values from the 'math' object, to set up the spectrum for our process of generating a random result within said spectrum.
// [l. 39]    Generating the random number and copying it into the pickNumber variable.
// [l. 41]    Using an if statement. Using it's condition to make sure the generated number is within our desired spectrum. 
// [l. 42]    Giving the computerPick variable one of the three picks, depending on the value we generated.
// [l. 43]    Returning the computerPick variable
// [l. 44]    In case our generated number is not within our desired spectrum, we throw an error into the browser's console that points to the function the error is lying in.

function getComputerPick(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    pickNumber = Math.floor(Math.random() * (max - min +1)) + min;
    
    if(pickNumber >= 1 && pickNumber <= 3) {
        (pickNumber == 1) ? computerPick = "Rock" : (pickNumber == 2) ? computerPick = "Paper" : computerPick = "Scissors";
        return computerPick;
    } else console.log("Error in function: getComputerPick")
}

// [l. 59]     Defining the function comparePicks. Using userPick and computerPick as parameters. Purpose: Determining the winner of both picks. 
// [l. 61/...] Using an if statement to check the pick of the user.
// [l. 63/...] Using additional if statements to check for the computer's pick.
// [l. 64/...] Adding 1 to either the user's or the computer's points variable, depending on who won, logging their round wins.
// [l. 65/...] Logging the round's outcome and current points of both participants into the browser's console.
// [l. 66/...] Returning the variable that has been altered.

// The procedure is the same for all 9 if/else if statements and therefore not repeatedly explained nor mentioned here.
// SPECIAL NOTICE: I am fully aware of the fact that the comparePicks function could be made much more compact by grouping all scenarios together that result in
// the user either winning or losing. You would group them by using AND operators between userPick and computerPick in inner brackets and OR operators between the
// winning scenarios/losing scenarios in outer brackets. I will use this enhanced variant when making a webpage with a graphical interface for this script.

function comparePicks(userPick, computerPick) {
    
    if (userPick == "Rock") {

        if (computerPick == "Paper") {
            computerPoints += 1;
            console.log(`You lose this round. ${computerPick} beats ${userPick}! You have ${userPoints} points and the computer has ${computerPoints} points now.`);
            return computerPoints;

        } else if (computerPick == "Scissors") {
            userPoints += 1;
            console.log(`You won this round. ${userPick} beats ${computerPick}! You have ${userPoints} points and the computer has ${computerPoints} points now.`);
            return userPoints;

        } else console.log(`It's a draw! ${userPick} draws against ${computerPick}!`);
    }

    if (userPick == "Paper") {

        if (computerPick == "Scissors") {
            computerPoints += 1;
            console.log(`You lose this round. ${computerPick} beats ${userPick}! You have ${userPoints} points and the computer has ${computerPoints} points now.`);
            return computerPoints;

        } else if (computerPick == "Rock") {
            userPoints += 1;
            console.log(`You won this round. ${userPick} beats ${computerPick}! You have ${userPoints} points and the computer has ${computerPoints} points now.`);
            return userPoints;

        } else console.log(`It's a draw! ${userPick} draws against ${computerPick}!`);
    }

    if (userPick == "Scissors") {

        if (computerPick == "Rock") {
            computerPoints += 1;
            console.log(`You lose this round. ${computerPick} beats ${userPick}! You have ${userPoints} points and the computer has ${computerPoints} points now.`);
            return computerPoints;

        } else if (computerPick == "Paper") {
            userPoints += 1;
            console.log(`You won this round. ${userPick} beats ${computerPick}! You have ${userPoints} points and the computer has ${computerPoints} points now.`);
            return userPoints;

        } else console.log(`It's a draw! ${userPick} draws against ${computerPick}!`);
    }
}

// [l. 113]     Defining the function game. Purpose: Being able to alter the necessary amount of points for a user/computer to win the entire game and to repeat the rounds.
// [l. 114]     Using a for loop to declare the maxPoints variable, making sure the loop is only executed as long as neither the user's nor the computer's points reach that value.
// [l. 115-117] Calling the getUserPick, getComputerPick and comparePicks functions inside the loop since they are all parts of each round.
// [l. 118-121] Using an if statement to check which participant won and logging the respective lose/win message into the browser's console.
// [l. 122]     Giving out an error in case neither of the participants have reached the maximum amount of Points when the loop is not being repeated anymore.

function game() {
    for (var maxPoints = 5; userPoints < maxPoints && computerPoints < maxPoints;  ) {
        getUserPick();
        getComputerPick(min, max);
        comparePicks(userPick, computerPick);
    } if (computerPoints == maxPoints) {
        console.log(`You lost the game! The computer has reached ${maxPoints} points. Try again!`)
    } else if (userPoints == maxPoints) {
        console.log(`Congratulations, you won! You have reached ${maxPoints} points!`)
    } else console.log("Error in function: game")
}

// [l. 127] Calling the game function.

game();

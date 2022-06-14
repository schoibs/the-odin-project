
function computerPlay(){
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}


// Write a function that plays a single round of Rock Paper Scissors. 
// The function should take two parameters - the playerSelection and computerSelection - 
// and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

function playSingleRound(playerSelection, computerSelection){

    const rules = {'rock': 'paper', 'paper': 'scissors', 'scissors': 'rock'};

    if (computerSelection === rules[playerSelection]){
        // player lose
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === computerSelection){
        // tie
        return "Its a Tie!";
    } else {
        // player win
        return `You Lose! ${playerSelection} beats ${computerSelection}`;
    }

}

console.log(playSingleRound('rock', 'paper'));


// Write a function called game(). 
// Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
// Use prompt() to get input from the user.
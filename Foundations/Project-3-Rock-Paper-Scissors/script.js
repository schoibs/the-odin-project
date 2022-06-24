
function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function computerPlay(){
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playSingleRound(playerSelection, computerSelection){

    const rules = {'rock': 'paper', 'paper': 'scissors', 'scissors': 'rock'};
    playerSelection = playerSelection.toLowerCase();

    if (computerSelection === rules[playerSelection]){
        // player lose
        return `You Lose! ${capitalize(computerSelection)} beats ${playerSelection}.`;
    } else if (playerSelection === computerSelection){
        // tie
        return "Its a Tie!";
    } else {
        // player win
        return `You Win! ${capitalize(playerSelection)} beats ${computerSelection}.`;
    }
}

function disableButton(){
    buttons.forEach(btn => {
        btn.disabled = true
    })
}

let roundNumber = 1;

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button"); // get all buttons

const roundText = document.querySelector(".round-text");
const scoreText = document.querySelector(".score-text");
const resultText = document.querySelector(".result-text");
const winnerText = document.querySelector(".winner-text");

roundText.textContent = `Round ${roundNumber}`;
scoreText.textContent = `Player ${playerScore} : ${computerScore} Computer`;

// for each button, add click event listener to play a single round
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        
        // get player and computer choices
        let playerSelection = btn.textContent;
        let computerSelection = computerPlay();

        // display result
        let result = playSingleRound(playerSelection, computerSelection);
        resultText.textContent = result;

        // increase score
        if(result.charAt(4) === 'W'){
            playerScore++;
        } else if(result.charAt(4) === 'L'){
            computerScore++;
        }

        // display score
        scoreText.textContent = `Player ${playerScore} : ${computerScore} Computer`;

        // display round
        roundNumber++;
        roundText.textContent = `Round ${roundNumber}`;

        // if either's score reaches 5, disable buttons and display winning messages
        if (playerScore === 5 ){
            disableButton();
            winnerText.textContent = 'Player wins! Reload the page to restart.';
        } else if (computerScore === 5) {
            disableButton();
            winnerText.textContent = 'Computer wins! Reload the page to restart.';
        }
    });
});

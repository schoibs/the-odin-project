
function computerPlay(){
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playSingleRound(playerSelection, computerSelection){

    const rules = {'rock': 'paper', 'paper': 'scissors', 'scissors': 'rock'};

    if (computerSelection === rules[playerSelection]){
        // player lose
        return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    } else if (playerSelection === computerSelection){
        // tie
        return "Its a Tie!";
    } else {
        // player win
        return `You Win! ${playerSelection} beats ${computerSelection}.`;
    }

}

function game(){

    let playerScore = 0;
    let computerScore = 0;

    for (let i=0; i<5; i++){

        console.log(`Round ${i+1}`);

        let playerSelection = prompt("Pick your poison: 'rock', 'paper' or 'scissors'.");
        let computerSelection = computerPlay();

        let message = playSingleRound(playerSelection, computerSelection);
        
        if(message.charAt(4) === 'W'){
            playerScore++;
        } else if(message.charAt(4) === 'L'){
            computerScore++;
        } else {
            i--;
        }

        console.log(`${message} \nPlayer ${playerScore} : ${computerScore} Computer`);
    }

    const winner = (playerScore > computerScore) ? 'Player Wins!' : 'Computer Wins!';
    console.log(winner);
}

game();
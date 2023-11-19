
const options = ['rock', 'paper', 'scissors']
const optionLength = options.length;

function getComputerChoice(){
   const choice = options[Math.floor(Math.random() * optionLength)]
   return choice;
}

function checkWinner(playerSelection,computerSelection){
    if (playerSelection == computerSelection){
        return "Tie";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"
     || playerSelection == "scissors" && computerSelection == "paper"
     || playerSelection == "paper" && computerSelection == "rock"){
        return 'Player'
      }
      else{
        return 'computer'
      }

}

function playRound(computerSelection, playerSelection ,PlayerScore, ComputerScore){
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie"){
        return `It's a tie`;
    }
    else if (result == 'Player'){
        return `You win!  ${playerSelection} beats the fuck out of ${computerSelection}`;
        
    }
    else{
        return`You lose! (got your ass whooped) ${computerSelection} beats the fuck out of ${playerSelection}`
        
    }
    
}
function getPlayerChoice(){
    let validateInput = false;
    while(validateInput == false){
        const choice = prompt("Rock Paper Scissors")
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)) {
            validateInput = true;
            return choiceInLower;
        }
    }
}

 function game(){
    let playerScore = 0;
    let computerScore = 0;
    console.log("welcome")
    for(let i = 0; i < 5; i++){

        console.log(`Round ${i + 1}`)
        const playerSelection = getPlayerChoice();
       const computerSelection = getComputerChoice();
      console.log(playRound(playerSelection,computerSelection));
      console.log("-------------------")

      if(checkWinner(playerSelection, computerSelection) == 'Player'){
        playerScore++;
      }
      else if (checkWinner(playerSelection, computerSelection) == 'computer'){
        computerScore++;
      }
    }
    console.log("Game over")
    if(playerScore > computerScore){
        console.log(`Player wins by ${playerScore - computerScore} points`)
    }
    else{
       console.log(`Computer wins by ${computerScore - playerScore} points`)
    }
 }
game()

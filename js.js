

const choices = ['rock', 'paper', 'scissors'];
 function getComputerChoice(){
    const b = choices[Math.floor(Math.random() * choices.length)];
    return b;
}

function checkWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection) {
        return "Tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper")||
        (playerSelection == "paper" && computerSelection == "rock") 
    ){
        return "Player";
    }
    else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection){
    let result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        return "It's a tie no one won"
    }
    else if(result == "Player"){
        return `You win! ${playerSelection } beats ${computerSelection}`
    }
    else (result == "Computer")
    {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }

} 
 function getPlayerChoice(){
    const validate = false;
    while(validate == false)
    {
        const choice = prompt("Rock Paper Scissors");
        if (choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(choices.includes(choiceInLower)){
            validate == true;
            return choiceInLower
        }

    }
 }

 
function game(){
   console.log("welcome to RPS")
   let compScore = 0;
   let playerScore = 0;
    for(let i = 0; i < 5; i++)
   {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection,computerSelection));
    if(checkWinner(playerSelection,computerSelection) == "Player")
    {
        playerScore++;
    }
    else if(checkWinner(playerSelection,computerSelection) == "Computer"){
        compScore++;  
    }       
}
  console.log("Game Over");
  if (playerScore > compScore){
    console.log(`PLayer wins`);
    console.log(`Player Score = ${playerScore}`);
    
  }
  else if(compScore > playerScore) {
    console.log(`computer wins`);
    console.log(`Computer Score = ${compScore}`) 
}
else{
    console.log("We have a tie!");
}
}

// console.log(game(playRound(playerSelection,computerSelection), playerScore,compScore))
game();
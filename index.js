////////////controls////////////
const buttons = document.querySelectorAll("button")
const resultEl = document.getElementById("results")
const userScoreValue = document.getElementById("user-score")
const computerScoreValue = document.getElementById("computer-score")
///////////////////////////////
let userScore = 0;
let computerScore = 0;
    
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
   const resultValue = playRounded(button.id , computerPlay())
     resultEl.textContent = resultValue
    })
})

function computerPlay(){
    const choises = ['rock', 'paper','scissors']
    const randomChoise = Math.floor(Math.random() * choises.length)
   return choises[randomChoise]
}

///////////Game Conditions/////////

function playRounded(playerSelection , computerSelection){
    if(playerSelection === computerSelection){
        return "its a tie!"
    }else if((playerSelection === 'rock'&
            computerSelection=== 'scissors') ||
            (playerSelection === 'scissors' &
            computerSelection === 'paper')||
            (playerSelection === 'paper' &
            computerSelection=== 'rock')
    ){
        userScore ++;
        userScoreValue.textContent = userScore
        return ' you won! ' + playerSelection + ' Beats ' + computerSelection;
    }else{
        computerScore++
        computerScoreValue.textContent = computerScore
      return  ' you lose! ' + computerSelection + ' Beats ' + playerSelection;
    }
}

//////////////////////////////
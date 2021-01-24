let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () =>{
  let targetNumber = Math.floor((Math.random() * 9) + 1);
  return targetNumber;
}
const getAbsoluteDistance = (distance, target) => {
  return Math.abs(distance - target);
  }
const compareGuesses = (human, computer, secret) =>{
  if(human < 0 || human > 9 ){
   alert('Your Number is out of range!');
  }
  let humanGuess = getAbsoluteDistance(human,secret);
  let computerGuess = getAbsoluteDistance(computer,secret);
  if (human === secret || humanGuess <= computerGuess ){
    return true;
  } else if (computer === secret || computerGuess < humanGuess){
    return false;
  };
}
const updateScore = (winner) => {
  if (winner === 'human'){
    humanScore ++;
  } else if (winner === 'computer'){
    computerScore ++;
  };
}
const advanceRound = () => {
  currentRoundNumber ++;
}


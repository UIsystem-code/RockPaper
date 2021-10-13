# RockPaper
//getUserChoice//
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error!');
  };
};
//getComputerChoice//
const getComputerChoice = () => {
  let randNum = Math.floor(Math.random() * 3)
  return randNum === 0 ? 'rock' : (randNum === 1 ? 'paper' : 'scissors');
};

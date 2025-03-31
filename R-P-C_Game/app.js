let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector('#msg')

const genCompChoice = () => {
  // rock, paper, scissor
  const option = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
};

const drawGame = () => {
    msg.innerText = "It was Draw";
        msg.style.backgroundColor = "#29095c";

};

const showWinner = (userWin) => {
    if (userWin) {
        msg.innerText = 'you win'
        msg.style.backgroundColor = 'green'
    } else {
        msg.innerText = "you loose";
        msg.style.backgroundColor = "red";
        
    }
}

const playGame = (userChoice) => {
  console.log("user Choice=", userChoice);
  // Generate Computer Choice --> modular
  const compChoice = genCompChoice();
  console.log("comp Choice=", compChoice);

  if (userChoice === compChoice) {
    //draw
    drawGame();
  } else {
      let userWin = true;
      if (userChoice === 'rock') {
          //scissor, paper
         userWin = compChoice === 'paper' ? false : true
      }
      else if (userChoice === "paper") {
          //rock, scissor
          userWin = compChoice === "scissor" ? false : true;
      } else {
          // rock, paper
          userWin = compChoice === "rock" ? false : true;
      }
      showWinner(userWin)
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});

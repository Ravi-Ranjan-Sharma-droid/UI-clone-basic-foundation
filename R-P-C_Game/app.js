let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreBoard = document.querySelector("#your-scr");
const compScoreBoard = document.querySelector("#comp-scr");

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

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScoreBoard.innerText = userScore;
    msg.innerText = `you win! your ${userChoice} beats ${compChoice}` ;
    msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScoreBoard.innerText = compScore;
    msg.innerText = `you lost! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

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
    if (userChoice === "rock") {
      //scissor, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissor
      userWin = compChoice === "scissor" ? false : true;
    } else {
      // rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
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

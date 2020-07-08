function computerPlay() {
  let move = Math.random()*3;
  if (move < 1) {
    return "rock"
  }
  else if (move > 1 && move < 2) {
    return "paper"
  }
  else {
    return "scissors"
  }
}
function RPSround(cpumove, playermove) {
  if (cpumove == playermove) {
    message.textContent = "It's a tie! You Played : " + playermove + " and the CPU Played: " + cpumove
    return 0
  }
  else if (cpumove == "rock" && playermove == "scissors" || cpumove == "paper" && playermove == "rock" || cpumove == "scissors" && playermove == "paper") {
    message.textContent = "You Lose! You Played : " + playermove + " and the CPU Played: " + cpumove
    return -1
  }
  else {
    message.textContent = "You win! You Played : " + playermove + " and the CPU Played: " + cpumove
    return 1
  }
}

var myScore = 0;
var cpuScore = 0;

const myScore_dom = document.querySelector("#my-score")
const cpuScore_dom = document.querySelector("#cpu-score")

myScore_dom.textContent = myScore;
cpuScore_dom.textContent = cpuScore;

const buttons = document.querySelectorAll(".game-button");
console.log(buttons.length)

buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', (e) => {
    console.log(e.target.textContent)
    let curr = RPSround(computerPlay(), e.target.textContent.toLowerCase())
    if (curr < 0) {
      cpuScore += 1;
      cpuScore_dom.textContent = cpuScore;
    }
    else if (curr > 0) {
      myScore += 1;
      myScore_dom.textContent = myScore;
    }
    if (myScore == 5 || cpuScore == 5) {
      message.textContent = `You ${myScore == 5 ? "Win" : "Lose"}`
      cpuScore = 0;
      cpuScore_dom.textContent = cpuScore;
      myScore = 0;
      myScore_dom.textContent = myScore;
    }
  });
});

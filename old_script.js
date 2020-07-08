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
    console.log("It's a tie! You Played : " + playermove + " and the CPU Played: " + cpumove)
    return 0
  }
  else if (cpumove == "rock" && playermove == "scissors" || cpumove == "paper" && playermove == "rock" || cpumove == "scissors" && playermove == "paper") {
    console.log("You Lose! You Played : " + playermove + " and the CPU Played: " + cpumove)
    return -1
  }
  else {
    console.log("You win! You Played : " + playermove + " and the CPU Played: " + cpumove)
    return 1
  }
}
function game() {
  let score = 0;
  for (let i = 0; i < 5; i++) {
    let cpumove = computerPlay();
    var playermove = "";
    while (playermove != "rock" && playermove != "paper" && playermove != "scissors") {
      playermove = prompt("enter either rock, paper, or scissors").toLowerCase();
    }
    score += RPSround(cpumove, playermove)
  }
  if (score > 0) {
    console.log("You Win!")
  }
  else if (score < 0) {
    console.log("You Lose")
  }
  else {
    console.log("You Tie!")
  }
  return
}

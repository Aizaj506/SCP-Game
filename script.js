function playGame(userChoice) {
  const choices = ["stone", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";
  let L = 0;

  if (userChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (userChoice === "stone" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "stone") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You Win!!";
  } else {
    result = "You Lose!!";
    L = 1;
  }

  if(L==1){
    document.getElementById("result").innerHTML = `
        <p>You Choose : ${userChoice} </p>
        <p>Computer Choose : ${computerChoice} </p>
        <p>${result}</p>
        <h1>Computer be like : Nikal Hathi &#x1F418; &#x2764;Day</h1>
        <h1>&#x1F606; &#x1F606; &#x1F606;</h1>
    `;
    L = 0;
  }
  else{
    document.getElementById("result").innerHTML = `
        <p>You Choose : ${userChoice} </p>
        <p>Computer Choose : ${computerChoice} </p>
        <p>${result}</p>
    `;
  }
  
}

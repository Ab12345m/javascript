

let Bat1 = document.querySelector("#Bat");

Bat1.addEventListener("click", () => {
  let computerChoice=generateComputerChoice();
  Bat();
  let resultMsg = getResult('Bat', computerChoice);

  showResult('Bat', computerChoice, resultMsg);

});

let Ball1 = document.querySelector("#Ball");
Ball1.addEventListener
  ("click",
  () => {
    computerChoice = generateComputerChoice();
    Ball();
    resultMsg = getResult("Ball", computerChoice);
    showResult("Ball", computerChoice, resultMsg);
    });

  let Stump1 = document.querySelector("#Stump");
  Stump1.addEventListener
    ("click",
    () => {
      computerChoice = generateComputerChoice();
      Stump();
      resultMsg = getResult("Stump", computerChoice);
      showResult("Stump", computerChoice, resultMsg);
    });


function Bat() {
  
}

function Ball() {

}

function Stump() {
  
}


function generateComputerChoice() {
  let randomNumber = Math.random() * 3;
  
  if (randomNumber > 0 && randomNumber <= 1) {
    return  "Bat";
  } else if (randomNumber > 1 && randomNumber <= 2) {
    return  "Ball";
  } else {
    return  "Stump";
  }
  return computerChoice;
}


function getResult(userMove, computerMove) {
  if (userMove === 'Bat') {
    if (computerMove === "Ball") {
      return "User Won";
    } else if (computerMove === "Bat") {
      return "Its a tie";
    } else if (computerMove === "Stump") {
      return "computer has won";
    }
    
  }

  else if (userMove === 'Ball') {
    
      if (computerMove === "Ball") {
        return "its a tie";
      } else if (computerMove === "Bat") {
        return "computer has won";
      } else if (computerMove === "Stump") {
        return "user has won";
      }
    }
    
  
  else {
    
      if (computerMove === "Ball") {
        return "computer has won";
      } else if (computerMove === "Bat") {
        return "user has won";
      } else if (computerMove === "Stump") {
        return "its a tie";
      }
    
}
}

function showResult(userMove, computerMove, result) {

  alert(
    `you have chosen ${userMove}. Computer choice is ${computerMove} and ${result}`,
  );
  
}



  

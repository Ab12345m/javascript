

function Bat() {
    let randomNumber = Math.random() * 3;
    let computerChoice;

    if (randomNumber > 0 && randomNumber <= 1) {
        computerChoice = 'Bat';
    }
    else if (randomNumber > 1 && randomNumber <= 2) {
        computerChoice = 'Ball';
        
    }
    else {
        computerChoice = 'Stump';
    }
    console.log(`computer choice is ${computerChoice}`);

    if (computerChoice === 'Ball') {
        console.log("User Won");
    }
    else if (computerChoice === 'Bat') {
        console.log("its a tie");
    }
    else if (computerChoice === 'Stump') {
        console.log('Computer has won');
    }

    let resultMsg;

    if (computerChoice === 'Ball') {
        resultMsg = "User Won";
    }
    else if (computerChoice === 'Bat') {
        resultMsg = 'Its a tie';
    }
    else if (computerChoice === 'Stump') {
        resultMsg = 'computer has won';
    }

    alert(`you have chosen Bat. Computer choice is ${computerChoice} and ${resultMsg}`);
}

function Ball() {
    let randomNumber = Math.random() * 3;
    let computerChoice;

    if (randomNumber > 0 && randomNumber <= 1) {
      computerChoice = "Bat";
    } else if (randomNumber > 1 && randomNumber <= 2) {
      computerChoice = "Ball";
    } else {
      computerChoice = "Stump";
    }
    console.log(`computer choice is ${computerChoice}`);

    if (computerChoice === "Ball") {
      console.log("its tie");
    } else if (computerChoice === "Bat") {
      console.log("Computer has won");
    } else if (computerChoice === "Stump") {
      console.log("User has won");
    }

    let resultMsg;

    if (computerChoice === "Ball") {
      resultMsg = "User Won";
    } else if (computerChoice === "Bat") {
      resultMsg = "Its a tie";
    } else if (computerChoice === "Stump") {
      resultMsg = "computer has won";
    }

    alert(
      `you have chosen Ball. Computer choice is ${computerChoice} and ${resultMsg}`,
    );
    
}

function Stump() {
    let randomNumber = Math.random() * 3;
    let computerChoice;

    if (randomNumber > 0 && randomNumber <= 1) {
      computerChoice = "Bat";
    } else if (randomNumber > 1 && randomNumber <= 2) {
      computerChoice = "Ball";
    } else {
      computerChoice = "Stump";
    }
    console.log(`computer choice is ${computerChoice}`);

    if (computerChoice === "Ball") {
      console.log("User Won");
    } else if (computerChoice === "Bat") {
      console.log("its a tie");
    } else if (computerChoice === "Stump") {
      console.log("Computer has won");
    }

    let resultMsg;

    if (computerChoice === "Ball") {
      resultMsg = "Computer Won";
    } else if (computerChoice === "Bat") {
      resultMsg = "User Won";
    } else if (computerChoice === "Stump") {
      resultMsg = "its a tie";
    }

    alert(
      `you have chosen Stump. Computer choice is ${computerChoice} and ${resultMsg}`,
    );
}

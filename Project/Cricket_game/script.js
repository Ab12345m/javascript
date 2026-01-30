

function Bat() {
    alert("you have chosen Bat");
    let randomNumber = Math.random() * 3;

    if (randomNumber > 0 && randomNumber <= 1) {
        let computerChoice = 'Bat';
    }
    else if (randomNumber > 1 && randomNumber <= 2) {
        let computerChoice = 'Ball';
        
    }
    else {
        let computerChoice = 'Stump';
    }

    
}
let userChoice = prompt('Do You Choose Rock, Paper, or Scissors?');
let computerChoice = Math.random();


// User Choice
if (!userChoice) {
    document.querySelector(".userchoice").innerHTML = '<p>Stop Cheating and Choose Something Normal!</p>'
} else {
    document.querySelector(".userchoice").innerHTML = `<p>You Chose ${userChoice}</p>`
}

// Computer Choice
if (computerChoice <= 0.34) {
    computerChoice = 'Rock';
} else if (computerChoice <= 0.67) {
    computerChoice = 'Paper';
} else {
    computerChoice = 'Scissors';
}

document.querySelector(".computerchoice").innerHTML = `<p>The Computer Chooses ${computerChoice}</p>`


// Results
let compare = (choice1,choice2) => {
    if (choice1 === choice2) {
        return "It's A Tie!";
    }

    if (choice1 === "Rock") {
        if (choice2 === "Scissors") {
            return `You Win!`;
        } else {
            return "You Lose!";
        }
    }

    if (choice1 === "Paper") {
        if (choice2 === "Rock") {
            return "You Win!";
        } else {
            return "You Lose!";
        }
    }

    if (choice1 === "Scissors") {
        if (choice2 === "Rock") {
            return "You Lose!";
        } else {
            return "You Win!";
        }
    }
}

let results = compare(userChoice, computerChoice);

document.querySelector(".results").innerHTML = `<p>${results}</p>`
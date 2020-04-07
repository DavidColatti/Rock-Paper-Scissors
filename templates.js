// // COMPARE

// let compare = (choice1,choice2) => {
//     if (choice1 === choice2) {
//         return "It's A Tie!";
//     }

//     if (choice1 === "Rock") {
//         if (choice2 === "Scissors") {
//             return `You Win!`;
//         } else {
//             return "You Lose!";
//         }
//     }

//     if (choice1 === "Paper") {
//         if (choice2 === "Rock") {
//             return "You Win!";
//         } else {
//             return "You Lose!";
//         }
//     }

//     if (choice1 === "Scissors") {
//         if (choice2 === "Rock") {
//             return "You Lose!";
//         } else {
//             return "You Win!";
//         }
//     }
// }
// let results = compare(userChoice, computerChoice);
// return results;


// // FUNCTIONS
// const pickSomething = () => {
//     let choice = prompt("Do You Choose Rock, Paper, Or Scissor?")
//     return choice;
// }

// let buttonStart = document.querySelector("body > div.startBtn > button").addEventListener('click', pickSomething);





// // Computer Choice
// let computerChoice = Math.random();

// if (computerChoice <= 0.34) {
//     computerChoice = 'Rock';
// } else if (computerChoice <= 0.67) {
//     computerChoice = 'Paper';
// } else {
//     computerChoice = 'Scissors';
// }
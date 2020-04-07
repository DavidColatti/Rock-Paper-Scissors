const startGame = () => {
	document.querySelector('body > div.button > button').innerText = 'Play Again!';

	// User Choice
	let userChoice = prompt('Do You Choose Rock, Paper, or Scissors?');
	userChoice = userChoice.toLowerCase();

	if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
		document.querySelector('body > div.game > p.userchoice').innerText = `You Chose ${userChoice[0].toUpperCase() +
			userChoice.slice(1)}`;
	} else {
		document.querySelector('body > div.game > p.userchoice').innerText = 'Please Input Valid Object';
	}

	// Computer Choice
	let computerChoice = Math.random();
	if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
		if (computerChoice <= 0.34) {
			computerChoice = 'rock';
		} else if (computerChoice <= 0.67) {
			computerChoice = 'paper';
		} else {
			computerChoice = 'scissors';
		}

		document.querySelector(
			'body > div.game > p.computerchoice'
		).innerText = `Your Opponent Chooses ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}`;
	}

	// COMPARE FUNCTION

	let compare = (choice1, choice2) => {
		if (choice1 === choice2) {
			return "It's A Tie!";
		}

		if (choice1 === 'rock') {
			if (choice2 === 'scissors') {
				return `You Win Using Rock!`;
			} else {
				return 'You Lose Using Rock!';
			}
		}

		if (choice1 === 'paper') {
			if (choice2 === 'rock') {
				return 'You Win Using Paper!';
			} else {
				return 'You Lose Using Paper!';
			}
		}

		if (choice1 === 'scissors') {
			if (choice2 === 'rock') {
				return 'You Lose Using Scissors!';
			} else {
				return 'You Win Using Scissors!';
			}
		}
	};

	let results = compare(userChoice, computerChoice);
	if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
		document.querySelector('body > div.game > p.results').innerText = `${results}`;
	}
};

document.querySelector('body > div.button > button').addEventListener('click', startGame);

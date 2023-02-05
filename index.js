function buttonFunction(){
    document.getElementById("buttonAppear").innerHTML = '<button onclick="secondFunction()">Some text here</button>';
}

// function to get random rock, paper, scissors from the computer
function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    if (number == 0) {
        return 'ROCK';
    } else if (number == 1) {
        return 'PAPER';
    } else if (number == 2) {
        return 'SCISSORS';
    }
}

// this function Check the computer generated answer of AI vs the user input to see who win
function playTurn(userInput) {
    let computerInput = getComputerChoice();
    console.log('user: ' + userInput);
    console.log('computer: ' + computerInput);
    
    if (userInput === computerInput) {
        console.log('Tie!');
    } else if (userInput === 'ROCK' && computerInput === 'PAPER') {
        return('You Lose!');
    } else if (userInput === 'ROCK' && computerInput === 'SCISSORS') {
        return('You Win!');
    } else if (userInput === 'PAPER' && computerInput === 'SCISSORS') {
        return('You Lose!');
    } else if (userInput === 'PAPER' && computerInput === 'ROCK') {
        return('You Win!');
    } else if (userInput === 'SCISSORS' && computerInput === 'ROCK') {
        return('You Lose!');
    } else if (userInput === 'SCISSORS' && computerInput === 'PAPER') {
        return('You Win!');
    }
}

// the game get user input, play 5 round against random computer input and check the winner ar the end
function game() {
    const rock = document.querySelector(".rock");
    const scissors = document.querySelector(".scissors");
    const paper = document.querySelector(".paper");

    const body = document.body;
    const div = document.createElement("div");
    div.style.textAlign = "Center";
    div.style.fontSize = "24px";

    var playerWin = 0;
    var computerWin = 0;
    var userInput = "Hello";
    var result = "Hello";

    // this function handle the ending and check who is the winner after 5 rounds
    const handleEnding = () => {
        console.log('Player win: ' + playerWin);
        console.log('Computer Win: ' + computerWin);

        if (playerWin > computerWin) {
            div.innerText = 'Player Win: ' + playerWin + '\n' + 'Computer Win: ' + computerWin + '\n' + 'You win!';
        } else if (playerWin < computerWin) {
            div.innerText = 'Player Win: ' + playerWin + '\n' + 'Computer Win: ' + computerWin + '\n' + 'You lose!';
        }
        body.append(div);

        // Remove it from the elements
        rock.removeEventListener("click", handlerRock);
        scissors.removeEventListener("click", handlerScissors);
        paper.removeEventListener("click", handlerPaper);
    }

    // Create the handler of a three function, rock, paper, scissors
    const handlerRock = e => {
        userInput = "ROCK";
        result = playTurn(userInput);
        if (result === 'You Win!') {
            playerWin++;
        } else if (result === 'You Lose!') {
            computerWin++;
        }

        div.innerText = 'Player Win: ' + playerWin + '\n' + 'Computer Win: ' + computerWin;
        body.append(div);

        if (playerWin == 3 || computerWin == 3) {
            handleEnding();
        }
    };
    rock.addEventListener ("click", handlerRock);

    const handlerScissors = e => {
        userInput = "SCISSORS";
        result = playTurn(userInput);
        if (result === 'You Win!') {
            playerWin++;
        } else if (result === 'You Lose!') {
            computerWin++;
        }

        div.innerText = 'Player Win: ' + playerWin + '\n' + 'Computer Win: ' + computerWin;
        body.append(div);

        if (playerWin == 3 || computerWin == 3) {
            handleEnding();
        }
    };
    scissors.addEventListener ("click", handlerScissors);

    const handlerPaper = e => {
        userInput = "PAPER";
        result = playTurn(userInput);
        if (result === 'You Win!') {
            playerWin++;
        } else if (result === 'You Lose!') {
            computerWin++;
        }

        div.innerText = 'Player Win: ' + playerWin + '\n' + 'Computer Win: ' + computerWin;
        body.append(div);

        if (playerWin == 3 || computerWin == 3) {
            handleEnding();
        }
    };
    paper.addEventListener ("click", handlerPaper);
}

game();

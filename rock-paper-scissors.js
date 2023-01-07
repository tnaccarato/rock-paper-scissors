// Declares variables for counting rounds and scores
let computerScore = 0, playerScore = 0, draws = 0, rounds = 0

// Declares constants for text elements
const TEXT = document.querySelector('div.text')
const SCORE = document.querySelector('div.score')

// Gets a random choice for the computer out of rock, paper or scissors
function getComputerChoice(){
    // Gets a random number between 1 and 3
    let computerNumber = Math.floor((Math.random() * 3) + 1);
    // Assigns a variable for storing the computer choice
    let computerChoice

    // Assigns rock, paper or scissors depending on the value
    switch (computerNumber) {
        case 1:
           computerChoice = "rock";
           break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
    }
    // Returns the computer choice
    return computerChoice
}


// Plays a round each time a button is pressed
const BUTTONS = document.querySelectorAll('button')
BUTTONS.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', (e) => {
    rounds ++
    playRound(e.target.id); // Sets the playerChoice to the id of the button (rock, paper or scissors)
    });
});

// Updates the score and round after each round
function updateScore(){
    if(rounds >= 5){
        result()
    }
    else{
    SCORE.textContent = `Round ${rounds} \r\n
    Player: ${playerScore} \r\n
    Computer: ${computerScore} \r\n
    Draws: ${draws}`
    }
}

// Resets the scores
function resetScore(){
    // Sets scores to zero
    playerScore = 0
    draws = 0
    computerScore = 0
    // Resets the text
    TEXT.textContent = 'Let\'s play rock, paper, scissors!'
    SCORE.remove()
}

// Plays a round
function playRound(playerChoice){
    // Gets the computer and player selections
    computerSelection = getComputerChoice();
    playerSelection = playerChoice
    // Decides the outcome of the game

    // If player enters the same as computer
    if(playerSelection == computerSelection){
        // Updates the text content in text div
        TEXT.textContent = `It's a draw! You both picked ${playerSelection}!`
        // Updates the score
        draws ++
        updateScore()

    }
    else{
        // If computer selects rock
        if(computerSelection == "rock"){
            switch(playerSelection){
                case "paper":
                    // Updates the text content in text div
                    TEXT.textContent = "You won! Paper covers Rock!"
                    // Updates the score
                    playerScore ++
                    updateScore()
                    return
                case "scissors":
                    // Updates the text content in text div
                    TEXT.textContent = "You lost! Rock smashes Scissors!"
                    // Updates the score
                    computerScore ++
                    updateScore()
            }
        }

        // If computer selects paper
        else if(computerSelection == "paper"){
            switch(playerSelection){
                case "scissors":
                    // Updates the text content in text div
                    TEXT.textContent = "You won! Scissors cut Paper!"
                    // Updates the score
                    playerScore ++
                    updateScore()
                    return
                case "rock":
                    // Updates the text content in text div
                    TEXT.textContent = "You lost! Paper covers Rock!"
                    // Updates the score
                    computerScore ++
                    updateScore()
            }
        }

        // If computer selects scissors
        else{
            switch(playerSelection){
                case "rock":
                    // Updates the text content in text div
                    TEXT.textContent = "You won! Rock smashes Scissors!"
                    // Updates the score
                    playerScore ++
                    updateScore()
                    return
                case "paper":
                    // Updates the text content in text div
                    TEXT.textContent = "You lost! Scissors cut Paper!"
                    // Updates the score
                    computerScore ++
                    updateScore()
            }
        }
    }
}

function result(){
    // Updates the score with the final score
    SCORE.textContent = `Final Score: \r\n
        Player: ${playerScore} \r\n
        Computer: ${computerScore} \r\n
        Draws: ${draws} \r\n
`;

    // Adds a qualifying message onto the end depending on the result
    if (computerScore == playerScore){
        TEXT.textContent = `It's a draw!`
    }
    else if(playerScore > computerScore){
        TEXT.textContent = `You win!`
    }
    else{
        TEXT.textContent = `You lost!`
    }
    const RESETBUTTON = document.createElement('button')
    RESETBUTTON.textContent = 'Play again'
    RESETBUTTON.addEventListener('click', (e) => {
        resetScore()
        });
    document.body.appendChild(RESETBUTTON)
}



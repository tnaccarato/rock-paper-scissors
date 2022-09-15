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

// Plays a round
function playRound(){
    // Gets the computer and player selections
    computerSelection = getComputerChoice();
    playerSelection = prompt("Please enter either rock, paper or scissors:")
    // Anticipates whitespace around player's selection and allows for different
    //cases
    playerSelection = playerSelection.trim().toLowerCase();
    // Creates an array of valid responses for player selection
    validResponses = ["rock", "paper", "scissors"];
    // Allows user to retry until they enter a valid choice
    while(!validResponses.includes(playerSelection)){
        playerSelection = prompt("Response not recognised. Please enter rock, "
        + "paper or scissors:");
        playerSelection = playerSelection.trim().toLowerCase();
    }

    // Decides the outcome of the game

    // If player enters the same as computer
    if(playerSelection == computerSelection){
        return `It's a draw! You both picked ${playerSelection}!`;
    }
    else{
        // If computer selects rock
        if(computerSelection == "rock"){
            switch(playerSelection){
                case "paper":
                    return "You won! Paper covers Rock!";
                case "scissors":
                    return "You lost! Rock smashes Scissors!";
            }
        }

        // If computer selects paper
        else if(computerSelection == "paper"){
            switch(playerSelection){
                case "scissors":
                    return "You won! Scissors cut Paper!";
                case "rock":
                    return "You lost! Paper covers Rock!";
            }
        }

        // If computer selects scissors
        else{
            switch(playerSelection){
                case "rock":
                    return "You won! Rock smashes Scissors!";
                case "paper":
                    return "You lost! Scissors cut Paper!";
            }
        }
    }
}

function game(){
    // Declares variables for computer and user score
    let computerScore, playerScore;
    for(let i = 0; i < 5; i++){
        result = playRound()
        console.log(result)
        if(result.includes("won")){
            playerScore ++
        }
        else if(result.includes("lost")){
            computerScore ++
        }
    }
    console.log(`Final Score:
        Player: ${playerScore}
        Computer: ${computerScore}`)
    if (computerScore == playerScore){
        console.log("It's a draw!")
    }
    else if(playerScore > computerScore){
        console.log("You win!")
    }
    else{
        console.log("You lost!")
    }
}

game()


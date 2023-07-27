console.log("Welcome, trainers!  Choose your Pokemon.")

const starters = ["Bulbasaur", "Charmander", "Squirtle"];

function getComputerChoice(){
    const select = starters[Math.floor(Math.random() * starters.length)];
    return select;
}



let computerChoice = getComputerChoice();

let starterChoice = prompt("Who's your starter?");

/*
ChatGPT code
function round() {
    if (starterChoice.toLowerCase() === "bulbasaur" && computerChoice === "Squirtle") {
      console.log("It's super effective!");
    } else if (starterChoice.toLowerCase() === "charmander" && computerChoice === "Bulbasaur") {
      console.log("It's super effective!");
    } else if (starterChoice.toLowerCase() === "squirtle" && computerChoice === "Charmander") {
      console.log("It's super effective!");
    } else {
      console.log("You uh, don't know what you're doing, huh?");
    }
  }
  */

function round() {

    console.log(`Your opponent chose ${computerChoice}.`);
    console.log(`You chose ${starterChoice}.`);

    if  (
        (starterChoice.toLowerCase() == "bulbasaur" && computerChoice == "Squirtle") ||
        (starterChoice.toLowerCase() == "charmander" && computerChoice == "Bulbasaur") ||
        (starterChoice.toLowerCase() == "squirtle" && computerChoice == "Charmander")
    )
        {console.log("It's super effective!");
    }

    else if  (
        (starterChoice.toLowerCase() == "charmander" && computerChoice == "Squirtle") ||
        (starterChoice.toLowerCase() == "squirtle" && computerChoice == "Bulbasaur") ||
        (starterChoice.toLowerCase() == "bulbasaur" && computerChoice == "Charmander")
    )
        {console.log("It's not very effective...");
    }

    else if  (
        (starterChoice.toLowerCase() == computerChoice.toLowerCase()) 
    )
        {console.log("It's an even match!");
    }

    else if (
        (starterChoice.toLowerCase() == "pikachu"))
        {console.log("We aren't counting Yellow.")}


    else {console.log("That's not an original 151 starter, okay?")
    }

}

round();


/*Randomly return rock paper scissors 

let playerSelection = prompt("Who's your starter?");
    Get player input via text box. 

playerSelection

    if (playerSelection.toLowerCase() === "rock") and computerSelection = scissors OR
    || (playerSelection.toLowerCase() === "paper") and computerSelection = rock OR
    || (playerSelection.toLowerCase() === "scissors") and computerSelection = paper OR
    
    alert("You win!")

else if

    if (playerSelection.toLowerCase() === "rock") and computerSelection = paper OR
    || (playerSelection.toLowerCase() === "paper") and computerSelection = scissors OR
    || (playerSelection.toLowerCase() === "scissors") and computerSelection = rock OR
    
    alert("You lose!")

    playRound -> call function 5 times instead of looping
        if player wins 3 or more times, player wins
        if player wins 2 or less times, computer wins

else
    
    alert("It's a tie!")
    /*
    
    
/* 
ODIN CODE SUGGESTION
//function playRound(playerSelection, computerSelection) {
// your code here!
}
 
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection)); 
*/

/*
str1.toLowerCase() === str2.toLowerCase();
    compare stings, case insensitive
*/
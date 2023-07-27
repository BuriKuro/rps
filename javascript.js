console.log("Welcome, trainers!  Choose your Pokemon.")

const starters = ["Bulbasaur", "Charmander", "Squirtle"];

let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const select = starters[Math.floor(Math.random() * starters.length)];
    return select;
}

function round() {

    let computerChoice = getComputerChoice();
    let starterChoice = prompt("Who's your starter?");

    console.log(`You chose ${starterChoice}.`);
    console.log(`Your opponent chose ${computerChoice}.`);

    let win = "It's super effective!"
    let lose = "It's not every effective..."
    let draw = "It's an even match!"


    if  (
        (starterChoice.toLowerCase() == "bulbasaur" && computerChoice == "Squirtle") ||
        (starterChoice.toLowerCase() == "charmander" && computerChoice == "Bulbasaur") ||
        (starterChoice.toLowerCase() == "squirtle" && computerChoice == "Charmander")
    )
        {console.log(win + " Your score is " + (++playerScore) + ". The computer score is " + computerScore + ".");
    }

    else if  (
        (starterChoice.toLowerCase() == "charmander" && computerChoice == "Squirtle") ||
        (starterChoice.toLowerCase() == "squirtle" && computerChoice == "Bulbasaur") ||
        (starterChoice.toLowerCase() == "bulbasaur" && computerChoice == "Charmander")
    )
        {console.log(lose + " Your score is " + playerScore + ". The computer score is " + (++computerScore) + ".");
    }

    else if  (
        (starterChoice.toLowerCase() == computerChoice.toLowerCase()) 
    )
        {console.log(draw + " Your score is " + playerScore + ". The computer score is " + computerScore + ".");
    }

    else if (
        (starterChoice.toLowerCase() == "pikachu"))
        {console.log("We aren't counting Yellow.")}


    else {console.log("You gotta pick a Red/Blue starter, man.")
    }
}

round();
round();
round();
round();
round();

function result() {
    if (
        playerScore > computerScore && computerScore < playerScore)
        {console.log("You defeated your opponent!");}

    else if (
        playerScore === computerScore)
        {console.log("It's a tie!");}

    else if (
        computerScore > playerScore && playerScore < computerScore)
        {console.log("You white out!")}
    }

result();
    

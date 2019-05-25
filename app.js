let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".scoreBoard_div");
const results_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices [randomNumber];
}

function win (userChoice, ComputerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
        results_p.innerHTML = `${convertToWord(userChoice)} ${(smallUserWord)} beats ${convertToWord(ComputerChoice)} ${(smallCompWord)} . You win`;
    
}

function lose (userChoice, ComputerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
        results_p.innerHTML = `${convertToWord(userChoice)} ${(smallUserWord)} loses ${convertToWord(ComputerChoice)} ${(smallCompWord)} . You lose`;
}

function draw(userChoice, ComputerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
        results_p.innerHTML = `${convertToWord(userChoice)} ${(smallUserWord)} equals ${convertToWord(ComputerChoice)} ${(smallCompWord)} . Its a draw`;
}

function convertToWord (letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "scissors";
}

function game(userChoice){
    const ComputerChoice = getComputerChoice();
    switch (userChoice + ComputerChoice) {
    
        case "rs":
        case "pr":
        case "sr":
        win(userChoice, ComputerChoice);
        break;

        case "rp":
        case "ps":
        case "sr":
        lose(userChoice, ComputerChoice);
        break;

        case "rr":
        case "pp":
        case "ss":
        draw(userChoice, ComputerChoice);
        break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })
}

main();





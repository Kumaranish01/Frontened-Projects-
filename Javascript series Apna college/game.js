let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-Score");
const compScorePara= document.querySelector("#comp-Score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    ;
}

const drawGame = () => {
    msg.innerText = "Game was draw. Play Again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin ,userChoice ,CompChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you win!  your ${userChoice} beats ${compScore}`;
        msg.style.backgroundColor = "Green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you loss! ${CompChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //Generate Computer Choice
    const CompChoice = genCompChoice();
    console.log("comp choice = ", CompChoice);

    if (userChoice === CompChoice) {
        //Draw Games
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissor , paper
            userWin = CompChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock , scissor 
            userWin = CompChoice === "scissor" ? false : true;
        } else {
            //rock ,paper
            userWin = CompChoice === "rock" ? false : true;
        }
        showWinner(userWin ,userChoice,CompChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});
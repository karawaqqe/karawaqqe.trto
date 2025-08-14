import stone from "../img/rock-paper-scissors/stone.png"
import paper from "../img/rock-paper-scissors/paper.png"
import scissors from "../img/rock-paper-scissors/scissors.png"

const text = document.getElementById("rps-text-result");
const scoreUser = document.getElementById("rps-score-user");
const scorePc = document.getElementById("rps-score-pc");
const buttons = document.querySelectorAll(".rps-sesection__form__btn");
const imgPc = document.getElementById("rps-form-pc-img")

const counter = { user: 0, pc: 0 };

const rpsData = {
    "stone": [1, stone],
    "scissors": [2, scissors],
    "paper": [3, paper]
};


const rpsDataReverse = {
    1: "stone",
    2: "scissors",
    3: "paper"
};


function playGame(event) {
    event.preventDefault();

    text.classList.remove(
        "rps-sesection__text-winner",
        "rps-sesection__text-loser",
        "rps-sesection__text-draw"
    );
    
    const userChoiceName = event.currentTarget.value;
    const userChoice = rpsData[userChoiceName][0];
    const computerChoice = Math.floor(Math.random() * 3) + 1;
    const compName = rpsDataReverse[computerChoice];

    imgPc.src = rpsData[compName][1];

    if (userChoice === computerChoice) {
        text.textContent = "Нічия!";
        text.classList.add("rps-sesection__text-draw");
    } else if (
        (userChoice === 1 && computerChoice === 2) ||
        (userChoice === 2 && computerChoice === 3) ||
        (userChoice === 3 && computerChoice === 1)
    ) {
        text.textContent = "Ви виграли раунд!";
        text.classList.add("rps-sesection__text-winner");
        counter.user++;
        scoreUser.textContent = counter.user;
    } else {
        text.textContent = "Комп’ютер виграв раунд!";
        text.classList.add("rps-sesection__text-loser");
        counter.pc++;
        scorePc.textContent = counter.pc;
    }
}


buttons.forEach(btn => btn.addEventListener("click", playGame));

let points = 0;
let errors = 0;
let round = 0;
let playerName = "";
let correctAnswer = "";
let thisGameQuestions = [];
let currentQuestion = 0;
const timeLeftDisplay = document.querySelector("#seconds-left");
let timeLeft = 95;
let playButton = document.getElementById("play-btn");

//Function that starts the timer
function countdown() {
    window.setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval((timeLeft = 0));
        }
        timeLeftDisplay.innerHTML = timeLeft;
        timeLeft -= 1;
    }, 1000);
}

//Function that starts all the game
function play() {
    let userName = document.getElementById("name");
    countdown();
    playerName = userName.value;
    userName.value = "";
    pasapalabraGame();
}

//Hides the instructions and shows the questions
playButton.onclick = function () {
    document.getElementById("instructions").classList.toggle("hidden");
    document.getElementById("questions-area").classList.toggle("hidden");
    play();
};

//Auxiliar array with alphabet letter
const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "Ñ",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];

// Function that generates a random question for each letter
const generateRandomQuestion = (letter) => {
    let letterArray = questions.filter((question) => {
        return question.letter === letter;
    });
    let index = Math.floor(Math.random() * 3);
    thisGameQuestions.push(letterArray[index]);
};

//Generate the array with the questions for the game
(function generateThisGameQuestions() {
    for (let i = 0; i < alphabet.length; i++) {
        generateRandomQuestion(alphabet[i]);
    }
})();

// Normalizes the introduced word
const normalize = (word) => {
    let normalizedWord = word
        // .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
    return normalizedWord;
};

//checks if the round is finished
let roundFinished = () => {
    let finished = currentQuestion < thisGameQuestions.length ? false : true;
    return finished;
};

//set actions to follow when clicking the answer or pasapalabra button
let btnPasapalabra = document.getElementById("pasapalabra-btn");
let btnAnswer = document.getElementById("answer-btn");

btnAnswer.onclick = function () {
    if (thisGameQuestions[currentQuestion].status === 0 && !roundFinished()) {
        pasapalabraGame();
        checkAnswer();
    } else {
        currentQuestion++;
    }
};

btnPasapalabra.onclick = function () {
    if (thisGameQuestions[currentQuestion].status === 0 && !roundFinished()) {
        pasapalabra();
    } else {
        currentQuestion++;
    }
};

// Executes the game
const pasapalabraGame = () => {
    if (thisGameQuestions[currentQuestion].status === 0) {
        let firstPart =
            thisGameQuestions[currentQuestion].question.split(".")[0];
        let secondPart = thisGameQuestions[currentQuestion].question
            .split(".")[1]
            .trim();

        //Changes the question text
        document.getElementById("letter-text").innerHTML = `${firstPart}:`;
        document.getElementById("question").innerHTML = secondPart;
    } else if (thisGameQuestions[currentQuestion].status !== 0) {
        currentQuestion++;
        pasapalabraGame();
    }

    if (roundFinished()) {
        currentQuestion = 0;
    }
};

let checkAnswer = () => {
    let correctAnswer = normalize(thisGameQuestions[currentQuestion].answer);
    document.querySelector(".interior__game-name").classList.add("hidden"); //hides the correct answer values in html
    let userAnswer = document.getElementById("user-answer");
    let btn = document.getElementById(
        thisGameQuestions[currentQuestion].letter
    );
    let correctAnswerText = document.querySelector(
        ".correct-answer__answer--text"
    );
    let correctAnswerValue = document.querySelector(
        ".correct-answer__answer--value"
    );
    let answerEvaluation = document.querySelector("#answer-evaluation");

    if (normalize(userAnswer.value) !== correctAnswer) {
        btn.classList.add("button--state-incorrect");
        document
            .querySelector(".interior__pop-section")
            .classList.remove("hidden");

        answerEvaluation.innerHTML = "Incorrecto!";
        correctAnswerText.innerHTML = "La respuesta correcta es:";
        correctAnswerValue.innerHTML =
            thisGameQuestions[currentQuestion].answer;
        thisGameQuestions[currentQuestion].status = 2;

        correctAnswerValue.classList.remove("hidden");
        correctAnswerText.classList.remove("hidden");
        errors++;
    } else if (normalize(userAnswer.value) === correctAnswer) {
        btn.classList.add("button--state-correct");
        document
            .querySelector(".interior__pop-section")
            .classList.remove("hidden");

        answerEvaluation.innerHTML = "Correcto!";
        correctAnswerText.classList.add("hidden");
        correctAnswerValue.classList.add("hidden");
        thisGameQuestions[currentQuestion].status = 1;
        points++;
    }

    userAnswer.value = "";
    document.getElementById("points-btn").innerHTML = points;
    currentQuestion++;
    pasapalabraGame();
};

// Changes style when pasapalabra is selected
let pasapalabra = () => {
    if (!roundFinished()) {
        document
            .querySelector(".interior__game-name")
            .classList.remove("hidden");
        document
            .querySelector(".interior__pop-section")
            .classList.add("hidden");

        currentQuestion++;
        pasapalabraGame();
    } else {
        currentQuestion = 0;
        round++;
    }
};

// //Asks the player if they want to play again
// const wantToReplay = () => {
//     if (window.confirm("Quieres volver a jugar?")) {
//         points = 0;
//         errors = 0;
//         rounds = 0;
//         finished = false;
//         exitedGame = false;
//         thisGameQuestions = [];
//         unansweredQuestions = [];
//         generateThisGameQuestions();
//         pasapalabraGame(thisGameQuestions);
//     }
// };

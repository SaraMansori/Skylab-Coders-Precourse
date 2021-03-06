let points = 0;
let errors = 0;
let round = 0;
let playerName = "";
let correctAnswer = "";
let thisGameQuestions = [];
let unansweredQuestions = [];
let finished = false;
let currentQuestion = 0;
const timeLeftDisplay = document.querySelector("#seconds-left");
let timeLeft = 95;
let playButton = document.getElementById("play-btn");
let timer = "";
let nameField = document.getElementById("name");

//Function that starts the timer
function countdown() {
    timer = setInterval(function () {
        if (timeLeft >= 0) {
            timeLeftDisplay.innerHTML = timeLeft;
            timeLeft -= 1;
        } else {
            endGame();
        }
    }, 1000);
}

const endGame = () => {
    clearInterval(timer);
};

//Function that starts all the game
function play() {
    generateThisGameQuestions();
    let userName = nameField.innerHTML;
    countdown();
    playerName = userName.value;
    userName.value = "";
    changeDisplayedText();
}

//Hides the instructions and shows the questions
playButton.onclick = function () {
    document.getElementById("instructions").classList.toggle("hidden");
    document.getElementById("questions-area").classList.toggle("hidden");
    play();
};

nameField.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        document.getElementById("instructions").classList.toggle("hidden");
        document.getElementById("questions-area").classList.toggle("hidden");
        play();
    }
});

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
function generateThisGameQuestions() {
    for (let i = 0; i < alphabet.length; i++) {
        generateRandomQuestion(alphabet[i]);
    }
}

// Normalizes the introduced word
const normalize = (word) => {
    let normalizedWord = word
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
    return normalizedWord;
};

//checks if the round is finished
let roundFinished = () => {
    let finished =
        currentQuestion < thisGameQuestions.length - 1 ? false : true;
    document
        .getElementById(thisGameQuestions[currentQuestion].letter)
        .classList.remove("active");
    return finished;
};

//set actions to follow when clicking the answer or pasapalabra button
let btnPasapalabra = document.getElementById("pasapalabra-btn");
let btnAnswer = document.getElementById("answer-btn");

btnAnswer.onclick = function () {
    checkAnswer();
};

answerField = document.getElementById("user-answer");
answerField.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        if (document.getElementById("user-answer").value === "") {
            unansweredQuestions.push(thisGameQuestions[currentQuestion]);
            pasapalabra();
        } else {
            checkAnswer();
        }
    }
});

btnPasapalabra.onclick = function () {
    unansweredQuestions.push(thisGameQuestions[currentQuestion]);
    pasapalabra();
};

// Executes the game
const changeDisplayedText = () => {
    if (thisGameQuestions[currentQuestion]) {
        let firstPart =
            thisGameQuestions[currentQuestion].question.split(".")[0];
        let secondPart = thisGameQuestions[currentQuestion].question
            .split(".")[1]
            .trim();
        if (currentQuestion > 0) {
            document
                .getElementById(thisGameQuestions[currentQuestion - 1].letter)
                .classList.remove("active");
        }

        document
            .getElementById(thisGameQuestions[currentQuestion].letter)
            .classList.add("active");

        //Changes the question text
        document.getElementById("letter-text").innerHTML = `${firstPart}:`;
        document.getElementById("question").innerHTML = secondPart;
    }
};

let checkAnswer = () => {
    if (document.getElementById("user-answer").value === "") {
        unansweredQuestions.push(thisGameQuestions[currentQuestion]);
        pasapalabra();
    } else {
        let userAnswer = document.getElementById("user-answer");
        let correctAnswer = normalize(
            thisGameQuestions[currentQuestion].answer
        );
        document.querySelector(".interior__game-name").classList.add("hidden"); //hides the correct answer values in html
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

        if (roundFinished()) {
            if (unansweredQuestions.length > 0) {
                currentQuestion = 0;
                thisGameQuestions = unansweredQuestions;
                unansweredQuestions = [];
            } else {
                finished = true;
                finishedGame();
            }
        } else {
            currentQuestion++;
        }

        userAnswer.value = "";
        document.getElementById("points-btn").innerHTML = points;
        if (!finished) changeDisplayedText();
    }
};

// Changes style when pasapalabra is selected
let pasapalabra = () => {
    // if (!roundFinished()) {
    document.querySelector(".interior__game-name").classList.remove("hidden");
    document.querySelector(".interior__pop-section").classList.add("hidden");

    if (roundFinished()) {
        currentQuestion = 0;
        thisGameQuestions = unansweredQuestions;
        unansweredQuestions = [];
    } else {
        currentQuestion++;
    }
    changeDisplayedText();
};

const finishedGame = () => {
    const game = document.querySelector("#questions-area");
    document.querySelector(".end-section").classList.remove("hidden");
    document.querySelector(".end-section").classList.add("flex");
    game.classList.add("hidden");
    
    endGame();
    document.querySelector(".interior__pop-section").classList.add("hidden");
    document.querySelector(".interior__game-name").classList.add("hidden");
    const endSectionPoints = document.getElementById("end-section-points");
    endSectionPoints.innerHTML = `Has obtenido ${points} puntos`;
    const endSectionSeconds = document.getElementById("end-section-seconds");
    endSectionSeconds.innerHTML = `Te han sobrado ${timeLeft + 1} segundos`;
    const replayButton = document.getElementById("play-again-btn");
    restartVariables();
    replayButton.onclick = function () {
        newGame();
    };
};

const restartVariables = () => {
    points = 0;
    errors = 0;
    round = 0;
    playerName = "";
    correctAnswer = "";
    thisGameQuestions = [];
    unansweredQuestions = [];
    finished = false;
    currentQuestion = 0;
    timeLeft = 95;
    timer = "";
};

const newGame = () => {
    const letterCircles = document.getElementsByClassName("button");
    for (let i = 0; i < letterCircles.length; i++) {
        letterCircles[i].classList.remove("button--state-incorrect");
        letterCircles[i].classList.remove("button--state-correct");
    }
    document.getElementById("instructions").classList.add("hidden");
    document.getElementById("questions-area").classList.remove("hidden");
    document.querySelector(".end-section").classList.remove("flex");
    document.querySelector(".end-section").classList.add("hidden");
    document.querySelector(".interior__game-name").classList.remove("hidden");
    play();
};

let points = 0;
let errors = 0;
let thisGameQuestions = [];
let unansweredQuestions = [];
let playerName = "";
let currentQuestion = 0;
const timeLeftDisplay = document.querySelector("#seconds-left");
let timeLeft = 95;

function countdown() {
    if (timeLeft <= 0) {
        clearInterval((timeLeft = 0));
    }

    window.setInterval(function () {
        timeLeftDisplay.innerHTML = timeLeft;
        timeLeft -= 1;
    }, 1000);
}

function play() {
    let userName = document.getElementById("name");
    countdown();
    playerName = userName.value;
    userName.value = "";
    document.getElementById("instructions").style.display = "none";
    document.getElementById("questions-area").style.display = "";
    pasapalabraGame(thisGameQuestions);
}

let playButton = document.getElementById("play-btn");
playButton.onclick = function () {
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
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
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
const generateThisGameQuestions = () => {
    for (let i = 0; i < alphabet.length; i++) {
        generateRandomQuestion(alphabet[i]);
    }
};

generateThisGameQuestions();

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

//Normalizes the introduced word
const normalize = (word) => {
    let normalizedWord = word
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
    return normalizedWord;
};

let pasapalabra = (array) => {
    if (currentQuestion < array.length - 1) {
        currentQuestion++;
        pasapalabraGame(array);
    } else {
        currentQuestion = 0;
        unansweredQuestions = thisGameQuestions.filter(
            (question) => question.status === 0
        );
        if (unansweredQuestions.length > 0) {
            pasapalabraGame(unansweredQuestions);
        }
    }
};

let checkAnswer = (correctAnswer, array) => {
    let userAnswer = document.getElementById("user-answer");
    let btn = document.getElementById(array[currentQuestion].letter);
    if (normalize(userAnswer.value) !== correctAnswer) {
        btn.classList.add("button--state-incorrect");
        console.log(`Incorrecto! La respuesta correcta es ${correctAnswer}`);
        thisGameQuestions[currentQuestion].status = 2;
        errors++;
    } else if (normalize(userAnswer.value) === correctAnswer) {
        btn.classList.add("button--state-correct");
        console.log("Correcto!");
        thisGameQuestions[currentQuestion].status = 1;
        points++;
    }
    userAnswer.value = "";
    document.getElementById("points-btn").innerHTML = points;
    if (currentQuestion < array.length - 1) {
        currentQuestion++;
        pasapalabraGame(array);
    } else {
        currentQuestion = 0;
        unansweredQuestions = thisGameQuestions.filter(
            (question) => question.status === 0
        );
        if (unansweredQuestions.length > 0) {
            pasapalabraGame(unansweredQuestions);
        }
    }
};

//Executes the game with the introduced array
const pasapalabraGame = (array) => {
    let firstPart = array[currentQuestion].question.split(".")[0];
    let secondPart = array[currentQuestion].question.split(".")[1].trim();
    document.getElementById("letter-text").innerText = `${firstPart}:`;
    document.getElementById("question").innerText = secondPart;
    let correctAnswer = normalize(array[currentQuestion].answer);
    let btnAnswer = document.getElementById("answer-btn");
    btnAnswer.onclick = function () {
        checkAnswer(correctAnswer, array);
    };
    let btnPasapalabra = document.getElementById("pasapalabra-btn");
    btnPasapalabra.onclick = function () {
        pasapalabra(array);
    };
};

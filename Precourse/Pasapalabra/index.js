//Global Scope Variables
let points = 0;
let rounds = 0;
let errors = 0;
let finishedAllGame = true;
let finished = false;
let thisGameQuestions = [];
let unansweredQuestions = [];

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

let userName = prompt("Cuál es tu nombre?");

// Función que genera una pregunta aleatoria de cada letra
const generateRandomQuestion = (letter) => {
    let letterArray = questions.filter((question) => {
        return question.letter === letter;
    });
    let index = Math.floor(Math.random() * 3);
    thisGameQuestions.push(letterArray[index]);
};

//Genera el array con las preguntas para la partida
const generateThisGameQuestions = () => {
    for (let i = 0; i < alphabet.length; i++) {
        generateRandomQuestion(alphabet[i]);
    }
};

generateThisGameQuestions();

//Pregunta al usuario si quiere jugar de nuevo
const wantToReplay = () => {
    if (window.confirm("Quieres volver a jugar?")) {
        pasapalabraGame();
    }
};

//Normaliza la palabra introducida y la convierte en minúsculas y le elimina acentos y caracteres extraños
const normalize = (word) => {
    let normalizedWord = word
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
    return normalizedWord;
};

const nextTurn = () => {
    for (let i = 0; i < unansweredQuestions.length; i++) {
        let userAnswer = prompt(unansweredQuestions[i].question);
        let correctAnswer = normalize(unansweredQuestions[i].answer);
        if (userAnswer !== null) {
            userAnswer = normalize(userAnswer);
        }
        switch (userAnswer) {
            case null:
            case "END":
                finished = true;
                finishedAllGame = false;
                break;
            case "pasapalabra":
            case "":
                console.log("Pasapalabra!");
                rounds++;
                break;
            default:
                if (userAnswer !== correctAnswer) {
                    console.log(
                        `Incorrecto! La respuesta correcta es ${unansweredQuestions[i].answer}`
                    );
                    unansweredQuestions[i].status = 2;
                    errors++;
                    rounds++;
                } else if (userAnswer === correctAnswer) {
                    console.log("Correcto!");
                    unansweredQuestions[i].status = 1;
                    points++;
                    rounds++;
                }
        }
    }
    unansweredQuestions = unansweredQuestions.filter(
        (question) => question.status === 0
    );
};

const pasapalabraGame = () => {
    for (let i = 0; i < thisGameQuestions.length && !finished; i++) {
        let userAnswer = prompt(thisGameQuestions[i].question);
        let correctAnswer = normalize(thisGameQuestions[i].answer);
        if (userAnswer !== null) {
            userAnswer = normalize(userAnswer);
        }
        switch (userAnswer) {
            case null:
            case "END":
                finished = true;
                finishedAllGame = false;
                break;
            case "pasapalabra":
            case "":
                console.log("Pasapalabra!");
                rounds++;
                break;
            default:
                if (userAnswer !== correctAnswer) {
                    console.log(
                        `Incorrecto! La respuesta correcta es ${thisGameQuestions[i].answer}`
                    );
                    thisGameQuestions[i].status = 2;
                    errors++;
                    rounds++;
                } else if (userAnswer === correctAnswer) {
                    console.log("Correcto!");
                    thisGameQuestions[i].status = 1;
                    points++;
                    rounds++;
                }
        }
    }
    if (finishedAllGame) {
        do {
            alert("Empezamos de nuevo el rosco!");
            unansweredQuestions = thisGameQuestions.filter(
                (question) => question.status === 0
            );
            nextTurn();
        } while (unansweredQuestions.length > 0);
        console.log(
            `Juego terminado. Has acertado ${points} de las preguntas y has cometido ${errors} errores.`
        );
        questionsArray = [];
        points = 0;
        rounds = 0;
        alert("Hasta pronto!");
    } else {
        console.log(`Has acertado ${points} preguntas`);
        questionsArray = [];
        points = 0;
        rounds = 0;
        alert("Hasta pronto!");
    }
};

//Función que ejecuta el comienzo del juego
const startGame = () => {
    if (window.confirm("Preparado para empezar la partida?")) {
        pasapalabraGame();
    } else {
        alert("Hasta pronto!");
    }
};

startGame();

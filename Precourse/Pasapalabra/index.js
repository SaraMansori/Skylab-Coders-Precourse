//Global Scope Variables
let points = 0;
let rounds = 0;
let errors = 0;
let exitedGame = false;
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

//Pregunta al usuario si quiere jugar de nuevo
const wantToReplay = () => {
    if (window.confirm("Quieres volver a jugar?")) {
        points = 0;
        errors = 0;
        rounds = 0;
        finished = false;
        exitedGame = false;
        thisGameQuestions = [];
        unansweredQuestions = [];
        generateThisGameQuestions();
        pasapalabraGame(thisGameQuestions);
    }
};

//Normaliza la palabra introducida y la convierte en minúsculas y le elimina acentos y caracteres extraños
const normalize = (word) => {
    let normalizedWord = word
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
    return normalizedWord;
};

//Ejecuta el juego con el array introducido (así se puede utilizar para el juego principal y las rondas consecutivas con las preguntas sin contestar)
const pasapalabraGame = (array) => {
    for (let i = 0; i < array.length && !finished; i++) {
        let userAnswer = prompt(array[i].question);
        let correctAnswer = normalize(array[i].answer);
        if (userAnswer !== null) {
            userAnswer = normalize(userAnswer);
        }
        switch (userAnswer) {
            case null:
            case "END":
                finished = true;
                exitedGame = true;
                break;
            case "pasapalabra":
            case "":
                console.log("Pasapalabra!");
                break;
            default:
                if (userAnswer !== correctAnswer) {
                    console.log(
                        `Incorrecto! La respuesta correcta es ${array[i].answer}`
                    );
                    array[i].status = 2;
                    errors++;
                } else if (userAnswer === correctAnswer) {
                    console.log("Correcto!");
                    array[i].status = 1;
                    points++;
                }
        }
    }
    if (exitedGame) {
        console.log(`Has acertado ${points} preguntas`);
        wantToReplay();
        alert("Hasta pronto!");
    } else {
        unansweredQuestions = array.filter((question) => question.status === 0);
        while (unansweredQuestions.length > 0) {
            alert("Empezamos de nuevo el rosco!");
            pasapalabraGame(unansweredQuestions);
        }
        console.log(
            `Juego terminado. Has acertado ${points} de las preguntas y has cometido ${errors} errores.`
        );
        wantToReplay();
        alert("Hasta pronto!");
    }
};

//Función que ejecuta el comienzo del juego
const startGame = () => {
    if (window.confirm("Preparado para empezar la partida?")) {
        pasapalabraGame(thisGameQuestions);
    } else {
        alert("Hasta pronto!");
    }
};

let userName = prompt("Cuál es tu nombre?");
generateThisGameQuestions();
startGame();

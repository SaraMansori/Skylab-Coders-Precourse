//Global Scope Variables
let points = 0;
let rounds = 0;
let errors = 0;
let ranking = true;
let finished = false;
let thisGameQuestions = [];
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

//Siguiente ronda si hay preguntas en las que se ha pasado palabra

const pasapalabraGame = () => {
    if (window.confirm("Preparado para empezar?")) {
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
                    ranking = false;
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
        if (ranking) {
            console.log(
                `Juego terminado. Has acertado ${points} de las preguntas y has cometido ${errors} errores.`
            );
            thisGameQuestions = [];
            points = 0;
            rounds = 0;
            alert("Hasta pronto!");
        } else {
            console.log(`Has acertado ${points} preguntas`);
            thisGameQuestions = [];
            thisGameQuestions = [];
            points = 0;
            rounds = 0;
            alert("Hasta pronto!");
        }
    } else {
        alert("Hasta pronto!");
    }
};

pasapalabraGame();

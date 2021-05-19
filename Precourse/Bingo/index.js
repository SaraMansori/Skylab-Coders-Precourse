let finished = false;

//Creación de objeto con el ranking
const rankingPoints = [
    { user: "Skylab Paris", points: [8] },
    { user: "Skylab Barcelona", points: [20] },
    { user: "Skylab Madrid", points: [18] },
];

//Ordena los usuarios del ranking de mayor a menor puntuación y lo muestra por consola
rankingPoints.sort((a, b) => {
    return b.points - a.points;
});
console.log(`Ranking:
1. ${rankingPoints[0].user}: ${rankingPoints[0].points} points
2. ${rankingPoints[1].user}: ${rankingPoints[1].points} points
1. ${rankingPoints[2].user}: ${rankingPoints[2].points} points`);

//Función que genera los números del juego del 1 al 90
function listOfNumbers() {
    let randomNumbers = [];
    while (randomNumbers.length < 90) {
        let n = Math.floor(Math.random() * 90) + 1;
        if (randomNumbers.indexOf(n) === -1) {
            randomNumbers.push(n);
        }
    }
    allNumbers = randomNumbers;
}

// Constructor de columnas
function columns(c0, c1, c2, c3, c4) {
    this.column0 = c0;
    this.column1 = c1;
    this.column2 = c2;
    this.column3 = c3;
    this.column4 = c4;
}

// Función que genera el cartón a través de pasarle datos al constructor
function row(r0, r1, r2) {
    let row0 = new columns(r0[0], r0[1], r0[2], r0[3], r0[4]);
    let row1 = new columns(r1[0], r1[1], r1[2], r1[3], r1[4]);
    let row2 = new columns(r2[0], r2[1], r2[2], r2[3], r2[4]);
    console.table([row0, row1, row2]);
}

//Función que genera los números del cartón
const cardboardNumbers = () => {
    let auxArray = [];
    while (auxArray.length < 15) {
        let r = Math.floor(Math.random() * 90) + 1;
        if (auxArray.indexOf(r) === -1) {
            auxArray.push(r);
        }
    }
    cardboard = auxArray;
};

//Creación del cartón
const bingoCardBoard = (cardboardArray) => {
    console.clear();
    auxArray = cardboardArray;
    let r0 = auxArray.slice(0, 5);
    let r1 = auxArray.slice(5, 10);
    let r2 = auxArray.slice(10);
    row(r0, r1, r2);
};

//Variable que almacena los números que ya han sido escogidos
let numbersShown = [];

//En caso de que se confirme continuar al siguiente turno, se asigna el número de newNumber, se ejecuta la función checkNumber() y se muestra el carón actualizado
const nextTurn = (allNumbers, cardboardNumbers) => {
    if (window.confirm("Next turn?")) {
        let number = newNumber(allNumbers);
        alert(number);
        cardboardNumbers = checkNumber(number, cardboardNumbers);
        bingoCardBoard(cardboardNumbers);
        numbersShown.push(number);
    } else {
        alert("Bye!");
        finished = true;
    }
};

//Genera un índice aleatorio para escoger un número dentro del array, lo elimina del array y lo devuelve la función como variable number
const newNumber = (array) => {
    let index = Math.floor(Math.random() * array.length);
    let number = array[index];
    array.splice(index, 1);
    return number;
};

//Evalúa si el número aleatorio está incluido en el cartón, y en caso afirmativo, lo transforma en una X
const checkNumber = (number, array) => {
    if (array.includes(number)) {
        let index = array.indexOf(number);
        array[index] = "X";
        return array;
    } else {
        return array;
    }
};

//Comprueba que se haya hecho línea horizontal y vertical
const checkIfLine = () => {
    if (
        (cardboard[0] === "X" &&
            cardboard[1] === "X" &&
            cardboard[2] === "X" &&
            cardboard[3] === "X" &&
            cardboard[4] === "X") ||
        (cardboard[0] === "X" &&
            cardboard[5] === "X" &&
            cardboard[10] === "X") ||
        (cardboard[1] === "X" &&
            cardboard[6] === "X" &&
            cardboard[11] === "X") ||
        (cardboard[2] === "X" &&
            cardboard[7] === "X" &&
            cardboard[12] === "X") ||
        (cardboard[3] === "X" &&
            cardboard[8] === "X" &&
            cardboard[13] === "X") ||
        (cardboard[4] === "X" && cardboard[9] === "X" && cardboard[14] === "X")
    ) {
        line = true;
        alert(`LINE!`);
    }
};

//Comprueba que se haya hecho bingo
const checkIfBingo = () => {
    if (cardboard.every((val) => val === "X")) {
        bingo = true;
        alert(`BINGO!`);
        finished = true;
        console.log(`Thank you for playing ${userName}! Your puntuation is ${points}.
You completed the game in ${rounds} rounds.`);
    }
};

//Declaración de variables globales
let allNumbers = "";
let cardboard = "";
let points = 180;
let rounds = 1;
line = false;
bingo = false;
cardboardNumbers();
listOfNumbers();

const userName = prompt("Introduce your name", "Your Name");

// // Programa principal
const bingoGame = () => {
    bingoCardBoard(cardboard);
    console.log(
        `The maximum score is 180. 
For each round that passes, 2 points will be substracted from the score`
    );
    if (window.confirm("Do you want to play with this cardboard?")) {
        while (allNumbers.length > 0 && !finished && !bingo) {
            nextTurn(allNumbers, cardboard);
            if (!line) {
                checkIfLine();
            }
            rounds++;
            points -= 2;
            console.log(`Current points: ${points}`);
            checkIfBingo();
        }
        if (finished || bingo) {
            rounds = 1;
            points = 0;
            cardboardNumbers();
            if (window.confirm("Want to play again?")) {
                finished = false;
                bingo = false;
                line = false;
                points = 180;
                listOfNumbers();
                bingoGame();
            } else {
                alert("Bye!");
            }
        }
    } else {
        cardboardNumbers();
        bingoGame();
    }
};

bingoGame();
console.log(allNumbers);

let finished = false;
let allNumbers = listOfNumbers();

//Función que genera los números del juego del 1 al 90

function listOfNumbers() {
    let randomNumbers = [];
    while (randomNumbers.length < 90) {
        let n = Math.floor(Math.random() * 90) + 1;
        if (randomNumbers.indexOf(n) === -1) {
            randomNumbers.push(n);
        }
    }
    return randomNumbers;
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
    // console.clear();
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
    return auxArray;
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

//En caso de que se confirme continuar al siguiente turno, se asigna el número de newNumber, se ejecuta la función checkNumber() y se muestra el carón actualizado
const nextTurn = (allNumbers, cardboardNumbers) => {
    if (window.confirm("Next turn?")) {
        let number = newNumber(allNumbers);
        alert(number);
        cardboardNumbers = checkNumber(number, cardboardNumbers);
        bingoCardBoard(cardboardNumbers);
    } else {
        alert("Bye!");
        finished = true;
    }
};

//Genera un índice aleatorio para escoger un número dentro del array, lo elimina del array y lo devuelve la función como variable number
const newNumber = (array) => {
    let index = Math.floor(Math.random() * array.length) + 1;
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

let cardboard = cardboardNumbers();

// // Programa principal
const bingo = (numbers, cardboard) => {
    const userName = prompt("Introduce your name", "Your Name");
    bingoCardBoard(cardboard);
    while (numbers.length > 0 && !finished) {
        nextTurn(numbers, cardboard);
    }
};

bingo(allNumbers, cardboard);

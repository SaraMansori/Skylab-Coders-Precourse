//Función que genera los números del juego del 1 al 90
const listOfNumbers = () => {
    let randomNumbers = [];
    while (randomNumbers.length < 90) {
        let n = Math.floor(Math.random() * 90) + 1;
        if (randomNumbers.indexOf(n) === -1) {
            randomNumbers.push(n);
        }
    }
    console.log(randomNumbers);
};

function columns(c0, c1, c2, c3, c4) {
    this.column0 = c0;
    this.column1 = c1;
    this.column2 = c2;
    this.column3 = c3;
    this.column4 = c4;
}

// Función que genera el cartón
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
const bingoCardBoard = () => {
    auxArray = cardboardNumbers();
    console.log(auxArray);
    let r0 = auxArray.slice(0, 5);
    let r1 = auxArray.slice(5, 10);
    let r2 = auxArray.slice(10);
    row(r0, r1, r2);
};

bingoCardBoard();

// const bingo = () => {
//     // const userName = prompt("Introduce your name", "Your Name");
//     const auxArray = [];
//     const objects = {};

//     function RandomNumber(number, matched) {
//         this.number = number;
//         this.matched = matched;
//     }

//     const testObject = new RandomNumber(1, false);
//     const testObject2 = new RandomNumber(3, false);
//     console.log(testObject);

// Genera un número aleatorio del 1 al 99 y tras comprobar que no exista en auxArray, lo introduce en el mismo hasta que este tenga 15 elementos
// También introduce un objeto en el array objects con dos key values, el número (r) y el boolean del estado matched

// const bingoCard = {
//     row1: objects.slice(0, 5),
//     row2: objects.slice(5, 10),
//     row3: objects.slice(10),
// };

// console.log(auxArray);
// console.table(objects);
// console.log(objects);

// while (numbersList.length > 0 && !finished) {
//     nextTurn(numbers);
// }
// };

// const nextTurn = (array) => {
//     if (window.confirm("Next turn?")) {
//         let number = newNumber();
//         checkNumber(number, array);
//         alert(number);
//         console.table(array);
//     } else {
//         alert("Bye!");
//         finished = true;
//     }
// };

// const newNumber = () => {
//     let index = Math.floor(Math.random() * numbersList.length) + 1;
//     let number = numbersList[index];
//     numbersList.splice(index, 1);
//     return number;
// };

// const checkNumber = (number, array) => {
//     if (array.includes(number, 0)) {
//         let index = array.indexOf(number);
//         array[index] = "X";
//     }
// };

// bingo();

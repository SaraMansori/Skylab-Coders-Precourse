let numbersList = [];
let r = 0;
while (numbersList.length < 99) {
    r++;
    numbersList.push(r);
}

let finished = false;

const bingo = () => {
    const userName = prompt("Introduce your name", "Your Name");
    const numbers = [];

    while (numbers.length < 15) {
        let r = Math.floor(Math.random() * 99) + 1;
        if (numbers.indexOf(r) === -1) numbers.push(r);
    }

    console.table(numbers);

    while (numbersList.length > 0 && !finished) {
        nextTurn(numbers);
    }
};

const nextTurn = (array) => {
    if (window.confirm("Next turn?")) {
        let number = newNumber();
        checkNumber(number, array);
        alert(number);
        console.table(array);
    } else {
        alert("Bye!");
        finished = true;
    }
};

const newNumber = () => {
    let index = Math.floor(Math.random() * numbersList.length) + 1;
    let number = numbersList[index];
    numbersList.splice(index, 1);
    return number;
};

const checkNumber = (number, array) => {
    if (array.includes(number, 0)) {
        let index = array.indexOf(number);
        array[index] = "X";
    }
};

bingo();

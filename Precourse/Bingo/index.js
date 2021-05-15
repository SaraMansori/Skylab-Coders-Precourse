let numbersList = [];
let r = 0;
while (numbersList.length < 99) {
    r++;
    numbersList.push(r);
}

let finished = false;

const bingo = () => {
    // const userName = prompt("Introduce your name", "Your Name");
    const auxArray = [];
    const objects = [];

    while (auxArray.length < 15) {
        let r = Math.floor(Math.random() * 99) + 1;
        if (auxArray.indexOf(r) === -1) {
            objects.push({ number: r, matched: false });
            auxArray.push(r);
        }
    }

    const bingoCard = {
        row1: objects.slice(0, 5),
        row2: objects.slice(5, 10),
        row3: objects.slice(10),
    };
    console.log(auxArray);
    console.log(objects);
    console.log(bingoCard.row1[0].number);
    // console.table(bingoCard.number);

    // while (numbersList.length > 0 && !finished) {
    //     nextTurn(numbers);
    // }
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

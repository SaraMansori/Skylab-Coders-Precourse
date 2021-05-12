const bingo = () => {
    const userName = prompt("Introduce your name", "Your Name");
    const numbers = [];

    while (numbers.length < 15) {
        let r = Math.floor(Math.random() * 15) + 1;
        if (numbers.indexOf(r) === -1) numbers.push(r);
    }
    console.table(numbers);
};

bingo();

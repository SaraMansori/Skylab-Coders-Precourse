calculatorPro = () => {
    let newNumber;
    let numberList = [];

    //para los datos no válidos introducidos, se filtra y no se incluye en el array
    do {
        newNumber = prompt("Introduce a number or press cancel to stop");
        if (!parseInt(newNumber) && newNumber !== null) {
            alert("Invalid number introduced");
        } else if (parseInt(newNumber)) {
            numberList.push(newNumber);
        }
    } while (newNumber !== null);

    //convertir prompt a null si no se introduce ningún elemento
    for (let i = 0; i < numberList.length; i++) {
        numberList[i] = numberList[i] == "" ? null : parseInt(numberList[i]);
    }

    //función para limitar los decimales a 3
    round = (num) => {
        let number = Math.round(num * Math.pow(10, 3)) / Math.pow(10, 3);
        return number;
    };

    //inicializamos la variable result con un array vacío
    let result = [];

    //función para mostrar los resultados de forma amigable e iterando a través del array
    const showResults = () => {
        console.log("Results: ");

        for (let i = 0; i < result.length; i++) {
            console.log(result[i]);
        }
    };

    //caso: solo se introduce un valor -> devuelve raíz cuadrada del valor
    if (numberList.length === 1) {
        let squareRoot = round(Math.sqrt(prompt1));
        result.push(`The result of the square root is ${squareRoot}`);
        showResults();

        //caso: se introducen dos valores numéricos -> devuelve suma, resta, multiplicación y división
    } else {
        let sum = numberList[0];
        for (let i = 1; i < numberList.length; i++) {
            sum = round(sum + numberList[i]);
        }
        let substraction = numberList[0];
        for (let i = 1; i < numberList.length; i++) {
            substraction = round(substraction - numberList[i]);
        }

        let multiplication = numberList[0];
        for (let i = 1; i < numberList.length; i++) {
            multiplication = round(multiplication * numberList[i]);
        }

        let division = numberList[0];
        for (let i = 1; i < numberList.length; i++) {
            division = round(division / numberList[i]);
        }

        result.push(
            `The result of the sum is ${sum}`,
            `The result of the substraction is ${substraction}`,
            `The result of the multiplication is ${multiplication}`,
            `The result of the division is ${division}`
        );
    }

    showResults();
};

calculatorPro();

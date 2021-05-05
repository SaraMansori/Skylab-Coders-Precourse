// declaramos una arrow function
calculator = () => {
    //utilizamos prompt para que el usuario introduzca los dígitos
    prompt1 = prompt("Introduce first number");
    prompt2 = prompt("Introduce second number if wanted");

    //convertir prompt a null si no se introduce ningún elemento
    prompt1 = prompt1 == "" ? null : parseInt(prompt1);
    prompt2 = prompt2 == "" ? null : parseInt(prompt2);

    //función para limitar los decimales a 3
    decimals = (num) => {
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

    //condicional para determinar que se introducen números y si no son números, comunicárselo al usuario
    if (
        !Number.isInteger(prompt1) ||
        (!Number.isInteger(prompt1) && !Number.isInteger(prompt2))
    ) {
        console.log(
            "A valid number is needed. Please introduce a valid number"
        );
        //caso: solo se introduce un valor -> devuelve raíz cuadrada del valor
    } else if (Number.isInteger(prompt1) && prompt2 === null) {
        let squareRoot = decimals(Math.sqrt(prompt1));
        result.push(`The result of the square root is ${squareRoot}`);
        showResults();

        //caso: se introducen dos valores numéricos -> devuelve suma, resta, multiplicación y división
    } else if (Number.isInteger(prompt1) && Number.isInteger(prompt2)) {
        let sum = decimals(prompt1 + prompt2);
        let substraction = decimals(prompt1 - prompt2);
        let multiplication = decimals(prompt1 * prompt2);
        let division = decimals(prompt1 / prompt2);

        result.push(
            `The result of the sum is ${sum}`,
            `The result of the substraction is ${substraction}`,
            `The result of the multiplication is ${multiplication}`,
            `The result of the division is ${division}`
        );

        showResults();
    }
};

calculator();

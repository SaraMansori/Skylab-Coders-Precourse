//definir los vuelos (stopover = escala)
let flights = [
    {
        id: 0,
        origin: "Madrid",
        destination: "Barcelona",
        price: 300,
        stopover: false,
    },
    {
        id: 1,
        origin: "Madrid",
        destination: "Paris",
        price: 250,
        stopover: false,
    },
    {
        id: 2,
        origin: "Barcelona",
        destination: "Madrid",
        price: 200,
        stopover: false,
    },
    {
        id: 3,
        origin: "Lisboa",
        destination: "Madrid",
        price: 180,
        stopover: false,
    },
    {
        id: 4,
        origin: "Barcelona",
        destination: "Paris",
        price: 300,
        stopover: true,
    },
    {
        id: 5,
        origin: "Paris",
        destination: "Madrid",
        price: 80,
        stopover: true,
    },
    {
        id: 6,
        origin: "London",
        destination: "Barcelona",
        price: 100,
        stopover: true,
    },
    {
        id: 7,
        origin: "Rome",
        destination: "Barcelona",
        price: 50,
        stopover: false,
    },
    {
        id: 8,
        origin: "Madrid",
        destination: "Rome",
        price: 90,
        stopover: false,
    },
    {
        id: 9,
        origin: "Barcelona",
        destination: "London",
        price: 270,
        stopover: true,
    },
];

// //función para asignar ids en base al índice del elemento
// const idAssign = () => {
//     flights.forEach((e) => {
//         e.id = flights.indexOf(e);
//     });
// };

// //llamamos a la función para que se asignen los id
// idAssign();

//función que compruebe si el campo esté vacío, y si es así, muestre advertencia al usuario
const checkIfEmpty = (value, message) => {
    while (value === "") {
        alert("Please, insert a value to continue");
        value = prompt(message);
    }
    if (value === null) {
        alert("Bye!");
    }
};

//función para hacer la primera letra de parámetro n mayúscula
const capitalize = (n) => {
    return n.charAt(0).toUpperCase() + n.slice(1);
};

//función para preguntar por el nombre del usuario y dar la bienvenida vía prompt
const userName = () => {
    let nameOfClient = prompt("Welcome to Skylab Airlines! What is your name?");
    if (nameOfClient === null) {
        alert("Bye!");
        return nameOfClient;
    } else {
        return capitalize(nameOfClient);
    }
};

//definimos a nivel global nameOfClient con el valor otorgado por la función userName()
nameOfClient = userName();

//función para traducir el boolean del objeto flights.stopover a un string
const hasStopover = (values) => {
    let stopover = "";
    if (values.stopover) {
        stopover = "has a stopover";
    } else {
        stopover = "has no stopover";
    }
    return stopover;
};

//función para mostrarle la información de los vuelos al usuario iterando a través del objeto
const showFlightInfo = (listOfFlights) => {
    listOfFlights.forEach((e) => {
        console.log(
            `The flight with ID ${e.id}, origin ${e.origin} and destination ${
                e.destination
            } has a price of ${e.price} Euros and ${hasStopover(e)}`
        );
    });
};

//función para mostrar coste medio de los vuelos
const averageFlightCost = () => {
    let sum = 0;

    for (let i = 0; i < flights.length; i++) {
        sum = sum + flights[i].price;
    }

    let averageCost = sum / flights.length;
    console.log(`The average cost of the flights is ${averageCost} Euros`);
};

//función para comprobar cuántos vuelos hacen escala
const stopOvers = () => {
    let stopoverCount = 0;

    for (let i = 0; i < flights.length; i++) {
        if (flights[i].stopover) {
            stopoverCount++;
        }
    }
    console.log(`A total of ${stopoverCount} flights have a stopover`);
};

//función para mostrar últimos 5 vuelos del día y añadirlos al objeto flights
const showLastFiveDestinations = () => {
    let lastFiveFlights = flights.slice(-5);

    let lastFiveDestinations = [];
    lastFiveFlights.forEach((e) => {
        lastFiveDestinations.push(e.destination);
    });

    console.log(
        `The destination of the last 5 flights of the day are the following: ${lastFiveDestinations[0]}, ${lastFiveDestinations[1]}, ${lastFiveDestinations[2]}, ${lastFiveDestinations[3]}, ${lastFiveDestinations[4]}`
    );
};

//función para obtener el rol del usuario (admin o user)
const findRole = () => {
    let role = prompt("Are you an ADMIN or an USER?");
    if (role !== null) {
        role = role.toUpperCase();
    }

    switch (role) {
        case null:
            break;
        case "":
            checkIfEmpty(role, "Are you an ADMIN or an USER?");
            break;
        default:
            alert("Please introduce a valid value (ADMIN/USER)");
            findRole();
        case "ADMIN":
        case "USER":
            return role;
    }
};

//función para introducir si el vuelo tiene escalas o no convirtiendo el input del usuario en boolean
const introduceStopover = (e) => {
    e.stopover = prompt("Stopover? Y/N");
    if (e.stopover !== null) {
        e.stopover = e.stopover.toUpperCase();
    }
    switch (e.stopover) {
        case "Y":
            e.stopover = true;
            break;
        case "N":
            e.stopover = false;
            break;
        case null:
            break;
        default:
            alert("Introduce a valid value: (Y / N)");
            introduceStopover(e);
    }
};

//función para crear un nuevo vuelo
const createFlight = () => {
    //si hay menos de 15 vuelos existentes
    if (flights.length <= 15) {
        //prompt que pregunta al usuario si quiere introducir un nuevo vuelo
        let newFlight = prompt("Want to introduce a new flight? Y/N");

        //switch con los diferentes casos posibles (Y, N, otro valor, vacío o null(cancelar))
        switch (newFlight.toUpperCase()) {
            //caso Y => se le piden los nuevos datos del nuevo vuelo (nuevo objeto) y se empuja al final del array de flights.
            case "Y":
                let newFlight = {};
                newFlight.id = flights[flights.length - 1].id + 1;
                newFlight.origin = prompt("Origin");
                newFlight.origin = capitalize(newFlight.origin);
                newFlight.destination = prompt("Destination:");
                newFlight.destination = capitalize(newFlight.destination);
                newFlight.price = parseFloat(prompt("Price:"));
                introduceStopover(newFlight);
                flights.push(newFlight);
                alert(`New flight with ID ${newFlight.id} added succesfully`);
                //Al terminar se pregunta si quiere continuar añadiendo vuelos o, si ya hay 15 vuelos, se muestra una alerta indicándolo.
                if (flights.length <= 15) {
                    createFlight();
                } else {
                    alert("Maximum number of flights reached");
                }
                break;
            case "N":
            case null:
                break;
            default:
                alert("Introduce a valid value: (Y / N)");
                createFlight();
                break;
        }
    }
};

//función para borrar un vuelo
const deleteFlight = () => {
    let deleteOrNot = prompt("Do you want to delete a flight? Y/N");
    if (deleteOrNot !== null) {
        deleteOrNot = deleteOrNot.toUpperCase();
    }

    switch (deleteOrNot) {
        case null:
            alert("Bye!");
            break;
        case "":
            checkIfEmpty(deleteOrNot, "Do you want to delete a flight? Y/N");
            break;
        case "N":
            break;
        case "Y":
            let value = prompt(
                "Insert the ID of the flight that you want to delete: "
            );

            if (value !== null && value !== "") {
                value = parseFloat(value);
            }

            switch (value) {
                case "":
                    checkIfEmpty(
                        value,
                        "Insert the ID of the flight that you want to delete: "
                    );
                    break;
                case null:
                    alert("Bye!");
                default:
                    flights = flights.filter((x) => x.id !== value);
                    console.log(`Flight with ID ${value} succesfully removed.`);
                    console.log(flights);
                    // idAssign();
                    break;
            }
    }
};

//función para buscar vuelos por precio
const searchPrice = () => {
    let searchPrice = prompt(
        "Do you want to search for a flight by price? Y/N"
    );

    if (searchPrice !== null) {
        searchPrice = searchPrice.toUpperCase();
    }

    switch (searchPrice) {
        case null:
            break;
        case "":
            checkIfEmpty(
                searchPrice,
                "Do you want to search for a flight by price? Y/N"
            );
            break;
        case "N":
            break;
        case "Y":
            let priceSearched = prompt(
                "Introduce the price that you are searching for:"
            );

            if (priceSearched !== null) {
                priceSearched = parseFloat(priceSearched);
            }

            switch (priceSearched) {
                case null:
                    break;
                case "":
                    checkIfEmpty(
                        priceSearched,
                        "Introduce the price that you are searching for:"
                    );
                    break;
                default:
                    let exactPrice = flights.filter(
                        (flight) => flight.price === priceSearched
                    );
                    let higherPrice = flights.filter(
                        (flight) => flight.price > priceSearched
                    );

                    let lowerPrice = flights.filter(
                        (flight) => flight.price < priceSearched
                    );

                    console.log(`With higher price: `);
                    higherPrice.length === 0
                        ? console.log("No flights found")
                        : showFlightInfo(higherPrice);
                    console.log(`With the exact price: \n`);
                    exactPrice.length === 0
                        ? console.log("No flights found")
                        : showFlightInfo(exactPrice);
                    console.log(`With lower price:`);
                    lowerPrice.length === 0
                        ? console.log("No flights found")
                        : showFlightInfo(lowerPrice);

                    break;
            }
            break;
        default:
            alert("Introduce a valid value: (Y / N)");
            searchPrice();
            break;
    }
};

const purchase = () => {
    purchasedFlight = prompt(
        "Introduce the ID of the flight that you want to purchase: "
    );
    switch (purchasedFlight) {
        case null:
            break;
        case "":
            checkIfEmpty(
                purchasedFlight,
                "Introduce the ID of the flight that you want to purchase: "
            );
            break;
        default:
            Number.parseInt(purchasedFlight);
            alert(
                `You purchased the flight with the ID ${purchasedFlight}.\nThank you for the purchase, come back soon!`
            );
    }
};

//función con el programa principal
const airlinesProgram = () => {
    switch (nameOfClient) {
        case null:
            break;
        case "":
            checkIfEmpty(
                nameOfClient,
                "Welcome to Skylab Airlines! What is your name?"
            );
            break;
        default:
            alert(
                `Welcome ${nameOfClient}! Please, find all of the information of the flights below`
            );
            console.log(
                `Hello ${nameOfClient}, the information regarding the flights is the following:`
            );
            showFlightInfo(flights);
            averageFlightCost();
            stopOvers();
            showLastFiveDestinations();
            switch (findRole()) {
                case "ADMIN":
                    createFlight();
                    deleteFlight();
                    alert("Bye!");
                    break;
                case "USER":
                    searchPrice();
                    purchase();
                    break;
            }
    }
};

//llamada al programa principal
airlinesProgram();

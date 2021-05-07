//definir la existencia de los vuelos (stopover = escala)

let flights = [
    {
        id: 1,
        origin: "Madrid",
        destination: "Barcelona",
        price: 150,
        stopover: false,
    },
    {
        id: 2,
        origin: "Madrid",
        destination: "Paris",
        price: 250,
        stopover: false,
    },
    {
        id: 3,
        origin: "Barcelona",
        destination: "Madrid",
        price: 200,
        stopover: false,
    },
    {
        id: 4,
        origin: "Lisboa",
        destination: "Madrid",
        price: 180,
        stopover: false,
    },
    {
        id: 5,
        origin: "Barcelona",
        destination: "Paris",
        price: 300,
        stopover: true,
    },
    {
        id: 6,
        origin: "Paris",
        destination: "Madrid",
        price: 80,
        stopover: true,
    },
    {
        id: 7,
        origin: "London",
        destination: "Barcelona",
        price: 100,
        stopover: true,
    },
    {
        id: 8,
        origin: "Rome",
        destination: "Barcelona",
        price: 50,
        stopover: false,
    },
    {
        id: 9,
        origin: "Madrid",
        destination: "Rome",
        price: 90,
        stopover: false,
    },
    {
        id: 10,
        origin: "Barcelona",
        destination: "London",
        price: 270,
        stopover: true,
    },
];

const checkIfEmpty = (value, message) => {
    while (value === "") {
        alert("Please, insert a value to continue");
        value = prompt(message);
    }
};

//preguntar por el nombre del usuario y dar la bienvenida vía prompt

const welcomeMessage = () => {
    let nameOfClient = prompt("Welcome to Skylab Airlines! What is your name?");
    if (nameOfClient === null) {
        alert("Bye!");
        return nameOfClient;
    } else {
        return nameOfClient;
    }
};

const capitalize = (n) => {
    return n.charAt(0).toUpperCase() + n.slice(1);
};

nameOfClient = capitalize(welcomeMessage());

//mostrarle la información de los vuelos al usuario
const showFlightInfo = () => {
    console.log(
        `Hello ${nameOfClient}, the information regarding the flights is the following:`
    );

    flights.forEach((e) => {
        let stopover = "";
        if (e.stopover) {
            stopover = "has a stopover";
        } else {
            stopover = "has no stopover";
        }
        console.log(
            `The flight with origin ${e.origin} and destination ${e.destination} has a price of ${e.price} Euros and ${stopover}`
        );
    });
};
// console.log(nameOfClient);

//mostrar coste medio de los vuelos

const averageFlightCost = () => {
    let sum = 0;

    for (let i = 0; i < flights.length; i++) {
        sum = sum + flights[i].price;
    }

    let averageCost = sum / flights.length;
    console.log(`The average cost of the flights is ${averageCost} Euros`);
};

//cuántos vuelos hacen escala
const stopOvers = () => {
    let stopoverCount = 0;

    for (let i = 0; i < flights.length; i++) {
        if (flights[i].stopover) {
            stopoverCount++;
        }
    }
    console.log(`A total of ${stopoverCount} flights have a stopover`);
};

//mostrar últimos 5 vuelos del día
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

const findRole = () => {
    const role = prompt("Are you an ADMIN or an USER?");
    if (role == !null) {
        role = role.toUpperCase();
    }
    switch (role) {
        case "ADMIN":
            console.log("You are an admin");
            createFlight();
            break;
        case "USER":
            console.log("You are an user");
            break;
        case null:
            alert("Bye!");
            break;
        case "":
            checkIfEmpty(role, "Are you an ADMIN or an USER?");
            break;
        default:
            alert("Plase introduce a valid value (ADMIN/USER)");
            findRole();
    }
};

const createFlight = () => {
    //si hay menos de 15 vuelos existentes
    if (flights.length <= 15) {
        //prompt que pregunta al usuario si quiere introducir un nuevo vuelo
        let newFlight = prompt("Want to introduce a new flight? Y/N");
        if (newFlight !== null) {
            //en caso de que no se de a cancelar, que convierta a mayúsculas para evitar el case sensitivity
            newFlight = newFlight.toUpperCase();
        }

        //switch con los diferentes casos posibles (Y, N, otro valor, vacío o null(cancelar))
        switch (newFlight) {
            //caso Y => se le piden los nuevos datos del nuevo vuelo (nuevo objeto) y se empuja al final del array de flights.
            case "Y":
                let newFlight = {};
                newFlight.id = flights[flights.length - 1].id + 1;
                val = prompt(message);
                checkIfEmpty(newFlight.origin, "Origin:");

                newFlight.destination = prompt("Destination:");
                newFlight.price = prompt("Price:");
                newFlight.price = parseInt(newFlight.price);
                const introduceStopover = () => {
                    newFlight.stopover = prompt("Stopover? Y/N").toUpperCase;
                    switch (newFlight.stopover) {
                        case "Y":
                            newFlight.stopover = true;
                            break;
                        case "N":
                            newFlight.stopover = false;
                            break;
                        default:
                            alert("Introduce a valid value: (Y / N)");
                            introduceStopover();
                    }
                };
                flights.push(newFlight);
                console.log(flights);
                //Al terminar se pregunta si quiere continuar añadiendo vuelos o, si ya hay 15 vuelos, se muestra una alerta indicándolo.
                if (flights.length <= 15) {
                    createFlight();
                } else {
                    alert("Maximum number of flights reached");
                }
                break;
            case "N":
                alert("Bye!");
                break;
            case null:
                alert("Bye!");
                break;
            default:
                alert("Introduce a valid value: (Y / N)");
                createFlight();
                break;
        }
    }
};

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
            showFlightInfo();
            averageFlightCost();
            stopOvers();
            showLastFiveDestinations();
            findRole();
            break;
    }
};

airlinesProgram();

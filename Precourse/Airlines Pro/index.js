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

//preguntar por el nombre del usuario y dar la bienvenida vía prompt\

const capitalize = (n) => {
    return n.charAt(0).toUpperCase() + n.slice(1);
};

const welcomeMessage = () => {
    let nameOfClient = prompt("Welcome to Skylab Airlines! What is your name?");
    if (nameOfClient === null) {
        alert("Bye!");
        return nameOfClient;
    } else {
        return capitalize(nameOfClient);
    }
};

nameOfClient = welcomeMessage();

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
    let role = prompt("Are you an ADMIN or an USER?");
    if (role !== null) {
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

const introduceStopover = (e) => {
    e.stopover = prompt("Stopover? Y/N").toUpperCase();
    if (e.stopover !== null) {
        return (e.stopover = e.stopover.toUpperCase());
    }
    switch (e.stopover) {
        case "Y":
            e.stopover = true;
            break;
        case "N":
            e.stopover = false;
            break;
        case null:
            alert("Bye!");
            break;
        default:
            alert("Introduce a valid value: (Y / N)");
            introduceStopover();
    }
};

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
                newFlight.destination = prompt("Destination:");
                newFlight.price = parseInt(prompt("Price:"));
                introduceStopover(newFlight);
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

const deleteFlight = (value) => {
    for (let i = 0; i < flights.length; i++) {
        console.log(flights[i].id);
        if (flights[i].id === parseInt(value - 1)) {
            console.log("remove");
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
    console.log(flights);
};

airlinesProgram();

deleteFlight(1);

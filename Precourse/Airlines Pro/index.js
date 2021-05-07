//definir la existencia de los vuelos (stopover = escala)

let flights = [
    {
        origin: "Madrid",
        destination: "Barcelona",
        price: 150,
        stopover: false,
    },
    { origin: "Madrid", destination: "Paris", price: 250, stopover: false },
    {
        origin: "Barcelona",
        destination: "Madrid",
        price: 200,
        stopover: false,
    },
    { origin: "Lisboa", destination: "Madrid", price: 180, stopover: false },
    {
        origin: "Barcelona",
        destination: "Paris",
        price: 300,
        stopover: true,
    },
    { origin: "Paris", destination: "Madrid", price: 80, stopover: true },
    {
        origin: "London",
        destination: "Barcelona",
        price: 100,
        stopover: true,
    },
    { origin: "Rome", destination: "Barcelona", price: 50, stopover: false },
    { origin: "Madrid", destination: "Rome", price: 90, stopover: false },
    {
        origin: "Barcelona",
        destination: "London",
        price: 270,
        stopover: true,
    },
];

//preguntar por el nombre del usuario y dar la bienvenida vía prompt

const welcomeMessage = () => {
    let nameOfClient = prompt("Welcome to Skylab Airlines! What is your name?");
    alert(
        `Welcome ${nameOfClient}! Please, find all of the information of the flights below`
    );
    return nameOfClient;
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

showFlightInfo();

//mostrar coste medio de los vuelos

const averageFlightCost = () => {
    let sum = 0;

    for (let i = 0; i < flights.length; i++) {
        sum = sum + flights[i].price;
    }

    let averageCost = sum / flights.length;
    console.log(`The average cost of the flights is ${averageCost} Euros`);
};

averageFlightCost();

//cuántos vuelos hacen escala

let stopoverCount = 0;

for (let i = 0; i < flights.length; i++) {
    if (flights[i].stopover) {
        stopoverCount++;
    }
}
console.log(`A total of ${stopoverCount} flights have a stopover`);

//mostrar últimos 5 vuelos del día

const showLastFiveDestinations = () => {
    let lastFiveFlights = flights.slice(-5);

    let lastFiveDestinations = [];
    lastFiveFlights.forEach((e) => {
        lastFiveDestinations.push(e.destination);
    });

    console.log(
        `The destination of the last 5 flights of the day are the following: ${lastFiveDestinations}`
    );
};

showLastFiveDestinations();

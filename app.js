
const express = require('express');
const app = express();
const cors = require('cors');

const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const stock = require("./socket-simulation.js");
const fetch = require('node-fetch');


app.use(cors());

io.origins(['https://me.linneaolofsson.me:443', 'http://localhost:3000'])


const baseURL = "http://localhost:1337/marketplace/";
// const baseURL = "https://me-api.linneaolofsson.me/marketplace/";


// let princessTarta = {
//     name: "Princesstårta",
//     rate: 1.002,
//     variance: 1,
//     startingPoint: 20,
// };
//
// let mandelKubb = {
//     name: "Mandel kubb",
//     rate: 1.001,
//     variance: 0.4,
//     startingPoint: 20,
// };

let cakes;
//make different items have different startingpoints?

fetch(baseURL)
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        // let cakes = data;
        data.forEach((item, i) => {
            item.startingPoint = 25;

        cakes = data;

        return cakes;
        });

    });

// cakes = [princessTarta, mandelKubb];

io.on('connection', function (socket) {
    console.log("Connected!");

    io.on("disconnect", function (socket) {
        console.info("Disconnected");
    });
});

//funktion som ändrar startintervallet var 5e sekund och emittar den
//Fungerar, skickar ut nya värden på cakes var femte sekund
setInterval(function() {
    cakes.map((cake) => {
        cake["startingPoint"] = stock.getPrice(cake);
        return cake;
    });

    console.log(cakes);

    io.emit("stocks", cakes);
}, 5000);

server.listen(8300);
console.log("server is listening on port 8300");

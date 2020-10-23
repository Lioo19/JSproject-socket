
const express = require('express');
const app = express();
const cors = require('cors');

const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const stock = require("./socket-simulation.js");
const fetch = require('node-fetch');


app.use(cors());

io.origins(['https://project.linneaolofsson.me:443', 'http://localhost:3000'])


// const baseURL = "http://localhost:1337/marketplace/all";
const baseURL = "https://project-api.linneaolofsson.me/marketplace/";

let allObjects;
//make different items have different startingpoints?

fetch(baseURL)
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        // let allObjects = data;
        data.forEach((item, i) => {
            item.startingPoint = 25;

        allObjects = data;

        return allObjects;
        });
});


io.on('connection', function (socket) {
        console.info("Connected");

    io.on("disconnect", function (socket) {
        console.info("Disconnected");
    });
});

//funktion som ändrar startintervallet var 5e sekund och emittar den
//Fungerar, skickar ut nya värden på allObjects var femte sekund
setInterval(function() {
    allObjects.map((object) => {
        object["startingPoint"] = stock.getPrice(object);
        return object;
    });

    io.emit("stocks", allObjects);
}, 5000);


server.listen(8400);
console.log("server is listening on port 8400");

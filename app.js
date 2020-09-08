const express = require ('express');
const appServer = express();

const bodyParser = require('body-parser');

const myGame = require ('./game');
const uuid = require("uuid");
appServer.use(express.json());

let games = [];

appServer.listen (3000, ()=>{
    console.log('SERVER IS RUNNING ON PORT 3000');
});

appServer.get ('/',
 (req, res) => {
 res.send ('MAIN PAGE');
});

appServer.get ('/game', (req, res)=>{
    res.json (myGame);
});


appServer.post("/addgame", (req,res) =>{
    
    const {titulo,estudio,año,descripcion,edad_minima} = req.body;


    let newGame = {
        idUser: uuid.v4(),
        titulo,
        estudio,
        año,
        descripcion,
        edad_minima
    }
    
    games.push(newGame);
});

appServer.get("/gamelist", (req,res) =>{

    games.forEach(function(element, index, array) {
        console.log(element, index);
    })
});


const express = require('express');

const app = express();
 
require("dotenv").config();
//servir contenido estatico

app.use(express.static("public"));


app.get('/generic', function (req, res) {

    res.sendFile( __dirname + '/Public/generic.html');

});

app.get('/elements',function (req, res) {
    

    res.sendFile(__dirname + "/Public/elements.html");

});


app.get('*', function (req, res) {

    res.send('PAGINA NO ENCONTRADA');

});





app.listen(process.env.PORT);

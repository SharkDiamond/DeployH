
const express = require('express');

const app = express();
 
require("dotenv").config();
//servir contenido estatico

app.use(express.static("public"));


app.get('*', function (req, res) {


    res.sendFile(__dirname + "/Public/index.html");

    //res.end();

});

app.listen(process.env.PORT);

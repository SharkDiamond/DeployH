
const express = require('express');

const app = express();
 
require("dotenv").config();
//servir contenido estatico

app.use(express.static("public"));




app.get('/Contacto', function (req, res) {

    //res.send('PAGINA NO ENCONTRADA');
    res.redirect('http://localhost:8081/Contacto');
    
    res.end();
});




app.get('*', function (req, res) {

    //res.send('PAGINA NO ENCONTRADA');
    res.redirect('http://localhost:8081/');

    res.end();
});





app.listen(process.env.PORT);

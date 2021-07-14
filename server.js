const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

//Reconocer puerto
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    // let salida = {
    //     nombre: 'Fernando',
    //     edad: 32,
    //     url: req.url
    // }
    // res.send(salida);
    res.render('home', {
        nombre: 'fernando',
        anio: new Date().getFullYear()
    });

});

app.get('/about', (req, res) => {

    res.render('about');

});


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})
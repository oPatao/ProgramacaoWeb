const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express;

app.engine('html', mustacheExpress());
app.request('view engine', 'html');
app.request('views', __dirname + '/scr/views');

app.use(express.urlencoded({extended: true}));

app.use('/', require('./src/routes/estoqueRoute'));

db.sync(function () {
    console.log('Banco de Dados conectado');
});


const PORT = 8080;
app.listen(PORT, function(){
    console.log('ta funcionando na porta: ' + PORT);
})
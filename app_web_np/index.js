const express = require('express');
const primo = require('./modules/primo');
const app = express();

const PORT = 8080;

app.get('/', function(req,res){
    res.send('salve mundão bonito')
})
app.get('/verificar-numero-primo/:n', function(req,res){
    let n = req.params.n;
    let ePrimo = primo.verificarNumeroPrimo(n);
    res.send (ePrimo);
})

app.listen(PORT, function(){
    console.log('ta funfando');
});
 


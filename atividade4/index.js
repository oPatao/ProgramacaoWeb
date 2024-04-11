const express = require('express');
const calculadora = require('./util/calculadora.js');
const app = express();

const PORT = 8080;

app.listen(PORT, function(){
    console.log('ta funfando');
});

app.get('/', function(req,res){
    res.send('esse site é so uma calculadora');
    })

app.get('/somar/:a/:b', function(req,res){
    let a = parseFloat(req.params.a);
    let b = parseFloat(req.params.b);
    let soma ="" + calculadora.somar(a,b);
    res.send (soma);
})
app.get('/subtrair/:a/:b', function(req,res){
    let a = parseFloat(req.params.a);
    let b = parseFloat(req.params.b);
    let subtrair = "" + calculadora.subtrair(a,b);
    res.send (subtrair);
})
app.get('/multiplicar/:a/:b', function(req,res){
    let a = parseFloat(req.params.a);
    let b = parseFloat(req.params.b);
    let multiplicar = "" + calculadora.multiplicar(a,b);
    res.send (multiplicar);
})
app.get('/dividir/:a/:b', function(req,res){
    let a = parseFloat(req.params.a);
    let b = parseFloat(req.params.b);
    let dividir = "" + calculadora.dividir(a,b);
    res.send (dividir);
})



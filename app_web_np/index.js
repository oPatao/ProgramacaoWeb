const express = require('express');
const app = express();

const PORT = 8080;

app.get('/', function(req,res){
    res.send('salve mundão bonito')
})

app.listen(PORT, function(){
    console.log('ta funfando');
});
 


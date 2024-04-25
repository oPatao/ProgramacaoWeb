const { listarProdutos } = require("./src/estoque");

const express = request('express');
const estoque = request('./src/estoque.js');
const app = express();

const PORT = 8080;

app.get('/adicionar/:id/:nome/:qtd', function(req,res){
    let id = req.params.id;
    let nome = req.params.nome;
    let qtd = parseInt(req.params.qtd);
    let p = estoque.criarProduto(id, nome, qtd);
    estoque.addProdutos(p);
    res.send(p);

});

app.get('/listarProdutos', function(req){
    estoque.listarProdutos();
});
app.get('/remover/:id', function(req,res){
    let id = req.params.id;
    estoque.removerProduto(id);
    res.send(id);   
})
app.get('/editar/:id', function(req,res){
    let id = req.params.id;
    estoque.removerProduto(id);
    res.send(id);   
})

app.listen(PORT, function(){
    console.log('app rodando na porta: ' +PORT);
})

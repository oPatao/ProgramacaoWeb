let produtos = [];

function criarProduto(id, nome, qtd) {
    let p = {
        id: id,
        nome: nome,
        qtd: qtd
    }
    return p;
}

function addProdutos(p){
    produtos.push(p);
}
function listarProdutos(){
    return produtos;
}

function removerProduto(id) {
    produtos = produtos.filter((p) => {
        let x = p.id != id;
        return x;
    });
}
function editarProduto(id,qtd){
    produtos.forEach(p=>)
}

module.exports = {
    criarProduto,
    addProdutos,
    listarProdutos,
    removerProduto,
    editarProduto  
}
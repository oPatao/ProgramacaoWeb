//let nome = 'Joao';
//let cpf = 123;

let pessoa1 = {
    nome: "Joao",
    cpf: 123,
    endereco: "botafogo, RJ",
    cep: 12341239

}
let pessoa2 = {
    nome: "Pedro",
    cpf: 124
}

//console.log(`Cadastro: ${pessoa1.nome} - ${pessoa1.cpf}`);
//console.log(`Cadastro: ${pessoa2.nome} - ${pessoa2.cpf}`);

for(let key in pessoa1){
    console.log(key + ' - ' + pessoa1[key]);
}

const arr = [11, 3, 7, 9, 10, 1, 3];

for(let i = 0; i < arr.length; i++){
    console.log(i + ' - ' + arr[i]);
}

for(let key in arr){
    console.log(key + ' - ' + arr[key]);
}
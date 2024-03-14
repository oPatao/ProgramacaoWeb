let a;
let b;
let op;

function imprimirResultado(a,b){

    console.log(`o resultado da soma de ${a} e ${b} é ${a+b}`);

}

imprimirResultado(10,15);

function imprimirResultadoV2(a, b, op){
    let c;

    switch (op) {
        case '+':
            c = a+b;
            break;
        case '-':
            c = a - b;
            break;
        case '*':
            c = a * b;
            break;
        case '/':
            c = a/b;
            break;
        default:
            console.log(`sinal nao reconhecido`);
            break;
    }
    
    console.log(`o resultado da operação usando ${a} e ${b} é ${c}`);

}

imprimirResultadoV2(12, 2, '-');
imprimirResultadoV2(12, 2, '+');
imprimirResultadoV2(12, 2, '*');
imprimirResultadoV2(12, 2, '/');
imprimirResultadoV2(12, 2, 'a');
let numero;

function verificarNumeroPrimo(numero) {
    
    if (numero <= 1) {
        return false;
    }

    // 2 e 3 são primos
    if (numero <= 3) {
        return true;
    }

    // Verifica se o número é divisível por 2 ou por 3
    if (numero % 2 === 0 || numero % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= numero) {
        if (numero % i === 0 || numero % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }

    return true;
}

// Testando a função

console.log(verificarNumeroPrimo(0)); //false
console.log( verificarNumeroPrimo(1)); //false
console.log(verificarNumeroPrimo(2)); //true
console.log(verificarNumeroPrimo(3)); //true
console.log(verificarNumeroPrimo(7)); //true
console.log(verificarNumeroPrimo(83)); //true
console.log(verificarNumeroPrimo(100)); //false
console.log(verificarNumeroPrimo(991)); //true
console.log(verificarNumeroPrimo(104729)); //true
console.log(verificarNumeroPrimo(14348907)); //false

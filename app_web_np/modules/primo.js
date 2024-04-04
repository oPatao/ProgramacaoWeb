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

module.exports = {
    verificarNumeroPrimo
}
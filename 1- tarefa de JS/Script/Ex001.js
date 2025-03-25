function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        console.log(`${numero} é um número par.`);
    } else {
        console.log(`${numero} é um número ímpar.`);
    }
}

// Exemplo de uso
let numero = 7; // Altere o número para testar
verificarParOuImpar(numero);
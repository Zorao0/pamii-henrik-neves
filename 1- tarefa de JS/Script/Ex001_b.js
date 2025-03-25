function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        console.log(`${numero} é um número par.`);
    } else {
        console.log(`${numero} é um número ímpar.`);
    }
}

// Solicita um número ao usuário
let numero = parseInt(prompt("Digite um número:"));
verificarParOuImpar(numero);

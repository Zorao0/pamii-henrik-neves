function verificarNumero(numero) {
    if (numero > 0) {
        console.log(`${numero} O númro é positivo.`);
    } else if (numero < 0) {
        console.log(`${numero} O número é negativo`);
    } else {
        console.log(`${numero} O númro é zero`);
    }
}

// Exemplo de uso
let numero = parseFloat(prompt("Digite um número:"));
verificarNumero(numero);

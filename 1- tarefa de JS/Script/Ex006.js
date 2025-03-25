function inverterString(str) {
    return str.split('').reverse().join('');
}

// Pergunta ao usuário um número
const numero = prompt("Digite um número:");
console.log("Número digitado:", numero);

// Exemplo de uso
const stringOriginal = "JavaScript";
const stringInvertida = inverterString(stringOriginal);
console.log("String original:", stringOriginal);
console.log("String invertida:", stringInvertida);

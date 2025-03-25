// Função para calcular a soma de 1 até N
function calcularSoma(N) {
    let soma = 0;
    for (let i = 1; i <= N; i++) {
        soma += i;
    }
    return soma;
}

// Solicita ao usuário um número inteiro
const numero = parseInt(prompt("Digite um número inteiro positivo:"));

// Verifica se a entrada é válida
if (!isNaN(numero) && numero > 0) {
    const resultado = calcularSoma(numero);
    alert(`A soma de 1 até ${numero} é ${resultado}`);
} else {
    alert("Por favor, digite um número inteiro positivo válido.");
}

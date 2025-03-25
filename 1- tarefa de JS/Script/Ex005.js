function contarLetra(palavra, letra) {
    let contador = 0;
    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i].toLowerCase() === letra.toLowerCase()) {
            contador++;
        }
    }
    return contador;
}

// Solicita entrada do usuário
const palavra = prompt("Digite uma palavra:");
const letra = prompt("Digite a letra que deseja contar:");
console.log(`A letra '${letra}' aparece ${contarLetra(palavra, letra)} vezes na palavra '${palavra}'.`);

// Array de cidades
let cidades: string[] = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Curitiba', 'Salvador'];

// Função que lista as cidades
function listarCidades(cidades: string[]): void {
    cidades.forEach((cidade) => {
        console.log(cidade);
    });
}

// Chamando a função
listarCidades(cidades);

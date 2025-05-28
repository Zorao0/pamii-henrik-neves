// Definindo a interface Livro
interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

// Criando um objeto do tipo Livro
const meuLivro: Livro = {
    titulo: 'A Jornada do Programador',
    autor: 'João Silva',
    anoPublicacao: 2021
};

// Função para exibir as informações do livro
function exibirLivro(livro: Livro): void {
    console.log(`Título: ${livro.titulo}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Ano de Publicação: ${livro.anoPublicacao}`);
}

// Chamando a função para exibir o livro
exibirLivro(meuLivro);

//Função que retorna tipos
function saudacao(nome: string): string {
    return `Olá, ${nome}!`;
}

console.log(saudacao('Leandro'));

//Interface para objeto Usuario
interface Usuario{
    nome: string;
    idade: number;
    email?: string; //Opcional
}

//Utilizando a interfade usário fica assim:
function exibirUsuario(usuario: Usuario): void {
    console.log(`Nome: ${usuario.nome}`);
    
}
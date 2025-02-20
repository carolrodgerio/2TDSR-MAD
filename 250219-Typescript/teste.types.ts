// CRIAÇÃO DE TYPES

type Cor = "vermelho" | "azul" | "amarelo" | "verde";

let c1 : Cor;

c1 = "azul"
c1 = "amarelo"

// não faz parte do conjunto:
// c1 = "roxo"

type TipoPessoa = {nome : string, idade : number, telefone : string, cpf : string};

let p1 : TipoPessoa;
// TYPE ALIAS

type Pares = 0 | 2 | 4 | 6 | 8 | 10;
// const a : Pares = 7;
const a : Pares = 4;

type Cor = "amarelo" | "vermelho" | "verde" | "azul" | "branco" | "preto";
// const cor : Cor = "ciano"
const cor : Cor = "branco";


// NULL E UNDEFINED

type StringEspecial = string | undefined | null; // const aceita vários tipos de variáveis
const b : StringEspecial = null;
const c : StringEspecial = undefined;
const d : StringEspecial = "string";


// INTERFACE

interface Pessoa {
    nome: string
    telefone: string
};

interface Estudante extends Pessoa {
    nota?: number // interrogação: não-obrigatório
    faculdade : string
};

let est1 : Estudante = {nome: "João Silva", telefone: "(11) 99999-9999", faculdade: "FIAP"}

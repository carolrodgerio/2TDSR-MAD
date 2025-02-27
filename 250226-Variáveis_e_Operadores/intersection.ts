interface Pessoa {
    nome: string;
    telefone: string;
};

interface Estudante {
    nota: number;
    ra: string;
};

type Aluno = Pessoa & Estudante;
let aluno : Aluno = {
    nome: "João",
    telefone: "(11) 99999-9999",
    nota: 10,
    ra: "123456"
};
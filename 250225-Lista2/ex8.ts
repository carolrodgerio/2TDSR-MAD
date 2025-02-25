class Aluno {
    id: number = 123456;
    nome: string = "Carolina Estevam Rodgerio";
    ra: number = 554975;
    nascimento: string = "22/07/2000";

    estudar() {
        console.log(this.nome, " está estudando");
    }

    descansar() {
        console.log(this.nome, " está descansando");
    }
}

const carol = new Aluno();

console.log("ID: ", carol.id);
console.log("Nome: ", carol.nome);
console.log("RA: ", carol.ra);
console.log("Nascimento: ", carol.nascimento);

carol.estudar();
carol.descansar();

const porcentagem = prompt("Qual a umidade atual do ambiente?");

if (Number(porcentagem) > 60) {
    console.log("O ar está úmido");
} else if (Number(porcentagem) < 30) {
    console.log(" ar está muito seco")
} else {
    console.log("O ar está seco")
};

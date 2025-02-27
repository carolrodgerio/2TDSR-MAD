function somar(x, y) {
    return x + y;
}
function calcular(n1, n2, operacao) {
    return operacao(n1, n2);
}
var resultCalculo = calcular(10, 20, somar);
console.log("Resultado: ", resultCalculo);

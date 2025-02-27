function somar (x: number, y: number) : number {
    return x + y;
}

function dividir (x: number, y: number) : number {
    return x / y;
}

function raiz (x: number, y: number) : number {
    return x ** (1 / y);
}

function calcular (n1: number, n2: number,
    operacao: (x: number, y: number) => number
) : number {
    return operacao(n1, n2);
}

let resultCalculo = calcular(10, 20, somar)
console.log("Resultado: ", resultCalculo);
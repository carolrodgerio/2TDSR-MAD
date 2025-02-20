// ENUM

enum TamanhoCamiseta {Pequeno, Médio, Grande};

let tamanho : TamanhoCamiseta;

tamanho = TamanhoCamiseta.Pequeno;

if (tamanho > TamanhoCamiseta.Médio) {
    console.log("Esta camiseta serve em adultos");
} else {
    console.log("Esta roupa é para crianças");
}

// não é possível declarar o seguinte, pois não corresponde a nenhum dos elementos criados:
// tamanho = "Pequeno";
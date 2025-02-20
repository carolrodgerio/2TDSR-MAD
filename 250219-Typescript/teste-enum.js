// ENUM
var TamanhoCamiseta;
(function (TamanhoCamiseta) {
    TamanhoCamiseta[TamanhoCamiseta["Pequeno"] = 0] = "Pequeno";
    TamanhoCamiseta[TamanhoCamiseta["M\u00E9dio"] = 1] = "M\u00E9dio";
    TamanhoCamiseta[TamanhoCamiseta["Grande"] = 2] = "Grande";
})(TamanhoCamiseta || (TamanhoCamiseta = {}));
;
var tamanho;
tamanho = TamanhoCamiseta.Pequeno;
if (tamanho > TamanhoCamiseta.Médio) {
    console.log("Esta camiseta serve em adultos");
}
else {
    console.log("Esta roupa é para crianças");
}
// não é possível declarar o seguinte, pois não corresponde a nenhum dos elementos criados:
// tamanho = "Pequeno";

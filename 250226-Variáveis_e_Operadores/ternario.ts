interface Televisao {
    marca: string;
    polegadas: number;
    estado: boolean;
}

let tv1 = {
    marca: "Samsung",
    polegadas: 42,
    estado: true,
}

let situacao = tv1.estado == true ? "LIGADA" : "DESLIGADA";

console.log("Marca: ", tv1.marca);
console.log("Polegadas:", tv1.polegadas);
console.log("Estado: ", situacao);
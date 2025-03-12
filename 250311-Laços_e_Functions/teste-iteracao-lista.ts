const lista = ["Maçã", "Maçã Verde", "Pera", "Mamão", "Laranja", "Kiwi", "Uva", "Jaca", "Banana", "Melancia", "Tomate"];

for ( let x = 0; x <= 10; x = x + 1 ) {
    console.log(x, " - ", lista[x]);
}

/* correção prof:

for ( let x = 0; x <= 0; x += 1 ) {
    const fruta = lista[x];
    console.log(x, " - ", fruta);
}

*/

// outros tipos de for:

for ( let x in lista ) { // itera retornando o índice da lista
    console.log(x);
}


for ( let x of lista ) { // itera retornando o valor da lista
    console.log(x);
}
console.log(`Trabalhando com Condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);
const idadeComprador = 10;
const estaAcompanhada = true;
const temPassagemComprada = true;
console.log("Destinos Possíveis: ");

// if (idadeComprador >= 18) {
//     console.log("Comprador Maior de Idade");
//     listaDeDestinos.splice(1, 1); //removendo um item da lista
// } else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1, 1); //removendo item
// } else {
//     console.log("Comprador não é maior de idade");
// }

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Boa viagem!!");
    listaDeDestinos.splice(2, 1); //removendo um item da lista
} else {
    console.log("Comprador não é maior de idade");
}

console.log("Embarque:\n\n");
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa Viagem!!");
} else {
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);
console.log(`Trabalhando com Condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);
const idadeComprador = 10;
const estaAcompanhada = true;
const temPassagemComprada = true;

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
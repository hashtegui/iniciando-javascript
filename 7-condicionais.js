console.log(`Trabalhando com Condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);
const idadeComprador = 17;
const estaAcompanhada = true;
console.log("Destinos Possíveis: ");

if (idadeComprador >= 18) {
    console.log("Comprador Maior de Idade")
    listaDeDestinos.splice(1, 1); //removendo um item da lista
} else if (estaAcompanhada) {
    console.log("Comprador está acompanhado");
    listaDeDestinos.splice(1, 1); //removendo item
} else {
    console.log("Comprador não é maior de idade");
}
console.log(listaDeDestinos);
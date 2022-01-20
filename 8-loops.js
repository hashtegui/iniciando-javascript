console.log(`\nTrabalhando com Condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);
const idadeComprador = 10;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador"

console.log("\n Destinos Possiveis");

const podeComprar = (idadeComprador >= 18 || estaAcompanhada == true);

let contador = 0;

while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existe");
    } else {
        console.log("Destino não existe")
    }
    contador += 1;
}
const fruta = {
    nombre: "Fresa",
    info: {
        alg: "buena"
    }
}

const precio = {
    precio: 2.5,
    info: {
        algo: "buen precio"
    }
}

// Object.assign

/*
const n = Object.assign({},fruta,precio,{info: Object.assign(
    fruta.info, precio.info
)})

console.log(n)
*/

// spreed

const resultado = {
    ...fruta,
    ...precio,
    info: {
        ...fruta.info,
        ...precio.info
    }
}

console.log(resultado);

const frutas = ["kiwi","fresita","Mango"];
const frutasSecas = ["Coco","Mani"];

const allFruits = [
    ...frutas,
    ...frutasSecas,
    "Apio"
];

console.log(allFruits);
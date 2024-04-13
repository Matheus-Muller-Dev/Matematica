function calcularRadicais(numero, indice){
    if (indice < 0){
        return NaN;
    }

    const radical = Math.pow(numero, 1 / indice);

    return radical;
}

const numero = 25;
const indice = 3;
const radical = calcularRadicais(numero, indice);
console.log(`O radical de indice ${indice} de ${numero} é ${radical}`);
// Funcion suma que tenga de entradas dos parametros salida con la sumatoria.

const suma = (a,b) => {
    const numAEntero = a * 1000; // 0.1 * 1000 = 100
    const numBEntero = b * 1000; // 0.2 * 1000 = 200
    const result = numAEntero + numBEntero; // 100 + 200 = 300
    return result / 1000; // 300 / 1000 = 0.3
};

console.log(suma (5,3));

module.exports = {suma};
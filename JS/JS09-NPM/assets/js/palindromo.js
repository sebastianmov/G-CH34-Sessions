
const esPalindromo = (frase) => {

    // TODO realizar la implementacion, considerando Maysuculas y espacios.
    // Eliminar espacios y convertir a minúsculas para hacer la comparación sin considerar estos detalles
    frase = frase.replace(/\s/g, '').toLowerCase();

    // Verificar si la frase es igual a su inverso
    return frase === frase.split('').reverse().join('');
}

module.exports = {esPalindromo};
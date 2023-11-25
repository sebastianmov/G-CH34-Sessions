console.log('Ejercicio 2');

const numeros = [3, 5, 7, 9]
const numerosDobles = numeros.slice()

function numerosDuplicados(numero){
  console.log('Arreglo original: ' + numeros);
  return numero*2;
}

let duplicado = numerosDobles.map(numerosDuplicados);
console.log('Arreglo duplicado con map: ' + duplicado);


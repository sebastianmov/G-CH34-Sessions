console.log('Ejercicio 3');
  const numeros = [3, 5, 7, 9];

  function suma(acumulador, numero){
    return acumulador + numero;
  }

  function producto(acumulador, numero){
    return acumulador * numero;
  }

  const sumaAcumulada = numeros.reduce(suma, 0)
  const productoAcumulado = numeros.reduce(producto, 1)

console.log('La suma del arreglo de numeros es: ' + sumaAcumulada);
console.log('El producto del arreglo de numeros es: ' + productoAcumulado);

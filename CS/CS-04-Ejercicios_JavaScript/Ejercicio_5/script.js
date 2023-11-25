console.log('Ejercicio 5');

const people = ['Maria', 'Dani', 'Luis', 'Juan', 'Camila'];

console.log('1. Comando que imprime todas las personas en el arreglo:');
console.log(people);

console.log('2. Comando que elimina a Dani del arreglo:');
console.log('Persona eliminada: ' + people.splice(1,1));
console.log(people);

console.log('3. Comando que  elimina a Juan del arreglo:');
console.log('Persona eliminada: ' + people.splice(2,1));
console.log(people);

console.log('4. Comando que desplaza a Luis al principio del arreglo:');
  const index = people.indexOf('Luis');
    if (index !== -1) {
      people.splice(index, 1);
      people.unshift('Luis');
    }
console.log(people);

console.log('5. Comando que añade mi nombre al final del arreglo:');
people.splice(3,0, 'Sebastian');
console.log(people);

console.log('6. Usando un bucle, iterar el arreglo y una vez que se encuentre a Maria, cerrar el bucle:');
  for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === 'Maria') {
      break;
    }
  }

console.log('7. Comando que muestra la posición de Maria:');
console.log('Maria se encuentra en la posición: ' + people.indexOf('Maria'));

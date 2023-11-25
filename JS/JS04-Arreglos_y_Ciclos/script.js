console.log('Sesion JS04 - Arreglos y ciclos');

/*
   ========== Array ==========================
   Es un tipo de estructura de datos que se utiliza
   para almacenar una colección ordenada de elementos.
   Estos elementos pueden ser de cualquier tipo.

   Los arrays son objetos especiales con propiedades y
   métodos específicos para trabajar con datos ordenados.

*/

// Declarar un arreglo usando corchetes
const nombresCh34 = ['Misael', 'Luis', 'Meli'];

// Declarar un arreglo usando el constructor de la clase Array
const apellidosCh34 = new Array('Navarro', 'Ortega', 'Flores');

console.log(nombresCh34);
console.log(apellidosCh34);

const numCajonesEstacionamiento = new Array(4);
console.log(numCajonesEstacionamiento);
console.log(new Array(2,5,7));

// ================== Arreglos anidados ====================
// Matrices (Arreglo de dos dimensiones)
// [ [] , [] , [] ]

const equiposIntegrador = [     
   ["Misael", "Mirta" , "Jocelyn", "Jorge" , "Yaz"     , "Tony"   , "Itzel" ] ,  /* 3 de pastor*/
   ["Chino" , "Victor", "Nalle"  , "Lili"  , "Fernanda", "Cinthia" ] ,  /* Javadictos*/
   ["Gaby"  , "Charly", "Alan"   , "Sebas" , "Andrew"  , "Arlene" , "Arely"]   /* HTaMaLeros*/
];

// Imprimir al equipo de Javadictos
const javadictosPersonas = equiposIntegrador[1];
console.table(javadictosPersonas);
// Imprimir a Lili de Javadictos
const personaLili = javadictosPersonas[3];
console.log(personaLili);

// Impimir a Sebas
console.log(equiposIntegrador[2][3]);

// Imprimir a Mirta
console.log(equiposIntegrador[0][1]);

// Imprimir a Arlene
console.log(equiposIntegrador[2][5]);

console.log('\n');

// ================= Iterar un arreglo ===================
// Mostrar en consola todas las personas de los proyectos usando ciclo for
/*
   const equiposIntegrador = [     
   ["Misael", "Mirta" , "Jocelyn", "Jorge" , "Yaz"     , "Tony"   , "Itzel" ] ,
   ["Chino" , "Victor", "Nalle"  , "Lili"  , "Fernanda", "Cinthia" ] ,
   ["Gaby"  , "Charly", "Alan"   , "Sebas" , "Andrew"  , "Arlene" , "Arely"]
];
*/
 
 // Iterar sobre cada proyecto
 for (let i = 0; i < equiposIntegrador.length; i++) {
   console.log(`Personas del proyecto ${i + 1}:`);
 
   // Iterar sobre las personas dentro de cada proyecto
   for (let j = 0; j < equiposIntegrador[i].length; j++) {
     console.log(equiposIntegrador[i][j]);
   }
 
   // Salto de línea para separar proyectos en la consola
   console.log("\n");
 }

//   Usando el metodo forEach

console.log('==========forEach=========');
equiposIntegrador.forEach((fila) => console.log(fila));

// Otra manera con funcion callback fuera

function imprimirFilas( element, index, array ){
   console.log( element );
}

// equiposIntegrador.forEach( imprimirFilas );
// equiposIntegrador.forEach( function impEquipos(element, index, array){ console.log( element );});
// equiposIntegrador.forEach( function (element, index, array){ console.log( element );});
// equiposIntegrador.forEach( (element, index, array) => console.log( element ) );

equiposIntegrador.forEach( element => console.log( element ) );

// equiposIntegrador.forEach(fila => fila.forEach(columna => console.log(columna)));
equiposIntegrador.forEach(equipo => equipo.forEach(persona => console.log(persona)));

equiposIntegrador.forEach( (equipo, indiceEquipo) => {
   equipo.forEach( persona => console.log(indiceEquipo, persona) )
});

// ==================== Iterar usando For of ====================
// Se usa en elementos iterables como arreglos o strings
for(let fila of equiposIntegrador){
   for(let columna of fila){
      console.log(columna);
   }
}

const myName = "Alejandro";
for (let char of myName){
    console.log(char);
}

// ================ break y continue ==================
/*
   Consideraciones con el ciclo for:
   No es necesario indicar la expresion inicial, la evaluacion y la expresion final

   for(inicio; evaluacion; expresionFinal){
      sentencias;
   }

   break; // rompe con la iteracion en curso y finaliza el ciclo for
*/

const numbers = [3,6,8,1];
// Detener la iteracion si encontramos el numero 8

for (let number of numbers){
   console.log(number);
   if (number === 8)
   break;
}

const matrix = [[2,4,6,999], [10,6,8,9], [2,6,8,3]];
// Detener la iteracion cuando encontremos un 6, no mostrar mas numeros
// label: indicar que ciclo rompera el break

console.log('Uso de Break y label');
rompeMatriz:
for (let row of matrix){
   for(let column of row){
      console.log(column);
      if (column === 6)
      break rompeMatriz;
   }
}

// Mostrar todos los elementos excepto el 6
console.log('Imprimir excepto el 6');

for (let row of matrix){
   for(let column of row){
      if (column === 6) continue;
         console.log(column);
   }
}

const ages = [18,34,55];
 for (let index = 0; index < ages.length; index++) console.log( ages[index]);
//  prueba chiquita
let jiteracion = 0;
for( ; jiteracion <5; jiteracion++);
console.log(jiteracion);
console.log('Fin de jiteracion');

// for sin elemento internos
let x = 0;

for (   ;   ;   ){
    console.log("x: " + x);
    if( x >= 6 ) break;
    x++;
}

// =========================
let y = 0;
for ( ; ; y++){
   console.log('y: ' + y);
   if (y >= 6) break;
}

console.log(y);

// ======================== Ciclo While =========================
/*
   Crea un bucle que ejecuta una sentencia mientras la condicion especificada sea verdadera

   Sintaxis:
   while(condicion) sentencia;

   while(condicion){
      sentencias;
   }
*/

/*
let counter = 1;
while(confirm('Quieres continuar')){
   console.log(`Num. de veces que has entrado ${counter}`);
   counter++;
}
*/

const nombreMascotas = [ "Junior", "Tomy", "Fify", "Canela", "Pelusa", "Freya", "Nana", "Cuco"];
// Imprimir los nombres de las mascotas, y detenerse cuando se encuentre a "Canela"
// Resolver utilizando ciclo While

let index = 0
while(index < nombreMascotas.length){
   console.log(nombreMascotas[index]);
   if (nombreMascotas[index] === 'Canela'){
      break;
   }
   index++;
}

// =================== ciclo do-while ====================
/*
  Crea un bucle que ejecuta una sentencia hasta que la
  condición de comprobación se evalue como falsa.

  La condición se evalua después de ejecutar la sentencia.
  Esto significa que la sentencia se ejecuta por lo menos una vez.

  sintaxis:

  do {
    sentencia;
  } while( evaluación );

*/

let counter = 0;

do {
   counter++;
   console.log(`N. iteracion: ${counter}`)
} while(confirm('Deseas continuar?'));

let valor = -2;
while ( valor < 5) {
    console.log("While " + valor ); // -2... 4
    valor ++;
}

valor = 4;
do {
    console.log("Do-While " + valor ); // 4
    valor ++;
} while ( valor < 5);

/* 
   FIFO: first input, first output
   LIFO: last input, first output
*/


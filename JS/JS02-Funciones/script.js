console.log('Sesion JS02 - Funciones')

// ================ Funcion declarada ================
// (function delcaration, function statement)
/*
    Una de las caracteristicas de las funciones declaradas es que tienen hoisting (pueden ser llamadas antes de ser declaradas).
*/

multiplica(5,3); // 15

/**
 * Comentario de funcion.
 * Multiplica dos numeros e imprime en consola
 * @param {number} a valor de multiplicando 
 * @param {number} b valor de multiplicador
*/
function multiplica(a,b){
    const resultado = a * b;
    console.log(resultado);
}

function divide(dividendo,divisor){
    return dividendo / divisor;
}

console.log(divide(5,2)); // 2.5
console.log(divide(5,'2')); // 2.5
console.log(divide('5','2')); // 2.5
console.log(divide('5 0','2')); // NaN

// Funcion expresada
// (function expressions)
/*
    Funciones que son declaradas dentro de la asignacion de una variable.
    Estas funciones pueden ser anonimas (no tienen nombre).
    Las funciones expresadas no tienen hoisting, porque no se carga en memoria hasta que se utilice.
*/

const sum = function sumaDeEnteros(a, b){
    return a + b;
};

console.log(sum(6, 20)); // 26

const potencia = function (base, exponente){
    return base ** exponente;
};

console.log(potencia(3,3)); // 27


// Funcion autoinvocada
// (self-incoking function)
/*
Se autoinvocan, no necesitan un llamado.
Se pueden definir con funciones anonimas.
*/

(function setUp(){
    console.log('Me autoinvoco');
    console.log('Puedo servirte como inicializador de tu programa');
})();

// =================== Funcion Flecha ================
// (arrow function)
/*
    Son similares a las funciones expresadas, pero:
    - No requieren la palabra function.
    - Si tiene una sola instruccion, no requiere las llaves {}
    - Si la instruccion es el mismo retorno no requiere la palabra 'return'.
*/

const power = (base,exponent) => base ** exponent; // funcion flecha
console.log(power(2,3));

// Area de rectangulo con funcion expresada.

const areaRec = function (base, altura){
    return (base * altura);
}

console.log(areaRec(10,6));

// Area de rectangulo con arrow function

const area = (base,height) => base * height;
console.log(area(5,4));

const saludo = persona => `Hola ${persona}`;
console.log(saludo('Peso Pluma'));

const ellaBailaSola = () => 'Compa, que le parece esa morra?';
console.log(ellaBailaSola());

// ================ Parametros Default ==================

const saludoGeneration = (persona = 'amigo', cohorte = 'clase') => `Hola ${persona}, que gusto que estes en la ${cohorte}`;
console.log(saludoGeneration('Joseph', 'CH-34'));
console.log(saludoGeneration());
console.log(saludoGeneration('Chino'));
console.log(saludoGeneration('','CH-34'));

// ================= Rest Parameters ==================
/*
    Nos permite representar una serie de valores indefinidos en los argumentos.
    Estos se presentan como un array.
    El rest parameter debe estar al final de la lista de parametros.
*/

const sumatoriaVariosNumeros = (a, b, ...manyMoreArgs) => {
    let suma = a + b;

   /*for (let index = 0; index < manyMoreArgs.length; index ++){
        suma = suma + manyMoreArgs[index]; // suma += manyMoreArgs[index];
    }*/

    suma += manyMoreArgs.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return suma;
}

console.log(`Sumatoria de 2 numeros: 4 + 6 = ${sumatoriaVariosNumeros(4,6)}`);
console.log(`Sumatoria de 3 numeros: 4 + 6 + 8 = ${sumatoriaVariosNumeros(4,6,8)}`);
console.log(`Sumatoria de 4 numeros: 4 + 6 + 8 + 10 = ${sumatoriaVariosNumeros(4, 6, 8, 10)}`);

// ===================== Funciones de Callback =====================
/*
    Funcion que se pasa a otra funcion como argumento, para luego invocarla para complementar algun tipo de rutina o accion.

    Realizar 3 funciones.
        1 funcion que reciba un mensaje e imprima en consola
        1 funcion que reciba un mensaje e imprima en alert
        1 función que reciba un mensaje e imprima en el DOM, en H2
*/

/*
function imprimirMensaje(mensaje) {
    console.log(mensaje);
  }

  imprimirMensaje("Hola, este es un mensaje de ejemplo.");

function mostrarAlerta(mensaje) {
    alert(mensaje);
  }

  mostrarAlerta("Hola, este es un mensaje de alerta.");

function imprimirEnDOM(mensaje) {
    // Crea un nuevo elemento h2
    const nuevoH2 = document.createElement('h2');
  
    // Crea un nodo de texto con el mensaje
    const texto = document.createTextNode(mensaje);
  
    // Agrega el nodo de texto como hijo del elemento h2
    nuevoH2.appendChild(texto);
  
    // Agrega el elemento h2 al cuerpo del documento (puedes ajustar el destino según tus necesidades)
    document.body.appendChild(nuevoH2);
  }
  
  imprimirEnDOM("Hola, este es un mensaje en el DOM en un elemento h2.");
*/

// ------------------------------------
const printToConsole = message => console.log(message);
const printToAlert = message => alert(message);
const printToH2 = message => {
    const refH2 = getH2Message();
    refH2.innerHTML = message;
};
const getH2Message = () => document.getElementById('message');

// Funcion que obtenga un mensaje e imprima en consola o alert o DOM o lo que se me ocurra.
function getMessageAndPrint(fncPrint){
    const message = getUserMessage();
    fncPrint(message);
}
//     if (option === 'console'){
//     printToConsole(message);
//     } else if(option === 'alert'){
//         printToAlert(message);
//     } else {
//         printToH2(message);
//     }
// }

const getUserMessage = () => `Martes de frescura`;

getMessageAndPrint(printToConsole);
getMessageAndPrint(printToAlert);
getMessageAndPrint(printToH2);
getMessageAndPrint(function(message){return document.getElementById('p-message').innerHTML = message});
getMessageAndPrint(message => document.getElementById('p-message2').innerHTML = message);

/*
    Ejercicio 2
    Escribe una función que tome un arreglo de números,
    duplique el valor de cada número del arreglo,
    e imprima el nuevo arreglo actualizado.
    [5, 10, 15, 20, 25] -> [10, 20, 30, 40, 50]
*/

const double = (array) => {
    const doubleNumbers = [];

    for (let index = 0; index < array.length; index++){
        doubleNumbers.push( array[index] * 2);
    }

    return doubleNumbers;
}

const numbers = [5,10,15,20,25];
console.log(double(numbers));

// Usando Callback con Map

const fncCallbackForMap = (element, index, array) => element * 2

const doubleUsingMap = (array) => array.map(fncCallbackForMap);

console.log(numbers);
console.log(doubleUsingMap(numbers));

const doubleUsingMapAndArrowFunction = (array) => array.map(element => element * 2);
console.log(doubleUsingMapAndArrowFunction(numbers));

/*
  Ejercicio 4
  Crear un programa que itere sobre dos arreglos;
  si hay cursos en común, imprimirlos en la consola.

  salida: "Cursos en común: Programming, Music"
*/

const courses1 = ['Programming', 'Music', 'Math'];
const courses2 = ['Music', 'Spanish', 'Programming'];
const courses3 = ['English', 'Music', 'Programming'];

const commonCourses = (courses1, courses2) => {
    const commonCourses =[];
    for (let i = 0; i < courses1.length; i++) {
        for (let j = 0; j < courses2.length; j++) {
          if (courses1[i] == courses2[j]) {
            commonCourses.push(courses1[i]);
          } 
        }
}
return commonCourses;

}
console.log(`Cursos en comun: ${commonCourses(courses1, courses2)}`);

// Resolviendo el ejercicio usando el metodo filter() y el metodo includes()

const commonCoursesUsingFilter = (courses1, courses2) => courses1.filter(
    (element/*(course)*/, index, array) => courses2.includes(element/*(course)*/)
    );

const commonCourses1And2 = commonCoursesUsingFilter(courses1, courses2);
const commonCourses1And2And3 = commonCoursesUsingFilter(commonCourses1And2, courses3);

console.log(`Cursos en comun: ${commonCourses1And2And3}`);

// ------------------- Contar la cantidad de caracteres de una frase -----------
// pepe pecas pica papas con un pico y una pala
// la cantidad de letras 'p': 8
// resolverlo usando arrow function



// const phrase = "pepe pecas pica papas con un pico y una pala";
const phrase = "Pepe Pecas Pica Papas con un Pico y una Pala";


    const countChar = (phrase, character) => {
    const characters = phrase.split("");
    const filterCharacters = characters.filter(element => element === character);
    return filterCharacters.length;
}
console.log( countChar( phrase, "p"));

// Mas corto

const countChar1 = (phrase, character) => phrase.split("").filter( element => element === character ).length;

console.log( countChar1( phrase, "p"));


//  ===================== Funciones recursivas ======================
/*
    Es una tecnica de programacion en donde la funcion se llama asi misma.
    Se debe tener precaucion de no entrar en un ciclo infinito.

    En algunos casos, la recursividad puede ser mas legible y clara
    ya que refleja de manera directa la naturaleza recursiva del problema.

        function funcionRecursiva ( valor ){
            if ( condicionParo ){

            } else {
                funcionRecursiva( nuevoValor ); // llamada recursiva
            }
        }

*/

// Realizar una funcion que calcule el factorial de un numero
// Mostrar en consola el factorial de 5
// El factorial de un número se calcula multiplicando el número por cada número que lo precede hasta el 1. Por ejemplo: 3!=3x2x1=6.


function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1; // El factorial de 0 y 1 es 1
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  
  // Calcular el factorial de 5
  const factorialDe5 = calcularFactorial(5);
  
  // Mostrar en consola el resultado
  console.log("El factorial de 5 es: " + factorialDe5);

// ======================= Otra manera  ====================

// Solución del ejercico con recursividad

function factorialRecursivo ( number ) {
  if( number < 1 ){
    return 1;
  } else {
      return number * factorialRecursivo( number - 1 );
  }
}

console.log(`Factorial recursivo de 5: ${factorialRecursivo(5)}`);

//  ====================== Metodo for =====================
  
  function factorialAscendente(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++){
        factorial = i * factorial;
    }
    return factorial;
  }

  console.log(`El factorial de 5 es: ${factorialAscendente(5)}`);

  // ==================== Otro camino =========================

  function factorialDescendente(number) {
    let factorial = 1;
    for(let i = number; i > 0; i--){
        factorial = i * factorial;
    }
    return factorial;
  }

  console.log(`El factorial de 5 es: ${factorialDescendente(5)}`);

  /*
    Calcular suma de numeros pares.
    Realizar una funcion recursiva que sume los numeros pares de un numero determinado, hasta el numero 1.

    numero: 12.
    resultado(12) = 12 + 10 + 8 + 6 + 2

    numero 7
    resultado(7) = 6 + 4 + 2

    Recomendacion: usar modulo %2
*/

function sumaPares (number){
    if(number < 0){
      return 0;
    }else if (number % 2 === 0 ){
      return number + sumaPares(number-2);
    }else{
      return sumaPares(number-1);
    }
      
  }
  console.log(`Suma de pares es: ${sumaPares(22)}`);

  const sumEvenNum = number => {
    if (number < 1) {
      return 0;
    } else if (number % 2 === 0) {
      return number + sumEvenNum(number - 2);
    } else {
      return sumEvenNum(number - 1);
    }
  }

  function SumaDePares(numero){
    if(numero < 2){ 
        return 0    } else if(numero % 2 === 0){
        return numero + SumaDePares(numero - 2);     } else {
        return SumaDePares(numero - 1);    }
}
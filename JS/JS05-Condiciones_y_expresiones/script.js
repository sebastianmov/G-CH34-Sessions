console.log('JS05-Condiciones y expresiones');

// ================Operadores aritmeticos ======================
/* 
  Adicion +
  Multiplicacion *
  Substraccion -
  Division /
  Exponencial **
  Resto %
*/

let dinero = 20 + 30; // 50
console.log('Potencia', 2 ** 3);
console.log('Potencia', 2 ** 3 ** 2);

// ================== Operadores de asignacion ================
// Asigna un valor a su operador izquierdo, basandose en el valor de su operando derecho

dinero = 100;

// Operadores de asignacion simplificados
// dinero = dinero + 40;

dinero += 40;
//  restar a dinero 50
dinero -= 50;
// multiplicar dinero al doble
dinero *= 2;
dinero %= 3;

// Operadores unarios
// Operador que realiza una operacion en un solo operando

// Negacion ( - )
dinero = 10;
dinero = -dinero;
console.log(dinero);

//  Conversion a numerico ( + )
const cuentaBancaria = +dinero;
console.log(dinero);

let cambio = +'100';
console.log(cambio + 20);

// typeof
console.log(typeof cambio);

// Operador logico not (!)
let valorBooleano = true;
console.log(!valorBooleano);

// ========= Operadores de incremento y decremento en unidad =========
/* 
  Operador de pre-incremento y pre-decremento
  ++ valor
  -- valor
  Operador de post-incremento y post-decremento
  valor ++
  valor --

*/

let numero = 10;
numero ++;
++ numero;
console.log(numero);

/* 
  Comportamiento de post-incremento
  let nuevoValor = numero
  numero = numero + 1;
*/
let nuevoValor = numero ++;
console.log('Nuevo valor: ', nuevoValor);
console.log('Numero: ', numero);

/* 
  Comportamiento de pre-incremento
  numero = numero +1;
  let nuevoDato = numero;
*/
let nuevoDato = ++ numero;
console.log('Numero: ', numero);
console.log('Nuevo dato: ', nuevoDato);

// ======== Ejercicio ============

let x = 3;
let y = ++ x;
console.log(`x: ${x++} y: ${++y}`);
console.log(`x: ${x} y y: ${y}`);

let x1 = 3;
let y1 = x1++;
console.log(`x: ${x1++} y: ${++y1}`); // 4 y 4
console.log(`x: ${x1} y: ${y1}`);  //   5 y 4

let x2=2; 
let y2="2"; 
console.log(x2++ + - +y2);

// ================ Comparacion estricta ==================
/* 
  === estrictamente igual, debe ser igual en el valor y el tipo
  !== estrictamente diferente, debe ser diferente el valor y tipo
*/

console.log('23' == 23);
console.log('23' === 23);

// =============== Operadores de comparacion ===============
/* 
  Comparar sus operandos  y devuelve un calor booleano.

  < menor que
  > mayor que
  <= menor igual que
  >= mayor igual que
  == igual

  Estos comparadores realizan una conversión implícita a numéricos
  cuando los operandos son de diferente tipo de dato.

  En el caso de que los dos operandos sean string, con los comparadores
  <, >, >=, <= se compara caracter por caracter con su valor númerico
  de la tabla unicode.
*/
console.log(3 == '3');
console.log(3 == 'tres');
console.log('Veinte' > '20');
console.log('Veinte' > 20);
console.log('40' > 20);
console.log(true == 'true');

// ============= ejercicios ================


console.log( true == "true"  );  // false
         //    1  == NaN

console.log(  23 < "40" );       // true

console.log(  "b" < "A" );       // false 
          //  98  <  65 

console.log(  "Hola" < "HOLA");  // false
          // 101(o)  <  79(O)        

console.log(  "Hola" < "123");   // false
          //   72(H) <  49(1)

console.log(  "Hola" < "KeHace" + 1000 ); // true
         //          9          11         prioridad    
         //   "Hola" < "KeHace1000"  
         //    72(H) <  75(K)   

console.log(  "23" == 23  ); // true

// Operadores logicos AND (&&) Y or (||)

const valueA = true, valueB = false, valueC = true;
// const valueB = false;
// const valueC = true;
// const valueX = valueY = valueZ = true; <- Y y Z son declaradas con 'var'

console.log(valueA || valueB && valueC); // true
          //        3          4        prioridad de operadores
          // valueA ||     false   
          //   true ||     false
          //        true

// Operadores de corto circuito
/*
  Cuando los operadores lógicos AND y OR actuan sobre operandos
  diferentes a booleanos.
 
  OP1 && OP2 -> Si OP1 es verdadero, se realiza la OP2 y este sería el resultado (OP2)
  OP1 || OP2 -> Si OP1 es verdadero, el resultado es OP1, no se evalua OP2

  Se considera falso: "", 0, NaN, null, undefined

*/


const varA = true;
const varB = false;
const varC = true;
// OP1 && OP2    Si OP1 es verdadero, se ejecuta OP2
console.log( varA && "Ya te la sabes" ); // Ya te la sabes
console.log( varB && "Cámara, pivote y llanta" ); // false
console.log( NaN && "Cámara, llanta y rin, mi Cheko"  ); // NaN
console.log( "" && "Arre, carnal, gracias" ); // ""

// OP1 || OP2    Si OP1 es verdadero, se ejecuta OP 1
console.log( "false" || "Simona la mona" ); // "false"
console.log( varA || "Ya te la sabes" ); // true
console.log( varB || "Cámara, pivote y llanta" ); // "Cámara, pivote y llanta" 
console.log( NaN  || "Cámara, llanta y rin, mi Cheko" ); // "Cámara, llanta y rin, mi Cheko"


// Quiero imprimir  "Te la rifas" Si la
// variable isOnline y isActive son true
const isOnline = true; // const isOnline = false;
const isActive = true;

if ( isOnline ){
  if( isActive ){
    console.log("Te la rifas ");
  }
}

if ( isOnline && isActive ) console.log("Te la rifas");

// Solución utilizando solo operados lógicos
console.log(isOnline && isActive && "Te la rifas");

console.log(isOnline && isActive && 'Te la rifas');
isActive && isOnline && console.log('Te la rifas');
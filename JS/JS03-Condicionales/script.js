console.log('Sesion JS03 condicionales');

/*
  ================= Condicional if - else ====================

  La condicional if ejecuta una sentencia si una condicion especificada es evaluada como verdadera. En caso contrario podemos usar la sentencia else.

  Sintaxis:

  if ( condicion ) sentencia;
  if ( condicion ) {
    sentencia1;
    sentencia2;
    sentencia3;
    sentenciaN;
  }

  if ( condicion ) 
    sentenciaVerdadera;
  else 
    sentenciaFalsa;

  if ( condicion ) sentenciaVerdadera;
  else sentenciaFalsa;

*/

// Verificar la temperatura, si es mayor o igual a 26 grados,
// Imprimir en consola 'Team Calor'
// Caso contrario 'Team Frio'

const temperatura = 22;

if (temperatura >= 26) {
  console.log('Team Calor');
} else {
  console.log('Team Frio');
}

if (temperatura === 21) {
  console.log('Temperatura sabrudoski');
  console.log('Me pongo short con calcetines');
}

const temp = 20;

if (temp === 15) {
	console.log('Frio');
	console.log('Esto no le gusta a Nan');
} else {
	console.log('Temp a analizar');
}

// ===================================================================

const age = 25;

if (age === 50);
  console.log('Estas en el quinto piso');
console.log('Fin de analizar tu edad');

 /* ==================================================================

 Mentoria, insertar ultima parte dle codigo en ss
    
    ==================================================================
 */

/*
=========================== Sentencia Switch ===========================
  La sentencia switch evalua una expresion y se compara con el valor de cada instancia en 'case' y se ejecuta las sentencias asociadas a ese 'case' hasta que se encuentre la sentencia break o que finalice el switch.

  Sintaxis:
  
  switch(expresion){
    case valor1:
      sentencias;
      break;
    case valor2:
      sentencias;
      break;
    case valorN:
      sentencias;
      break;
    default:
      sentencias;
      break;
  }
*/

const firstName = 'Gaby';
mensaje = '';

switch (firstName) {
  case 'Sebas':
    mensaje = 'Hola Sebas, aprendiz';
    break;
  case 'Tony':
    mensaje = 'Ey, Tony';
    break;
  case 'Gaby':
    mensaje = 'Whats up, Gaby';
    break;
  default:
    mensaje = 'Persona desconocida';
}

console.log(mensaje);

// ==============================================================
/*
  Imprimir aprobado si la calificacion es 7, 8, 9, 10
  Imprimir reprobado fuera de esos numeros

  Realizarlo con switch dentro de una funcion.
*/

const califica = (number) => {
  let message = '';
  switch (number) {
    case 10:
    case 9:
    case 8:
    case 7:
      message = 'Aprobado';
      break;
    default:
      message = 'Reprobado';
  }
  return message; 
}

console.log(`Persona con 9: ${califica(9)}`);
console.log(`Persona con 8: ${califica(7)}`);
console.log(`Persona con 6: ${califica(6)}`);

const printMessage = grade => {
  switch (true) {
    case grade >= 7 :
      console.log("Aprobado");
      break;
    default:
      console.log("Reprobado");
      break;
  }
}

printMessage(10);
printMessage(5);

// =====================================================
/*
  Realizar dos funciones, una usando switch y otra con if-else if-else
  Donde verifique el mes del 1 al 12 y despliegue la estación del año.

  mes 12 , 1, 2 = Invierno
  mes 3, 4, 5 = Primavera
  mes 6, 7, 8 = Verano
  mes 9, 10, 11 = Otoño
*/

// Usando switch

function obtenerEstacionSwitch(mes) {
  let estacion;

  switch (mes) {
    case 12:
    case 1:
    case 2:
      estacion = "Invierno";
      break;
    case 3:
    case 4:
    case 5:
      estacion = "Primavera";
      break;
    case 6:
    case 7:
    case 8:
      estacion = "Verano";
      break;
    case 9:
    case 10:
    case 11:
      estacion = "Otoño";
      break;
    default:
      estacion = "Mes no válido";
  }

  return estacion;
}

// Ejemplo de uso
console.log(obtenerEstacionSwitch(5)); // Salida: Primavera

// Usando if else if else

function obtenerEstacionIfElse(mes) {
  let estacion;

  if (mes >= 1 && mes <= 12) {
    if (mes >= 3 && mes <= 5) {
      estacion = "Primavera";
    } else if (mes >= 6 && mes <= 8) {
      estacion = "Verano";
    } else if (mes >= 9 && mes <= 11) {
      estacion = "Otoño";
    } else {
      estacion = "Invierno";
    }
  } else {
    estacion = "Mes no válido";
  }

  return estacion;
}

// Ejemplo de uso
console.log(obtenerEstacionIfElse(9)); // Salida: Otoño

/*  ==================== Operador ternario =====================
  Es el unico operador de JavaScript que tiene 3 operandos.
  Generalmente se usa como opcion simplificada a la sentenica if-else.

  Sintaxis:

  condicion ?  expresionSiCondicionEsVerdadera : expresionSiCondicionEsFalsa;
*/

const subtotal = 1_000_000;
const esFrontera = true;
let total;

if ( esFrontera)
  total = subtotal * 1.08
else
  total = subtotal * 1.16

console.log(`El total es ${total}`);

// Aplicando operador ternario
const totalConIVA = esFrontera ? subtotal * 1.08 : subtotal * 1.16;
console.log(`Operador ternario ${totalConIVA}`);

// Reduccion con el operador ternario
console.log(`Total: ${subtotal * (esFrontera ? 1.08 : 1.16)}`);

/*
  Evaluar la edad de una persona
  Si la persona es igual o mayor a 18: puede votar
  En caso contrario: no puede votar
*/

const edad = 18;
console.log(`Puede votar: ${edad >= 18 ? 'Si' : 'No'}`);
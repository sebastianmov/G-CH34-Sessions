console.log('Sesion JS01');

/*
    Principales tipos de datos en JS:

    Datos primitivos:
    String
    Boolean
    Number
    Undefined
    Null

    Datos Objetos:
    Array
    Object
*/

// String
console.log('Tipos de dato String: ' + 'Hola ' + '2345');

// Number: 12. -45, 56.892. +Infinity, -Infinity, NaN
// Los datos numericos usan 64 bits para almacenar, pero solo usan 53 bits para representar el numero.

console.log('Tipos de datos number: ', 12, -45, 56.892, 5/0, -23/0, 4*'hola');
console.log('Valor maximo representado en JS: ', Number.MAX_VALUE); // 1.7976931348623157e+308
console.log('Valor seguro: ', Number.MAX_SAFE_INTEGER); // 9007199254740991

console.log('1.7976931348623157e+308', 1.7976931348623157e+308); // 1.7976931348623157e+308
console.log('1.7976931348623157e+309', 1.7976931348623157e+309); // Infinity

console.log('MAX_SAFE_INTEGER + 1', Number.MAX_SAFE_INTEGER + 1); // 9007199254740992
console.log('MAX_SAFE_INTEGER + 2', Number.MAX_SAFE_INTEGER + 2); // 9007199254740993
console.log('MAX_SAFE_INTEGER + 3', Number.MAX_SAFE_INTEGER + 3); // 9007199254740994
console.log('MAX_SAFE_INTEGER + 4', Number.MAX_SAFE_INTEGER + 4); // 9007199254740995
console.log('MAX_SAFE_INTEGER + 5', Number.MAX_SAFE_INTEGER + 5); // 9007199254740996

// BigInt
// Representa valores numericos enteros, de los que el tipo number no pueda representar (Number.MAX_VALUE) o no es seguro (Number.MAX_SAFE_INTEGER).
// Para que sea un BigInt se le debe agregar una 'n' al final del numero.
// El limite de BigInt esta determinado por la memoria disponible del sistema.
let myBigInt = 9007199254740991n;
console.log(myBigInt);
console.log('myBigInt + 1: ', myBigInt + 1n); // 9007199254740992n
console.log('myBigInt + 2: ', myBigInt + 2n); // 9007199254740993n
console.log('myBigInt + 3: ', myBigInt + 3n); // 9007199254740994n
console.log('myBigInt + 4: ', myBigInt + 4n); // 9007199254740995n
console.log('myBigInt + 5: ', myBigInt + 5n); // 9007199254740996n

// Boolean
// Tenemos 2 estados: true/false
console.log('Boolean en true: ', true);
console.log('Boolean en false: ', false);

// Undefined
// Un dato que esta declarado, pero no esta definido
let myVar; // Solo esta declarado
console.log('Tipo de dato undefined: ', myVar); // undefined

// Null
// Intensionalmente se borra el tipo de dato
let myVarNull; // Solo esta declarado
console.log(myVarNull); // undefined
myVarNull = 'Quiero que Tan nos cuente como le fue en su concierto';
console.log(myVarNull); // string
myVarNull = null;
console.log(myVarNull); // null

// --------------------------------------------------------------------------------------------------------------------------------------------------------
// tipos de datos Object

// Object
// const misDatosDePerfil = {clave: valor, clave2: valor2};
const misDatosDePerfil = {
    // Atributos
    nombre: 'Peso',
    apellido: 'Pluma',
    edad: 23,
    isBelicoso: true,
    // Metodos
    nombreCompleto: function fullName(){
        return this.nombre + ' ' + this.apellido;
        // return misDatosDePerfil.nombre + ' ' + misDatosDePerfil.apellido; Usando esta manera de retorno, si se llega a cambiar el nombre del objeto (misDatosDePerfil) ya no funcionaria.
    }
};

console.log(`Nombre: ${misDatosDePerfil.nombre}`);
// console.log(`Nombre ${misDatosDePerfil['nombre']}`); Tambien se puede utilizar esta forma, hay veces que se adecua mejor una que la otra.
console.log(`Apellido: ${misDatosDePerfil.apellido}`);
console.log(`Edad: ${misDatosDePerfil.edad}`);
console.log(`Es belicoso: ${misDatosDePerfil.isBelicoso}`);
console.log(`El nombre completo es: ${misDatosDePerfil.nombreCompleto()}`);

// Arrays
// Tipo de objetos especiales que su fortalez radica en los metodos con los que cuenta.
// Almacena diferenes tipos de dats, su primer elemento es el indice 0.
const cancionesPesoPluma = [
    'Ella Baila Sola',
    'Lady Gaga',
    'Lou Lou',
    'Laguna',
    'El Gavilan',
    {
        2020: 5,
        2021: 30,
        2023: 56,
        total: 91
    }
];

console.log('Canciones por anios: ' + cancionesPesoPluma[5]); // [object Object]
// Indice del objeto de numero de canciones
console.log('Canciones por anio 2020: ' + cancionesPesoPluma[5]['2020']); // 5, se tiene que poner entre corchetes porque '2020' se trata de un number
// Mostrar el "total" de canciones de PP
console.log('Total de canciones de PP: ' + cancionesPesoPluma[5]['total']);
// console.log('Total de canciones de PP: ' + cancionesPesoPluma[5].total); Tambien es correcto escribirlo asi por que el .total es un string

// Conversion implicita
console.log('Hola CH' + 34); // Hola CH34
console.log('3' + 5 + 6); // 356, concatena porque tiene un string
console.log(3 + 5 + 6); // 14, suma porque son solo numbers
console.log('3' * 3); // 9, el unico signo que concatena es +, aqui solo se interpreta el '3' como number y por eso lo multiplica '3' * 3 = 9

// Conversion explicita
// String to number
// Number, parseInt, parseFloat
console.log(Number('3') + 5 + 6); // 14
console.log(parseInt('3') + 5 + 6); // 14
console.log(parseFloat('3') + 5 + 6); // 14
console.log(parseInt('$3')); // NaN, porque el primer caracter ($) no es un numero
console.log(parseInt('3 MXN')); // 3, porque el primer caracter (3) es un numero
console.log(Number('3 MXN')); // NaN, porque se tienen caracteres no numericos

console.log(parseInt('$3MXN'.slice(1)) + 5 + 6); // 14
console.log(parseInt('$3MXN'.replace('$','')) + 5 + 6); // 14
console.log(Number('$3MXN'.split('')[1]) + 5 + 6); // 14, pero si se cambia el string puede dejar de funcionar
console.log(parseInt('$3333MXN'.replace(/[^0-9.]/g,'')) + 5 + 6); // 3344

console.log(parseInt('1000'));
console.log(parseInt('1000', 2)) // 8



/*
    number()
        - Convierte directamente una cade a numeros
        - Si el string tiene caracteres no numericos (12,56), devuelve NaN
        - Puede manejar decimales y exponentes (3e3)
        - Puede convertir booleans y object a number
    
    parseInt ()
        - Convierte una cadena a numeros enteros
        - Ignora los caracteres no numericos despues del primer numero (12,56 -> 12)
        - Puede aceptar como argumento, la base numerica parseInt( '1000', base )

    parseFloat ()
        - Convierte una cadena a numeros de punto flotante
        - Maneja decimales y exponentes
*/

// Conversion a String
console.log(String(23.4)); // 23.4
console.log(String(true)); // true
console.log(String([3, 4, 5, 6])); // 3,4,5,6
console.log(String({a:1,b:2})); // object Object

console.log(JSON.stringify({a:1,b:2})); // {'a':1,'b':2}


// Conversion a Boolean
/*
    Para que sea false, debe ser: '', 0, null, undefined
*/

console.log(Boolean('Hola')) // true
console.log(Boolean('false')); // true
console.log(Boolean()); // false
console.log(Boolean('')); // false
console.log(Boolean(null)); // false
console.log(Boolean(' ')); // true, porque existe un espacio
console.log(Boolean(undefined)); // false
console.log(Boolean([])); // true

// Conversion a Number
/*
    [] = 0;
    [30] = 30;
    [40,23,45] = NaN
    false = 0
    true = 1
*/
console.log(Number([])); // 0
console.log(Number([3,6,7])); //NaN
console.log(Number([9])); // 9

// Conversion a String()
/*
    [] = ''
    [1,2] = 1,2
    function(){} = function(){}
    {} = [object Object]
*/
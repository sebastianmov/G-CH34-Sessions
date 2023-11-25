console.log("JS08 - CatClass");

/*
Clase Felino
El nombre de la clase se recomienda la convencion UpperCamelCase
*/

class Felino {
    // nombre
    // numPatas
    // tieneGarras
    // tieneBigotes
    // size
    // atributo encapsulado
    #createdAt;

    // El metodo constructor nos ayuda a inicializar los atributos de un objeto
    constructor(name, numPatas, tieneGarras, size){
        this.nombre = name;
        this.numPatas = numPatas;
        this.tieneGarras = tieneGarras;
        this.size = size ;
        this.#createdAt = new Date().getTime(); // Obtener el valor en milisegundos
        console.log(`Soy ${this.nombre} y tengo vida, ja - ja - ja`)
    }

    // Setters and Getters
    get createdAt(){
        return this.#createdAt;
    }
    /* set createdAt(newDate){
        this.#createdAt = newDate;
    }
    */

    comer(){
        return `Soy ${this.nombre} y estoy comiendo`;
    }

    lifeSpan(){
        return new Date().getTime() - this.#createdAt;
    }
}

/* 
// Instanciar la clase Felino
const chicharron = new Felino("Chicharron", 4, true, "grande");
const wero = new Felino("Wero", 4, true, "grande");
const pelusa = new Felino("Pelusa", 4, true, "chica");

// Uso de la funcion comer
console.log(chicharron.comer());
console.log(wero.comer());
console.log(pelusa.comer());
 */

/* 
    Usando la palabra reservada extends podemos heredar atributos y metodos de otra clase.
*/
class Gato extends Felino {
    constructor(nombre, size, domesticado = true){
        super(nombre, 4, true, size)
        this.domesticado = domesticado;

    }
}

// Instanciar la clase gato
const naranjo = new Gato("Naranjo", "grande");
const kiara = new Gato("Kiara", "mediana");
const tsuki = new Gato("Tsuki", "grande", false);

console.log(naranjo.comer());
console.log(kiara.comer());
console.log(tsuki.comer());

console.log(`${naranjo.nombre} es un gato ${naranjo.domesticado ? "domesticado" : "salvaje"}`)
console.log(`${tsuki.nombre} es una gata ${tsuki.domesticado ? "domesticado" : "salvaje"}`)

// Accediendo a un atributo encapsulado
// No se puede acceder directamente sobre un atributo encapsulado
/* 
console.log(`Tiempo de vida de ${naranjo.nombre}: ${new Date().getTime - naranjo.#createdAt}`);
*/

setTimeout(() => console.log(`Tiempo de vida de ${naranjo.nombre}: ${naranjo.lifeSpan()}`), 2000);

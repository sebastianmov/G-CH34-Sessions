console.log('JS07 - Asynchronous')

/*
    Programación Síncrona.
    - En un programa síncrono, las operaciones se ejecutan una después de la otra, en orden secuencial.
    - Cada operación espera a que la anterior se complete antes de comenzar.
    - Puede haber bloqueo del hilo principal mientras se espera la finalización de una operación.
*/
const primerPaso = () =>{
    console.log("01- Inicio de mi programa");
}
const segundoPaso = () =>{
    console.log("02- Desarrollo de mi programa");
}
const tercerPaso = () =>{
    console.log("03- Fin de mi programa");
}

primerPaso();
segundoPaso();
tercerPaso();

/*
    Programación Asíncrona.
    - En un programa asíncrono, las operaciones no esperan a que la anterior se complete antes de comenzar.
    En cambio, se utilizan mecanismos como callbacks, promesas o async/await para manejar la asincronía.
    - Las operaciones que pueden llevar tiempo (por ejemplo, solicitudes de red o lecturas de archivos) no bloquean el hilo principal.
    - Esto mejora la eficiencia al permitir que otras operaciones se ejecuten mientras se espera la finalización de una operación asincrónica.
*/

/*
   setTimeout()

   Establece un temporizador que ejecuta una función de callback
   una vez que expire el temporizador

   Sintaxis:
     setTimeout( fncCallback, tiempo_ms, argumentos_fnc );
     setTimeout( ()=>{}  , tiempo_ms );
 */
const pasoAsincrono = (name) => {
    setTimeout (() => console.log(`Hola ${name}`), 2000);
}

console.log('=========== Asynchronous ===========');
/*
    primerPaso();
    pasoAsincrono();
    tercerPaso(); 
*/

/* 
    setInterval
    Ejecuta una funcion de manera reiterada con un tiempo de retardo fijo
    stInterval retorna un ID del intervalo ejecutado
*/

const startInterval = document.getElementById('start-interval');
const stopInterval = document.getElementById('stop-interval');
const resetInterval = document.getElementById('reset-interval');
const counterRef = document.getElementById('counter');
let counter = 0;

startInterval.addEventListener( "click" , (event)=>{
    intervalId = setInterval( () => mostrarEnHtml(++counter), 1000 );
    console.log("interval ID: ", intervalId );
    disableStartButton(true);
    disableStopButton(false);
    disableResetButton(true);
} );

const mostrarEnHtml = (valor) => {
    document.getElementById("counter").innerHTML = valor;
    console.log(valor);
}

stopInterval.addEventListener('click', () => {
    // Detener el intervalo
    clearInterval(intervalId);
    disableStartButton(false);
    disableStopButton(true);
    disableResetButton(false);
});

resetInterval.addEventListener('click', () => {
    counter = 0;
    mostrarEnHtml(0);
    disableResetButton(true);
});

const disableStartButton = (value) => {
    startInterval.disabled = value;
}

const disableStopButton = (value) => {
    stopInterval.disabled = value;
}

const disableResetButton = (value) => {
    resetInterval.disabled = value;
    resetInterval.style.display = value ? 'none' : 'inline';
}

(function(){
    disableStartButton(false);
    disableStopButton(true);
    disableResetButton(true);
})();
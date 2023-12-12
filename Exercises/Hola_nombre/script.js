function cambiarNombre() {
    const nuevoNombre = prompt("¿Cuál es tu nombre?");
    if (nuevoNombre !== null) {
        document.getElementById("nombre").innerText = nuevoNombre;
    }
}
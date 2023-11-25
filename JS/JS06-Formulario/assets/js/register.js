console.log('JS06 - Formulario');

// Obtener la referencia del formulario
const registerForm = document.forms['registerForm'];

// Crear un evento del boton submit

/* 
    Adjunto un controladore de eventos a un elemetno HTML.
    EventType: Tipo de evento a escuchar
    fncCallback: Funcion de callback que se ejecutara cuando suceda el evento.
    registerForm.addEventListener(event, fncCallback);
    El evento se realizara cuando se pulse el boton sumbit
*/
registerForm.addEventListener('submit', (event) => {
    // Evita el comportamiento predeterminado asociado a un evento.
    event.preventDefault();
    console.log(event);

    const user = {
        email: registerForm.elements['inputEmail4'].value,
        password: registerForm.elements['inputPassword4'].value,
        confirmPassword: registerForm.elements['inputPassword5'].value,
        termsandconditions: registerForm.elements['gridCheck'].checked,
    }

    if (datosVerificados(user)){
        enviarDatosAlServidor(user);
    }
});

const datosVerificados = (user) => {
    let response = true;

    if( user.email === "" ){
        mensajeError("Falta introducir el email");
        response = false;
    } else if( user.password.length < 8) {
        mensajeError("El password debe ser mayor o igual a 8 caracteres");
        response = false;
    } else if( user.password !== user.confirmPassword) {
        mensajeError("La confirmación de contraseña no coincide");
        response = false;
    } else if ( !user.termsandconditions ) {
        mensajeError("Debe aceptar los términos y condiciones");
        response = false;
    } else {
        mensajeError('');
    }

    return response;
}

 const mensajeError = (message) => {
    console.error(message);
    const errorMessage = document.getElementById('error-message');
    const errorMessageContainer = document.getElementById('error-message-container');

    errorMessage.innerHTML = message;
    if (message === ''){
        // display = 'none': quita el elemento del DOM
        // visibility = 'hidden': ocultar visualmente el elemento
        errorMessageContainer.style.display = 'none';
    } else {
        errorMessageContainer.style.display = 'block';
    }
 }

const enviarDatosAlServidor = (user) => {
    console.table(user);
    // TODO enviar datos a la api del servidor
}
function validateForm() {
    // Validar nombre
    var nombre = document.getElementById("name").value;
    if (nombre.trim() === "") {
        alert("Por favor, ingresa tu nombre.");
        return false;
    }

    // Validar email
    var email = document.getElementById("email").value;
    if (email.trim() === "") {
        alert("Por favor, ingresa tu correo electrónico.");
        return false;
    }

    // Validar motivo de contacto
    var motivo = document.querySelector('input[name="motivo_contacto"]:checked');
    if (!motivo) {
        alert("Por favor, selecciona el motivo de contacto.");
        return false;
    }

    // Validar servicio utilizado
    var servicio = document.getElementById("servicio").value;
    if (servicio.trim() === "") {
        alert("Por favor, selecciona el servicio utilizado.");
        return false;
    }

    // Validar ubicación
    var ubicacion = document.getElementById("ubicacion").value;
    if (ubicacion.trim() === "") {
        alert("Por favor, selecciona la ubicación desde donde nos contactás.");
        return false;
    }

    // Validar mensaje
    var mensaje = document.getElementById("mensaje").value;
    if (mensaje.trim() === "") {
        alert("Por favor, ingresa tu mensaje.");
        return false;
    }

    // Validar aceptación de términos y condiciones
    var aceptar = document.getElementById("aceptar");
    if (!aceptar.checked) {
        alert("Debes aceptar los términos y condiciones de privacidad.");
        return false;
    }

    // Si todo está validado correctamente, mostrar las alertas adecuadas
    if (document.getElementById("suscribir").checked) {
        alert("¡Gracias por suscribirte a nuestro newsletter! Recibirás novedades y promociones de nuestros servicios.");
    }

    alert("Formulario de contacto enviado. ¡Gracias! Te responderemos lo antes posible.");
    return true;
}


function scrollToForm() {
    document.getElementById("contactForm").scrollIntoView({behavior: 'smooth'});
}
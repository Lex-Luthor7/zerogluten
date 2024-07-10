function validateForm() {
    let nombre = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let motivo = document.querySelector('input[name="motivo"]:checked');
    let servicio = document.getElementById("servicio").value;
    let ubicacion = document.getElementById("ubicacion").value;
    let mensaje = document.getElementById("mensaje").value;
    let suscribir = document.getElementById("suscribir").checked;
    let aceptar = document.getElementById("aceptar").checked;

    let isValid = true;
    if (nombre === "" || email === "" || !motivo || servicio === "" || ubicacion === "" || mensaje === "" || !aceptar) {
        isValid = false;
    }

    if (!motivo) {
        alert("Por favor, seleccione un motivo de contacto.")
    }

    if (!isValid) {
        alert("Por favor, complete todos los campos obligatorios.");
        return false;
    }

    if (suscribir) {
        alert("Gracias por suscribirte a nuestro newsletter.");
    }
    
    alert("Formulario de contacto enviado. ¡Gracias! ¡Te contestaremos lo antes posible!")
    return true;
}



function scrollToForm() {
    document.getElementById("contactForm").scrollIntoView({behavior: 'smooth'});
}
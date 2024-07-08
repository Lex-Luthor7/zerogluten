document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aquí deberías hacer una llamada a un servidor backend para autenticar los datos
    // Puedes simularlo por ahora con condicionales en el lado del cliente
    if (username === 'admin' && password === 'admin123') {
        // Redireccionar a la página de administrador
        window.location.href = 'administrador.html';
    } else {
        alert('Uno o mas datos son incorrectos. Por favor, inténtalo de nuevo.');
    }
});
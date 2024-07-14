document.addEventListener('DOMContentLoaded', () => {
    actualizarCarrito();
});

const productosDiv = document.getElementById('productos');
const carritoIcono = document.getElementById('carritoIcono');
const carritoDropdown = document.getElementById('carritoDropdown');
const carritoContenido = document.getElementById('carritoContenido');
const totalPrecio = document.getElementById('totalPrecio');
const carritoCantidad = document.getElementById('carritoCantidad');

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    function comprarProducto(id) {
        const producto = catalogo.find(prod => prod.id === id);
        if (producto) {
            carrito.push(producto);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            actualizarCarrito();
         }
    }

    function actualizarCarrito() {
        carritoContenido.innerHTML = '';
        let total = 0;
        carrito.forEach(prod => {
            total += prod.precio;
            const carritoItem = document.createElement('div');
            carritoItem.classList.add('carrito-item');
            carritoItem.innerHTML = `
                <span>${prod.nombre} - $${prod.precio.toFixed(2)}</span>
                <span onclick="eliminarDelCarrito(${prod.id})" style="cursor: pointer; color: red;">&times;</span>
                `;
            carritoContenido.appendChild(carritoItem);
        });
        totalPrecio.textContent = total.toFixed(2);
        carritoCantidad.textContent = carrito.length;
    }

    function eliminarDelCarrito(id) {
        carrito = carrito.filter(prod => prod.id !== id);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarCarrito();
    }

    carritoIcono.addEventListener('click', () => {
        carritoDropdown.style.display = carritoDropdown.style.display === 'none' ? 'block' : 'none';
    });
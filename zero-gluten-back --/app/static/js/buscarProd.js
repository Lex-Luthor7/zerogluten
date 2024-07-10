// document.addEventListener('DOMContentLoaded', () =>{
//     mostrarProducto(catalogo)
//     buscarProducto()
// })

// let resultado = document.getElementById("resultado");
//     search= document.getElementById("search");

// function mostrarProducto(catalogo) {
//     const resultado = document.getElementById('resultado');
//     catalogo.forEach(prod => {
//         const productoDiv = document.createElement('div');
//         productoDiv.classList.add('producto');

//         // Contenido del producto
//         productoDiv.innerHTML = `
//             <img src="${prod.imagen}" alt="${prod.nombre}">
//             <p>${prod.nombre}</p>
//             <p>Precio: $${prod.precio}</p>
//             <button onclick="comprarProducto(${prod.id})">Comprar</button>
//             <br>
//             <br>
//         `;



//         //Calificación con estrellas
//         const estrellasDiv = document.createElement('div');
//         estrellasDiv.classList.add('stars');
//         for (let i = 1; i <= 5; i++) {
//             const estrella = document.createElement('i');
//             estrella.classList.add('fa-star', 'star', 'fa-regular');
//             estrella.dataset.rating = i;
//             estrella.addEventListener('click', () => {
//                 calificarProducto(i, estrellasDiv);
//             });
//             estrellasDiv.appendChild(estrella);
//         }
//         productoDiv.appendChild(estrellasDiv);
//         resultado.appendChild(productoDiv);
//     });
// }

// function calificarProducto(puntuacion, contenedorEstrellas) {
//     const estrellas = contenedorEstrellas.querySelectorAll('.star');
//     estrellas.forEach(estrella => {
//         if (estrella.dataset.rating <= puntuacion) {
//             estrella.classList.remove('fa-regular');
//             estrella.classList.add('fa-solid', 'selected', 'bordered');
//         } else {
//             estrella.classList.remove('fa-solid', 'selected', 'bordered');
//             estrella.classList.add('fa-regular');
//         }
//     });
// }

// mostrarProducto(catalogo);

// // Restaurar las calificaciones
// catalogo.forEach(prod => {
//     const rating = localStorage.getItem(`rating-${prod.id}`);
//     if (rating) {
//         calificarProducto(prod.id, rating);
//     }
// });


// /////////

// function buscarProducto(){
//     const search = document.getElementById("search");
//     search.addEventListener("input",() => {
//         limpiarFront()
//         const inputText = search.value.toUpperCase().trim();
        
//         const mostrarFiltrado = catalogo.filter(prod => 
//             prod.nombre.toUpperCase().startsWith(inputText) || 
//             prod.precio.toString().startsWith(inputText)
//         )

//         if (mostrarFiltrado.length){
            
//             if (mostrarFiltrado.length === 1) {
//                 resultado.classList.remove('container-resultados');
//                 resultado.classList.add('producto-resultado');
//             } else {
//                 resultado.classList.remove('producto-resultado');
//                 resultado.classList.add('container-resultados');
//             }
            
//             mostrarProducto(mostrarFiltrado)
//         }else{
//             noHayResultado()
//         }

//         })

// }

// function limpiarFront(){
//     while (resultado.firstChild){
//         resultado.removeChild(resultado.firstChild)
//     }
// }

// function noHayResultado(){
//     const noHayResultado = document.createElement("DIV");
//     noHayResultado.textContent = "No se encuentra el producto";
//     resultado.appendChild(noHayResultado)
// }

document.addEventListener('DOMContentLoaded', () => {
    buscarProducto();
});

let resultado = document.getElementById("resultado");
let search = document.getElementById("search");

function buscarProducto() {
    search.addEventListener("input", () => {
        limpiarFront();
        const inputText = search.value.trim();
        if (inputText !== "") {
            fetch(`/buscar_producto?query=${encodeURIComponent(inputText)}`)
                .then(response => response.json())
                .then(data => {
                    if (data.length) {
                        mostrarProductoFiltrado(data);
                    } else {
                        noHayResultado();
                    }
                })
                .catch(error => console.error('Error en la búsqueda:', error));
        }
    });
}

function limpiarFront() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function noHayResultado() {
    const noHayResultado = document.createElement("DIV");
    noHayResultado.textContent = "No se encuentra el producto";
    resultado.appendChild(noHayResultado);
}

function mostrarProductoFiltrado(catalogo) {
    catalogo.forEach(prod => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');

        productoDiv.innerHTML = `
            <img src="static/uploads/${prod.imagen}" alt="${prod.nombre}">
            <p>${prod.nombre}</p>
            <p>Precio: $${prod.precio}</p>
            <button onclick="comprarProducto(${prod.id})">Comprar</button>
            <div class="stars">
                ${[1, 2, 3, 4, 5].map(i => `
                    <i class="fa-star star fa-regular" data-rating="${i}" onclick="calificarProducto(${i}, this, ${prod.id})"></i>
                `).join('')}
            </div>
            <br><br>
        `;

        resultado.appendChild(productoDiv);
    });
}

function calificarProducto(puntuacion, estrella, prodId) {
    const estrellas = estrella.parentNode.querySelectorAll('.star');
    estrellas.forEach(e => {
        if (parseInt(e.dataset.rating) <= puntuacion) {
            e.classList.remove('fa-regular');
            e.classList.add('fa-solid', 'selected', 'bordered');
        } else {
            e.classList.remove('fa-solid', 'selected', 'bordered');
            e.classList.add('fa-regular');
        }
    });
    localStorage.setItem(`rating-${prodId}`, puntuacion);
}

function comprarProducto(id) {
    alert(`Producto con ID ${id} añadido al carrito.`);
}

document.addEventListener('DOMContentLoaded', () =>{
    mostrarProducto(catalogo)
    buscarProducto()
})


let resultado = document.getElementById("resultado");
    search= document.getElementById("search");

function mostrarProducto(catalogo) {
    catalogo.forEach(prod => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');
        productoDiv.innerHTML = 
        `<div class="stars">
            <img src="${prod.imagen}" alt="${prod.nombre}">
            <p>${prod.nombre}</p>
            <p>Precio: $${prod.precio}</p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </div>`;
        resultado.appendChild(productoDiv);
    });


}

function buscarProducto(){
    const search = document.getElementById("search");
    search.addEventListener("input",() => {
        limpiarFront()
        const inputText = search.value.toUpperCase().trim();
        
        const mostrarFiltrado = catalogo.filter(prod => 
            prod.nombre.toUpperCase().startsWith(inputText) || 
            prod.precio.toString().startsWith(inputText)
        )

        if (mostrarFiltrado.length){
            mostrarProducto(mostrarFiltrado)
        }else{
            noHayResultado()
        }

        })

}

function limpiarFront(){
    while (resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}

function noHayResultado(){
    const noHayResultado = document.createElement("DIV");
    noHayResultado.textContent = "No se encuentra el producto";
    resultado.appendChild(noHayResultado)
}

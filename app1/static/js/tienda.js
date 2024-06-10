function mostrarBotonCerrar() {
    var botonCerrar = document.getElementById('cerrar-anuncio');
    botonCerrar.style.display = 'block';
}

function cerrarAnuncio() {
    var contenedorAnuncio = document.getElementById('anuncio-video');
    contenedorAnuncio.style.display = 'none';
    var video = document.getElementById('video-anuncio');
    video.pause(); // Pausa el video al cerrar el anuncio
}

var total = 0; // Inicializa el total en 0

function addToCart(producto, precio) {
    var contadorProductos = document.getElementById("contador-productos");
    var cantidadActual = parseInt(contadorProductos.innerText);
    contadorProductos.innerText = cantidadActual + 1;

    var productList = document.getElementById("product-list");
    var listItem = document.createElement("li");
    listItem.textContent = producto + " - $" + precio;
    productList.appendChild(listItem);

    total += precio; // Añade el precio al total
    document.getElementById("total-pagar").innerText = "Total: $" + total; // Actualiza el total en el carrito
}

document.getElementById("cart-icon").addEventListener("click", function () {
    document.getElementById("cart-content").classList.toggle("hidden-cart");
});

document.getElementById("close-icon").addEventListener("click", function () {
    document.getElementById("cart-content").classList.add("hidden-cart");
});

function toggleDropdownMenu() {
    var dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
}

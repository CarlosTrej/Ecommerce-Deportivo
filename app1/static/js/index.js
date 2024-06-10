var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[slideIndex - 1].classList.add("active");
}

// Función para mostrar el modal del carrito
function mostrarCarrito() {
    document.getElementById("carritoModal").style.display = "block";
}

// Función para cerrar el modal del carrito
function cerrarCarrito() {
    document.getElementById("carritoModal").style.display = "none";
}

// Función para procesar el pago
function pagar() {
    // Aquí puedes agregar la lógica para procesar el pago
    alert("Procesando el pago...");
}



function agregarAlCarrito(nombre, precio) {
    // Convertir precio a número
    precio = parseFloat(precio);

    // Verificar si la conversión fue exitosa y si precio es un número válido
    if (!isNaN(precio)) {
        // Crear un nuevo elemento de lista para el producto
        var nuevoItem = document.createElement("li");
        nuevoItem.textContent = nombre + " - $" + precio.toFixed(2);
        
        // Crear botón para eliminar producto
        var btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.onclick = function() {
            eliminarProducto(this);
        };
        nuevoItem.appendChild(btnEliminar);

        // Agregar el producto al carrito
        var listaCarrito = document.getElementById("listaCarrito");
        listaCarrito.appendChild(nuevoItem);

        // Actualizar el total del carrito
        var totalCarrito = document.getElementById("totalCarrito");
        var totalActual = parseFloat(totalCarrito.textContent);
        totalCarrito.textContent = (totalActual + precio).toFixed(2);
    } else {
        console.error("El precio no es un número válido:", precio);
    }
}



function eliminarProducto(botonEliminar) {
    var productoTexto = botonEliminar.parentElement.textContent.trim(); // Obtener el texto del producto
    var precioTexto = productoTexto.split('-')[1].trim().replace('$', ''); // Obtener el precio del producto como texto
    var precio = parseFloat(precioTexto); // Convertir el precio a número

    // Verificar si la conversión fue exitosa y si precio es un número válido
    if (!isNaN(precio)) {
        botonEliminar.parentElement.remove(); // Eliminar el elemento de lista del DOM

        // Actualizar el total del carrito
        var totalCarrito = document.getElementById("totalCarrito");
        var totalActual = parseFloat(totalCarrito.textContent);
        totalCarrito.textContent = (totalActual - precio).toFixed(2);
    } else {
        console.error("El precio no es un número válido:", precioTexto);
    }
}

function irAPago() {
    // Mostrar alerta de pago exitoso
    alert("¡Pago exitoso! Gracias por tu compra.");

    // Limpiar el carrito
    var listaCarrito = document.getElementById("listaCarrito");
    listaCarrito.innerHTML = ""; // Eliminar todos los elementos del carrito

    // Reiniciar el total del carrito a 0.00
    var totalCarrito = document.getElementById("totalCarrito");
    totalCarrito.textContent = "0.00";
}

// Función para obtener el valor de una cookie por su nombre
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Buscar si la cookie contiene el nombre buscado
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function mostrarMensajeAdmin() {
    // Verificar si el usuario ha iniciado sesión como administrador
    var adminLoggedIn = localStorage.getItem('admin_logged_in');
    if (adminLoggedIn) {
        document.getElementById('adminMessage').innerHTML = "\
    <p>Se ha accedido como administrador</p>\
    <button onclick='cerrarSesion()'>Cerrar Sesión</button>";








        document.querySelector('.admin-link').style.display = 'inline-block'; // Mostrar botón de editar producto
    }
}

// Función para cerrar sesión
function cerrarSesion() {
    // Eliminar el estado de administrador del localStorage
    localStorage.removeItem('admin_logged_in');
    // Refrescar la página para que los cambios surtan efecto
    window.location.reload();
    alert("Sesión cerrada correctamente");
}

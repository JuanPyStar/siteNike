// Función para mostrar el carrito
function mostrarCarrito() {
    // Obtener el carrito almacenado en localStorage
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    // Referencia al elemento donde se mostrará el carrito
    var carritoElemento = document.getElementById('carrito');
    // Variable para almacenar el precio total
    var precioTotal = 0;

    // Limpiar el contenido del elemento del carrito
    carritoElemento.innerHTML = '';

    // Iterar sobre los productos en el carrito
    carrito.forEach(function(producto) {
        // Crear elementos HTML para mostrar la información del producto
        var productoElemento = document.createElement('div');
        productoElemento.classList.add('producto');
        productoElemento.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="detalle">
                <h3>${producto.nombre}</h3>
                <p>Precio: ${producto.precio}</p>
            </div>
        `;
        // Agregar el elemento del producto al carrito
        carritoElemento.appendChild(productoElemento);

        // Calcular el precio total
        var precioProducto = parseFloat(producto.precio.replace(/[^\d.-]/g, ''));
        precioTotal += precioProducto;
    });

    // Mostrar el precio total
    var precioTotalElemento = document.createElement('div');
    precioTotalElemento.classList.add('precio-total');
    precioTotalElemento.innerHTML = `
        <strong>Total:</strong> ${precioTotal.toFixed(1)} €
    `;
    carritoElemento.appendChild(precioTotalElemento);

    // Actualizar la cantidad de elementos en el enlace del carrito
    actualizarCantidadCarrito(carrito.length);
}

// Función para actualizar la cantidad de elementos en el enlace del carrito
function actualizarCantidadCarrito(cantidad) {
    var carritoLink = document.getElementById('carrito-link');
    carritoLink.textContent = 'Carrito (' + cantidad + ')';
}

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio, imagen) {
    // Obtener el carrito almacenado en localStorage o crear uno vacío si no existe
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Agregar el producto actual al carrito
    carrito.push({ nombre: nombre, precio: precio, imagen: imagen });

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Actualizar la cantidad de elementos en el enlace del carrito
    actualizarCantidadCarrito(carrito.length);
}

// Llamar a la función para mostrar el carrito cuando se cargue la página
mostrarCarrito();

const precioInicial = 400000; // Precio del producto
let cantidad = 0; // Cantidad inicial de productos
let total = 0; // Total a pagar

// Elementos del DOM
const spanCantidad = document.querySelector(".cantidad");
const spanValorTotal = document.querySelector(".valor-total");

// Función para aumentar la cantidad
const aumentar = () => {
  cantidad++;
  spanCantidad.textContent = cantidad;
  actualizarTotal();
};

// Función para disminuir la cantidad
const disminuir = () => {
  if (cantidad > 0) {
    cantidad--;
    spanCantidad.textContent = cantidad;
    actualizarTotal();
  }
};

// Función para actualizar el total a pagar
function actualizarTotal() {
  const total = cantidad * precioInicial;
  spanValorTotal.textContent = total;
}

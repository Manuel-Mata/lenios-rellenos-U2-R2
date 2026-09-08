// Módulo de renderizado del catálogo de productos
// TODO: Conectar con API del backend (RF1)

const productos = [
  { id: 1, nombre: "Leño Relleno Clásico", precio: 45, categoria: "Tradicional" },
  { id: 2, nombre: "Leño Relleno de Queso", precio: 50, categoria: "Especial" },
];

function renderCatalogo(listaProductos) {
  const contenedor = document.getElementById("catalogo");
  contenedor.innerHTML = listaProductos
    .map(
      (producto) => `
      <div class="producto-card">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        <span>${producto.categoria}</span>
      </div>
    `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderCatalogo(productos);
});
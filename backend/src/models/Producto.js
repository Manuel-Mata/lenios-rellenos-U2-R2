// Modelo de datos - Producto
// TODO: Definir schema con Mongoose cuando se conecte MongoDB Atlas

class Producto {
  constructor(id, nombre, precio, categoria, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.stock = stock;
  }
}

module.exports = Producto;
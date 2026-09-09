// Rutas de productos - RF1: Catálogo digital
const express = require("express");
const router = express.Router();

// GET /api/productos - Listar todos los productos
router.get("/", (req, res) => {
  // TODO: Consultar productos desde MongoDB
  res.json({ mensaje: "Endpoint de productos - pendiente de implementar" });
});

// GET /api/productos/:id - Obtener un producto específico
router.get("/:id", (req, res) => {
  // TODO: Consultar producto por ID desde MongoDB
  res.json({ mensaje: `Producto ${req.params.id} - pendiente de implementar` });
});

module.exports = router;
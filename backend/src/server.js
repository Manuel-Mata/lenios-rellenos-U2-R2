// Servidor principal - Leños Rellenos API
// TODO: Conectar con MongoDB Atlas

const express = require("express");
const app = express();

app.use(express.json());

const productosRoutes = require("./routes/productos.routes");
app.use("/api/productos", productosRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor Leños Rellenos corriendo en puerto ${PORT}`);
});

module.exports = app;
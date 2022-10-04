const express = require("express");
const app = express();

app.use(express.json())

const carritoRouter = require("./routes/carrito");
const productosRouter = require("./routes/productos");

app.use("/api/carrito", carritoRouter);
app.use("/api/productos", productosRouter);

app.get("*", (req, res) => {
	res.send("archivo no encontrado");
});

app.listen(8080, () => {
  console.log("server iniciado");
});

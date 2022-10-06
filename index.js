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

/*
Te invito a que te animes a modularizar las funciones que tenes los routes.
Tendrias que crear una carpeta al mismo nivel que las demas, que se llame controller.
Dentro de esa carpeta vas a tener un archivo controller para cada router.
Es decir, vas a tener carrito.controller.js y productos.controller.js

dentro de cada archivo vas a declarar las funciones que tenemos en los respectivos router
Por ejemplo en carrito tenes asi:

router.get("/", async (req, res) => {
  const carritos = await DB.getAllCarritos();
  res.send(carritos);
});

ahora deberias organizarlo de la siguiente manera
  En el archivo carrito.controller.js vas a tener la funcion (req, res)=>{}

  const getAllCart= async (req, res) => {
    const carritos = await DB.getAllCarritos();
    res.send(carritos);
  };

  Y en el archivo carrito.js (podrias renombrarlo a carrito.routes.js) te queda:
  router.get("/", getAllCart)

  Vas a tener que prestar mucha atencion a las importaciones y exportaciones.
  La idea es modularizar lo mejor posible para cuando empiece a crecer el proyecto ya tenerlo adaptado.

  En la carpeta src, deberias contener las carpetas: 
    routes, controller y middleware(si los empezas a implementar)

  Espero haber sido claro y de ayuda, de todas formas ya sabes, cualquier duda, que estoy a disposicion! Saludos!
*/
const express = require("express");
const app = express();
const { Router } = express;
const router = Router();
const db = require("../scr/contenedor");
const DB = new db("data");
const cont = require("../scr/contenedor");
const moment = require("moment");

app.use("/contenedor", cont);

const isAdmin = true;
// let carritos; -> No se utiliza

// ver listado completo de carritos
router.get("/", async (req, res) => {
  const carritos = await DB.getAllCarritos();
  res.send(carritos);
});

// crea carrito y devuelve su ID
router.post("/", async (req, res) => {
  // const {productos} = [{}]
  // podes armar todo en el metodo para que la logica quede en un solo lugar
  // const timestampCarrito = moment().format('MMMM Do YYYY, h:mm:ss a')
  // carritos = await DB.getAllCarritos()
  // await DB.saveCarrito({productos, timestampCarrito})
  const cartCreatedId = await DB.saveCarrito();
  res.send(`el ID del carrito ingresado es : ${cartCreatedId}`);
});

// vacia y elimina un carrito
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const cartDeleted = await DB.deleteByIdCarrito(id);
  res.send(cartDeleted);
});

// muestra productos del carrito seleccionado
router.get("/:id/productos", async (req, res) => {
  const { id } = req.params;
  const productosCarrito = await DB.getProductosFromCarrito(id);
  res.send(productosCarrito);
});

// incorpora productos al carrito seleccionado

// el id del producto viene por body.
// router.post("/:id/productos/:id_prod", async (req, res) => {
router.post("/:cartId/productos", async (req, res) => {
//   const { id, id_prod } = req.params;
const { cartId } = req.params;
  const {id_prod} = req.body
//   estas lineas deberian estar dentro del metodo saveProdutosinCarrito
// para mantener la logica en un solo lugar.
//   const { nombre, precio, foto, stock, origen, descripcion, tipo } =
//     await DB.getById(id_prod);
    const productFound = await DB.getById(id_prod);
    if(productFound){
        const productAddedName = await DB.saveProdutosinCarrito(cartId, productFound);
        res.send(` producto agregado : ${productAddedName}`);
    }
    else{
        res.status(404).send("Ocurrio un error al buscar el producto que desea agregar")
    }
//   const timestampProducto = moment().format("MMMM Do YYYY, h:mm:ss a");
});

// elimina un producto de un carrito seleccionado
router.delete("/:id/productos/:id_prod", async (req, res) => {
  const { id, id_prod } = req.params;
  const productoEliminado = await DB.deleteProductoInCarrito(id, id_prod);
  res.send(productoEliminado);
});

module.exports = router;

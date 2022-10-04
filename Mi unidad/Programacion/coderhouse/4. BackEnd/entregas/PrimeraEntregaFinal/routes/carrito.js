const express = require('express');
const app = express()
const {Router} = express;
const router = Router()
const db = require("../scr/contenedor")
const DB = new db("data")
const cont = require('../scr/contenedor')
const moment = require ('moment')

app.use('/contenedor', cont)

const isAdmin = true
let carritos

// ver listado completo de carritos
router.get("/", async (req, res)=>{
    const carritos = await DB.getAllCarritos()
    res.send(carritos)
})

// crea carrito y devuelve su ID
router.post("/", async (req, res)=>{
    const {productos} = [{}]
    const timestampCarrito = moment().format('MMMM Do YYYY, h:mm:ss a')
    carritos = await DB.getAllCarritos()
    await DB.saveCarrito({productos, timestampCarrito})
    res.send(`el ID del carrito ingresado es : ${carritos.length+1}`)
})

// vacia y elimina un carrito
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    await DB.deleteByIdCarrito(id);
    res.send("carrito Eliminado");
})

// muestra productos del carrito seleccionado
router.get('/:id/productos', async (req, res)=>{
    const { id } = req.params;
    const productosCarrito = await DB.getProductosFromCarrito(id)
    res.send(productosCarrito)
})

// incorpora productos al carrito seleccionado
router.post('/:id/productos/:id_prod', async (req, res)=>{
    const { id, id_prod } = req.params;
    const {nombre, precio, foto, stock, origen, descripcion, tipo } = await DB.getById(id_prod)
    const timestampProducto  = moment().format('MMMM Do YYYY, h:mm:ss a')
    await DB.saveProdutosinCarrito(id, {id_prod, timestampProducto, nombre, precio, foto, stock, origen, descripcion, tipo })
    res.send(` producto agregado : ${nombre}`)
})

// elimina un producto de un carrito seleccionado
router.delete('/:id/productos/:id_prod', async (req, res)=>{
    const { id, id_prod } = req.params;
    const productoEliminado = await DB.deleteProductoInCarrito(id, id_prod)
    res.send(` producto eliminado : ${id_prod}`)
})


module.exports = router;
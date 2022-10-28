const express = require('express');
const app = express()
const {Router} = express;
const router = Router()
const db = require("../scr/contenedor")
const DB = new db("data")
const cont = require('../scr/contenedor')

app.use('/contenedor', cont)

const isAdmin = true
let Productos 

// obtiene y devuelve en /api/productos todos los productos
router.get("/",async (req, res)=>{
    Productos = await DB.getAll()
    res.send(Productos);
})

// obtiene y devuelve en /api/productos/:id_prod todos los productos
router.get("/:id_prod",async (req, res)=>{
    const {id_prod} = req.params
    Productos = await DB.getById(id_prod)
    res.send(Productos);
})

// agrega un producto desde  /api/productos y lo devuelve con su id
router.post('/', async (req, res)=>{
    if (isAdmin) {
        Productos = await DB.getAll()
        const { nombre, precio, foto, stock, origen, bandera, descripcion, tipo } = req.body
        const id_prod = Productos.length+101
        await DB.save({ id_prod, nombre, precio, foto, stock, origen, bandera, descripcion, tipo })
        res.send(`Producto incorporado: ${id_prod}`) 
    }else{
        res.send("acceso no permitido")
    }
})

// recibe y actualiza un producto y lo devuelve con su id
router.put('/:id_prod', async (req, res)=>{
    if(isAdmin){
        const {  nombre, precio, foto, stock, origen, bandera, descripcion, tipo} = req.body
        const {id_prod} = req.params
        await DB.modify(id_prod, {id_prod, nombre, precio, foto, stock, origen, bandera, descripcion, tipo})
        res.send(`producto modificado: ${nombre} `)
    }else{
        res.send("acceso no autorizado")
    }
})

// elimina un producto por su id
router.delete("/:id_prod", async (req, res) => {
    if (isAdmin) {
    const { id_prod } = req.params;
    await DB.deleteById(id_prod);
    res.send("Producto Eliminado");
    }else{
        res.send("acceso no autorizado")
    }
});

module.exports = router;
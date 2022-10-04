const express = require('express');
const {Router} = express;
const router = Router()

let Productos = [
    {title:"teclado",price:100,thumbnail:"http://teclado.com/image.jpg",id:1},
    {title:"raton",price:200,thumbnail:"http://raton.com/image.jpg",id:2},
    {title:"pantalla",price:300,thumbnail:"http://pantalla.com/image.jpg",id:3}]

// obtiene y devuelve en /api/productos todos los productos
router.get('/', (req, res)=>{
    res.send(Productos);
})

// obtiene y devuelve en /api/productos todos los productos
router.get('/:id', (req, res)=>{
    const {id} = req.params
    if(id > Productos.length){
        res.send({ error: 'producto no encontrado' })
    }else{  
        const data = Productos[id-1]
        res.send(data);
    }
})

// agrega un producto y lo devuelve con su id
router.post('/', (req, res)=>{
    const {title, price, thumbnail} = req.body
    const id = Productos.length+1
    Productos.push({title, price, thumbnail, id})
    res.send(Productos[Productos.length])
})

// recibe y actualiza un producto y lo devuelve con su id
router.put('/:id', (req, res)=>{
    const {id} = req.params
    const {title, price, thumbnail} = req.body
    Productos[id-1]= {title, price, thumbnail, id}
    res.send(Productos[id-1])
})

// elimina un producto por su id
router.delete('/:id', (req, res)=>{
    const {id} = req.params
    const producto = Productos[id-1]
    Productos = Productos.filter(item=>item != producto)
    res.send("Producto Eliminado")
})

module.exports = router;
const fs = require ('fs');
const express = require('express')
const app = express()
class Contenedor {
    constructor(file){
        this.file = file;
    } 
    //fs crear objeto (title, price, thumbnail, id)y devolver el id asignado
    async save(objProducto){
        try{ 
        const data = await fs.promises.readFile("./data/productos.json", "utf-8");
        const productos = JSON.parse(data);
        const id = productos.length+101; 
        productos.push(objProducto)
        const stringProductos = JSON.stringify(productos)
        await fs.promises.writeFile("./data/productos.json", stringProductos)
        return productos
    }
    catch{
        console.log("error");
    }
    }

    //fs modifica objeto 
    async modify(id_prod, objProducto){
        try{ 
        const data = await fs.promises.readFile("./data/productos.json", "utf-8");
        const Productos = JSON.parse(data);
        const toModify = Productos.find((producto)=> producto.id_prod == id_prod)  
        const indexToModify = Productos.indexOf(toModify) 
        Productos[indexToModify] = objProducto
        console.log(Productos);
        const stringProductos = JSON.stringify(Productos)
        await fs.promises.writeFile("./data/productos.json", stringProductos)
        return Productos
    }
    catch{
        console.log("error");
    }
    }

    // traer objeto por id y mostrarlo por pantalla
        async getById(id_prod){
            try{ 
                const data = await fs.promises.readFile("./data/productos.json", "utf-8");
                const users = JSON.parse(data);
                const found = users.find((item)=> item.id_prod == id_prod)    
                return found;
            }catch{
                console.log("producto no encontrado")
            }
        }

    // traer el array y mostrarlo por pabntalla
        async getAll(){
            try{ 
                const data = await fs.promises.readFile("./data/productos.json", "utf-8");
                const dataparseada = JSON.parse(data);
                return dataparseada
            }catch{
                console.log("no se encontro busqueda getAll");
            }
        }
        
    // traer objeto por id, eliminarlo
    async deleteById(id_prod){
            try{ 
            const data = await fs.promises.readFile("./data/productos.json", "utf-8");
            const productos = JSON.parse(data);
            const toKeep = productos.filter((item)=> item.id_prod != id_prod)    
            const stringProductos = JSON.stringify(toKeep)
            await fs.promises.writeFile("./data/productos.json", stringProductos)
            return productos
        }catch{
            console.log("error");
        }
    }    

    // borra todos los objetos del archivo
    async deleteAll(){
        try{ 
        const data = await fs.promises.readFile("./data/productos.json", "utf-8");
        const users = JSON.parse(data);
        const toKeep = users.filter((item)=> item.id == 0)    
        const stringUsers = JSON.stringify(toKeep)
        await fs.promises.writeFile("./data/productos.json", stringUsers)
        return users
        }catch{
            console.log("no se encontro busqueda");
        }
    }   

    // ver todos los carritos y su contenido
    async getAllCarritos(){
        const carritos = await fs.promises.readFile("./data/carrito.json", "utf-8")
        const carritosParseados = JSON.parse(carritos)
        return carritosParseados
    }

    // crea un carrito
    async saveCarrito(carrito){
        try{ 
        const data = await fs.promises.readFile("./data/carrito.json", "utf-8");
        const Carritos = JSON.parse(data);
        const id = Carritos.length+1; 
        carrito.id = id;
        const productos = []
        carrito.productos = productos
        Carritos.push(carrito)
        const stringCarritos = JSON.stringify(Carritos)
        await fs.promises.writeFile("./data/carrito.json", stringCarritos)
        return Carritos
    }
    catch{
        console.log("error");
    }
    }

    // elimina un carrito
    async deleteByIdCarrito(id){
        try{ 
        const data = await fs.promises.readFile("./data/carrito.json", "utf-8");
        const carritos = JSON.parse(data);
        const toKeep = carritos.filter((item)=> item.id != id)          
        const stringCarritos = JSON.stringify(toKeep)
        await fs.promises.writeFile("./data/carrito.json", stringCarritos)
        return users
    }catch{
        console.log("error");
    }
    } 
    
    // lista los productos de un carrito
    async getProductosFromCarrito(id){
        try{
        const data = await fs.promises.readFile("./data/carrito.json", "utf-8");
        const carritos = JSON.parse(data);
        const ProductosEncontrados = carritos.find((item)=> item.id == id)
        const productosDelCarrito = ProductosEncontrados.productos
        return productosDelCarrito
    }
    catch{
        console.log("error");
    }
    }

    // agrega producto a un carrito
    async saveProdutosinCarrito(id , objProdutos){
        try{
        const data = await fs.promises.readFile("./data/carrito.json", "utf-8");
        const carritos = JSON.parse(data);
        const toModify = carritos.find((item)=> item.id == id)
        toModify.productos.push(objProdutos)
        const indexCarrito = carritos.indexOf(toModify)
        carritos[indexCarrito] = toModify
        const stringCarritos = JSON.stringify(carritos)
        await fs.promises.writeFile("./data/carrito.json", stringCarritos)
        return carritos
    }
    catch{
        console.log("error");
    }
    }

    // Elimina un producto de un carrito
    async deleteProductoInCarrito(id , id_prod){
        try{
            const data = await fs.promises.readFile("./data/carrito.json", "utf-8");
            const carritos = JSON.parse(data);
            const toModify = carritos.find((item)=> item.id == id)
            const toModifyIndex = carritos.indexOf(toModify)
            const toKeep = toModify.productos
            const quedan = toKeep.filter(item => item.id_prod != id_prod)
            carritos[toModifyIndex].productos = quedan
            const stringCarritos = JSON.stringify(carritos)
            await fs.promises.writeFile("./data/carrito.json", stringCarritos)
            return carritos
        }
        catch{
            console.log("error");
        }
        }
} 

const contenedor = new Contenedor('data')

module.exports = Contenedor


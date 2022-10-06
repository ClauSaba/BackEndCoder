const fs = require("fs");
const express = require("express");
const app = express();
const moment = require("moment");
class Contenedor {
  constructor(file) {
    this.file = file;
  }
  //fs crear objeto (title, price, thumbnail, id)y devolver el id asignado
  async save(objProducto) {
    try {
      const data = await fs.promises.readFile("./data/productos.json", "utf-8");
      const productos = JSON.parse(data);
      // const id = productos.length+101;
      productos.push(objProducto);
      const stringProductos = JSON.stringify(productos);
      await fs.promises.writeFile("./data/productos.json", stringProductos);
      return productos;
    } catch {
      console.log("error");
    }
  }

  //fs modifica objeto
  async modify(id_prod, objProducto) {
    try {
      const data = await fs.promises.readFile("./data/productos.json", "utf-8");
      const Productos = JSON.parse(data);
      const toModify = Productos.find(
        (producto) => producto.id_prod == id_prod
      );
      const indexToModify = Productos.indexOf(toModify);
      Productos[indexToModify] = objProducto;
      /* en este metodo podes aprovechar que tenes la info destructurada es decir -> {  nombre, precio, foto, stock, origen, bandera, descripcion, tipo} y pasarla asi al metodo.
        entonces haces una verificacion de que info estas recibiendo para modificar, es decir, si cada una de esas tiene algo, 
        porque quizas solo quiera modificar un solo dato, como el stock o la descripcion,
        y si solo envio esos dos, perderia el resto de la info, porque estoy pisando el producto. No se si me explico.

        una solucion que te puede servir es usar operador ternario, que es como un if de una linea.
        
        Ya tenes el indexToModify para buscar el indice de ese producto
        entonces, en Productos en la posicion index decis que vas a guardar el resultado de una condicion.
        Por ej, 
        en Productos[indexToModify].nombre = 
        vamos a guardar el resultado de un condicional
        Entonces preguntamos si la propiedad tiene algo
        nombre ?
        asignamos esa propiedad
        nombre 
        sino, le dejamos la info que tiene
        : Productos[indexToModify].nombre ;
        
        seria algo asi=> Productos[indexToModify].nombre = nombre? nombre: Productos[indexToModify].nombre ;
        Y asi con cada propiedad
        */
      console.log(Productos);
      const stringProductos = JSON.stringify(Productos);
      await fs.promises.writeFile("./data/productos.json", stringProductos);
      return Productos;
    } catch {
      console.log("error");
    }
  }

  // traer objeto por id y mostrarlo por pantalla
  async getById(id_prod) {
    try {
      const data = await fs.promises.readFile("./data/productos.json", "utf-8");
      const users = JSON.parse(data);
      const found = users.find((item) => item.id_prod == id_prod);
      return found;
    } catch {
      console.log("producto no encontrado");
    }
  }

  // traer el array y mostrarlo por pabntalla
  async getAll() {
    try {
      const data = await fs.promises.readFile("./data/productos.json", "utf-8");
      const dataparseada = JSON.parse(data);
      return dataparseada;
    } catch {
      console.log("no se encontro busqueda getAll");
    }
  }

  // traer objeto por id, eliminarlo
  async deleteById(id_prod) {
    try {
      const data = await fs.promises.readFile("./data/productos.json", "utf-8");
      const productos = JSON.parse(data);
      const toKeep = productos.filter((item) => item.id_prod != id_prod);
      const stringProductos = JSON.stringify(toKeep);
      await fs.promises.writeFile("./data/productos.json", stringProductos);
      return productos; // podes retornar el id del prod eliminado => `El producto con id ${id_prod} fue eliminado`
    } catch {
      console.log("error");
    }
  }

  // borra todos los objetos del archivo
  async deleteAll() {
    try {
      const data = await fs.promises.readFile("./data/productos.json", "utf-8");
      const users = JSON.parse(data);
      const toKeep = users.filter((item) => item.id == 0);
      const stringUsers = JSON.stringify(toKeep);
      await fs.promises.writeFile("./data/productos.json", stringUsers);
      return users;
    } catch {
      console.log("no se encontro busqueda");
    }
  }

  // ver todos los carritos y su contenido
  async getAllCarritos() {
    const carritos = await fs.promises.readFile("./data/carrito.json", "utf-8");
    const carritosParseados = JSON.parse(carritos);
    return carritosParseados;
  }

  // crea un carrito
  // async saveCarrito(carrito){
  async saveCarrito() {
    try {
      const data = await fs.promises.readFile("./data/carrito.json", "utf-8");
      const Carritos = JSON.parse(data);

      // const id = Carritos.length+1;
      const newCart = {
        productos: [],
        timestampCarrito: moment().format("MMMM Do YYYY, h:mm:ss a"),
        id: Carritos.length + 1,
      };

      // carrito.id = id;
      // const productos = []
      // carrito.productos = productos
      // Carritos.push(carrito)
      Carritos.push(newCart);
      const stringCarritos = JSON.stringify(Carritos);

      await fs.promises.writeFile("./data/carrito.json", stringCarritos);
      return Carritos.length + 1;
    } catch {
      console.log("error");
    }
  }

  // elimina un carrito
  async deleteByIdCarrito(id) {
    try {
      const data = await fs.promises.readFile("./data/carrito.json", "utf-8");
      const carritos = JSON.parse(data);
      const toKeep = carritos.filter((item) => item.id != id);
      // podes validar si el carrito ya fue elimnado
      // controlando si hubo cambio en el .length de carritos, esto seria comparando
      if(carritos.length == toKeep.length ){
        return `El id ${id} no se encuentra dentro la base de datos, o ya fue eliminado`
      }else{
          const stringCarritos = JSON.stringify(toKeep);
          await fs.promises.writeFile("./data/carrito.json", stringCarritos);
          return `El carrito con id: ${id}, fue eliminado`;
          // return users -> users no esta definido
      }
    } catch {
      console.log("error");
    }
  }

  // lista los productos de un carrito
  async getProductosFromCarrito(id) {
    try {
      const data = await fs.promises.readFile("./data/carrito.json", "utf-8");
      const carritos = JSON.parse(data);
      const ProductosEncontrados = carritos.find((item) => item.id == id);
    //   const productosDelCarrito = ProductosEncontrados.productos;
    // Seria mejor enviar toda la info del carrito, ya que no es info sensible o al menos el timestampCarrito.
      return ProductosEncontrados;
    } catch {
      console.log("error");
    }
  }

  // agrega producto a un carrito
  async saveProdutosinCarrito(id, productToAdd) {
    try {
      const data = await fs.promises.readFile("./data/carrito.json", "utf-8");
      const carritos = JSON.parse(data);
    const timestampProducto = moment().format("MMMM Do YYYY, h:mm:ss a");
        productToAdd.timestampProducto= timestampProducto;

      const toModify = carritos.find((item) => item.id == id);
      toModify.productos.push(productToAdd);

    // no es necesario ya que se guarda por referencia.
    //   const indexCarrito = carritos.indexOf(toModify);
    //   carritos[indexCarrito] = toModify;

      const stringCarritos = JSON.stringify(carritos);
      await fs.promises.writeFile("./data/carrito.json", stringCarritos);
      return productToAdd.nombre;
    } catch {
      console.log("error");
    }
  }

  // Elimina un producto de un carrito
  async deleteProductoInCarrito(id, id_prod) {
    try {
      const data = await fs.promises.readFile("./data/carrito.json", "utf-8");
      const carritos = JSON.parse(data);

      const toModify = carritos.find((item) => item.id == id);
      const toModifyIndex = carritos.indexOf(toModify);

    //   const toKeep = toModify.productos;
    const productsFiltered= toModify.productos.filter((item) => item.id_prod != id_prod);
if (toModify.productos.length === productsFiltered.length) {
     return `No se pudo encontrar el producto con id: ${id_prod}, o ya fue eliminado del carrito`;
    }
      carritos[toModifyIndex].productos = productsFiltered;
      const stringCarritos = JSON.stringify(carritos);

      await fs.promises.writeFile("./data/carrito.json", stringCarritos);
      return `El producto con id: ${id_prod}, fue eliminado`;
    } catch {
      console.log("error");
    }
  }
}

const contenedor = new Contenedor("data");

module.exports = Contenedor;

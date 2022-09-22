const fs = require ('fs');
const express = require('express')
const app = express()
class Contenedor {
    constructor(file){
        this.file = file;
    } 
    //fs crear objeto (title, price, thumbnail, id)y devolver el id asignado
    async save(objUser){
        try{ 
        const data = await fs.promises.readFile("./data/productos.txt", "utf-8");
        const users = JSON.parse(data);
        const id = users.length + 1; 
        objUser.id = id;
        users.push(objUser)
        const stringUsers = JSON.stringify(users)
        await fs.promises.writeFile("./data/productos.txt", stringUsers)
        return users
    }catch{
        console.log("error");
    }
    }

    //fs crear objeto en index (title, price, thumbnail, id)y devolver el id asignado
    async saveIndex(objUser){
        try{ 
        const data = await fs.promises.readFile("./data/productos.txt", "utf-8");
        const users = JSON.parse(data);
        const id = users.length + 1; 
        objUser.id = id;
        users.push(objUser)
        const stringUsers = JSON.stringify(users)
        await fs.promises.writeFile("./data/productos.txt", stringUsers)
        return users
    }catch{
        console.log("error");
    }
    }
    
    // traer objeto por id y mostrarlo por pantalla
        async getById(id){
            try{ 
                const data = await fs.promises.readFile("./data/productos.txt", "utf-8");
                const users = JSON.parse(data);
                const found = users.find((item)=> item.id == id)    
                return found;
            }catch{
                console.log("producto no encontrado")
            }
        }

    // traer el array y mostrarlo por pabntalla
        async getAll(){
            try{ 
                const data = await fs.promises.readFile("./data/productos.txt", "utf-8");
                const dataparseada = JSON.parse(data);
                console.log(dataparseada);
                return dataparseada
            }catch{
                console.log("no se encontro busqueda getAll");
            }
        }
        
    // traer objeto por id, eliminarlo
    async deleteById(id){
            try{ 
            const data = await fs.promises.readFile("./data/productos.txt", "utf-8");
            const users = JSON.parse(data);
            const toKeep = users.filter((item)=> item.id != id)    
            const stringUsers = JSON.stringify(toKeep)
            await fs.promises.writeFile("./data/productos.txt", stringUsers)
            return users
        }catch{
            console.log("error");
        }
    }    

    // borra todos los objetos del archivo
    async deleteAll(){
        try{ 
        const data = await fs.promises.readFile("./data/productos.txt", "utf-8");
        const users = JSON.parse(data);
        const toKeep = users.filter((item)=> item.id == 0)    
        const stringUsers = JSON.stringify(toKeep)
        await fs.promises.writeFile("./data/productos.txt", stringUsers)
        return users
        }catch{
            console.log("no se encontro busqueda");
        }
    }   
    
    //elige un producto al azar 
    async azar(){
        try{ 
            const data = await fs.promises.readFile("./data/productos.txt", "utf-8");
            const users = JSON.parse(data);
            const numeroAzar = Math.ceil(Math.random()*users.length)
            let found = users.find((item)=> item.id == numeroAzar)  
            const stringAzar = JSON.stringify(found)
            await fs.promises.writeFile("./data/Azar.txt", stringAzar)
            console.log(numeroAzar);
            console.log(found);
        }catch{
            console.log("no se encontro busqueda");
        }
    }
}
                            
const contenedor = new Contenedor('data')

module.exports = Contenedor


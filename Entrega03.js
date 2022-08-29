const fs = require ('fs');
const express = require("express")
const app = express()

const users = []; 

class Contenedor {
    constructor(file){
        this.file = file;
    } 
    //fs crear objeto (title, price, thumbnail, id)y devolver el id asignado
        async save(objUser){
            try{ 
            const data = await fs.promises.readFile("./productos.txt", "utf-8");
            const users = JSON.parse(data);
            const id = users.length + 1; 
            objUser.id = id;
            console.log(id);
            users.push(objUser)
            const stringUsers = JSON.stringify(users)
            await fs.promises.writeFile("./productos.txt", stringUsers)
            return users
        }catch{
            console.log("error");
        }
        }
    
    // traer objeto por id y mostrarlo por pantalla
        async getById(id){
            try{ 
                const data = await fs.promises.readFile("./productos.txt", "utf-8");
                const users = JSON.parse(data);
                const found = users.find((item)=> item.id == id)    
                console.log(found);
            }catch{
                console.log("no se encontro busqueda");
            }
        }

    // traer el array y mostrarlo por pabntalla
        async getAll(){
            try{ 
                const data = await fs.promises.readFile("./productos.txt", "utf-8");
                const users = JSON.parse(data);
                console.log(users);
            }catch{
                console.log("no se encontro busqueda");
            }
        }
        
    // traer objeto por id, eliminarlo
    async deleteById(id){
            try{ 
            const data = await fs.promises.readFile("./productos.txt", "utf-8");
            const users = JSON.parse(data);
            const toKeep = users.filter((item)=> item.id != id)    
            const stringUsers = JSON.stringify(toKeep)
            await fs.promises.writeFile("./productos.txt", stringUsers)
            return users
        }catch{
            console.log("error");
        }
    }    

    // borra todos los objetos del archivo
    async deleteAll(){
        try{ 
        const data = await fs.promises.readFile("./productos.txt", "utf-8");
        const users = JSON.parse(data);
        const toKeep = users.filter((item)=> item.id == 0)    
        const stringUsers = JSON.stringify(toKeep)
        await fs.promises.writeFile("./productos.txt", stringUsers)
        return users
        }catch{
            console.log("no se encontro busqueda");
        }
    }    
    // TERCERA ENTREGA devuelve un producto a azar

    
}
                            
const contenedor = new Contenedor("SegundaEntrega")

//SEGUNDA ENTREGA, DESCOMENTAR EL METODO AL CUAL SE QUIERE ACCEDER
//contenedor.save({title: "pantalla", price: 300, thumbnail:"http://pantalla.com/image.jpg"})
//contenedor.getById(2)
//contenedor.getAll()
//contenedor.deleteById(4)
//contenedor.deleteAll()


app.get("/",(req, res)=>{
    res.send(`<div><h1 style = "color:orange">El listado de producto es:</h1>${fs.readFileSync("./productos.txt", "utf-8")}</div> `)
})

app.get("/productoRandom",(req, res)=>{
    async function azar(){
        try{ 
            const data = await fs.promises.readFile("./productos.txt", "utf-8");
            const users = JSON.parse(data);
            const numeroAzar = Math.ceil(Math.random()*users.length)
            let found = users.find((item)=> item.id == numeroAzar)  
            const stringAzar = JSON.stringify(found)
            await fs.promises.writeFile("./Azar.txt", stringAzar)
            console.log(numeroAzar);
            console.log(found);
        }catch{
            console.log("no se encontro busqueda");
        }
    }
    azar()
    res.send(`<div> <h1> El producto elegido al azar es: </h1> <h2 style = "color:blue">${fs.readFileSync("./Azar.txt", "utf-8")}</h2>  </div> `);
})

const server = app.listen(8080,()=>{
    console.log(`Servidor iniciado en el puerto 8080` );
})

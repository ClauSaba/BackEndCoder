const fs = require ('fs');

const users = [];

class Contenedor {
    constructor(file){
        this.file = file;
    } 
    //fs crear objeto (title, price, thumbnail, id)y devolver el id asignado
        async save(objUser){
            try{ 
                const data = await fs.promises.readFile("SabatiniClaudioSegundaEntrega/productos.txt", "utf-8");
                if(data){
                    const users = JSON.parse(data);
                    const id = users.length + 1; 
                    objUser.id = id;
                    console.log(id);
                    users.push(objUser)
                    const stringUsers = JSON.stringify(users)
                    await fs.promises.writeFile("SabatiniClaudioSegundaEntrega/productos.txt", stringUsers)
                    return users
                }else{
                    const id = users.length + 1; 
                    objUser.id = id;
                    console.log(id);
                    users.push(objUser)
                    const stringUsers = JSON.stringify(users)
                    await fs.promises.writeFile("SabatiniClaudioSegundaEntrega/productos.txt", stringUsers)
                    return users
                }
            }catch{
                console.log("no se pudo escribir el archivo");
            }
        }
    
    // traer objeto por id y mostrarlo por pantalla
        async getById(id){
            try{ 
                const data = await fs.promises.readFile("SabatiniClaudioSegundaEntrega/productos.txt", "utf-8");
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
                const data = await fs.promises.readFile("SabatiniClaudioSegundaEntrega/productos.txt", "utf-8");
                const users = JSON.parse(data);
                console.log(users);
            }catch{
                console.log("no se encontro busqueda");
            }
        }
        
    // traer objeto por id, eliminarlo
    async deleteById(id){
        try{ 
            const data = await fs.promises.readFile("SabatiniClaudioSegundaEntrega/productos.txt", "utf-8");
            const users = JSON.parse(data);
            const toKeep = users.filter((item)=> item.id != id)    
            const stringUsers = JSON.stringify(toKeep)
            await fs.promises.writeFile("SabatiniClaudioSegundaEntrega/productos.txt", stringUsers)
            return users
        }catch{
            console.log("no se encontro busqueda");
        }
    }    

    // borra todos los objetos del archivo
    async deleteAll(){
        try{ 
        const data = await fs.promises.readFile("SabatiniClaudioSegundaEntrega/productos.txt", "utf-8");
        const users = JSON.parse(data);
        const toKeep = users.filter((item)=> item.id == 0)    
        const stringUsers = JSON.stringify(toKeep)
        await fs.promises.writeFile("SabatiniClaudioSegundaEntrega/productos.txt", stringUsers)
        return users
        }catch{
            console.log("no se encontro busqueda");
        }
    }    
}
                            
const contenedor = new Contenedor("SegundaEntrega")

contenedor.save({title: "teclado", price: 100, thumbnail:"http://teclado.com/image.jpg"})
//contenedor.getById(2)
//contenedor.getAll()
//contenedor.deleteById(2)
//contenedor.deleteAll()

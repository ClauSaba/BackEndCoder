import ContenedorMongo from "../../contenedores/contenedorMongo.js";

class DAOProductosMongo extends ContenedorMongo{
    constructor(){
        super("carrito",
        {
            user: String
        })
    }

    async saveCarrito(user){
        try{
            const data = await super.db.create(user)
            return data
        }catch(e){
            console.log("ocurrió un error", e);
        }
    }

}

export default DAOProductosMongo
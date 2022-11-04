import ContenedorMongo from "../../contenedores/contenedorMongo.js";

/*
aca podrias generar tu schema de carritos, por ej:
const cartSchema = {
    "products": { type... },
    "timestamp": { type... },
  };
 */

class DAOProductosMongo extends ContenedorMongo{
    constructor(){
        // aca pasarias el schema,
        // super("carrito", cartSchema) 
        super("carrito",
        {
            user: String
        })
    }
    /*
        a los metodos que ya tiene la class ContenedorMongo, los heredamos con el metodo super()
        por lo que deberiamos sumarle los propios del carrito, como por ej:

            async addProductToCart(idCart, idProduct) {...}
            async deleteProductInCart( idCart, idPorduct ) {...}
            
    */ 
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
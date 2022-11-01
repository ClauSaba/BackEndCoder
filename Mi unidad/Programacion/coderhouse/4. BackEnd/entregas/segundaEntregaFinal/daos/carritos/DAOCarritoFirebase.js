import contenedorFirebase from "../../contenedores/contenedorFirebase.js";

class DAOCarritoFirebase extends contenedorFirebase{
    constructor(){
        
        super.collection('carritos')
}

async saveCarrito(user){
    const nuevoCarrito = await super.collection.add(user)
    console.log(nuevoCarrito);
}

} 
    

export default DAOCarritoFirebase

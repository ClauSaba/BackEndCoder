import DAOCarritoFirebase from "./daos/carritos/DAOCarritoFirebase.js"

(async ()=>{

    const Carritos = new DAOCarritoFirebase()
    

    Carritos.saveCarrito({user: "Claudio"})
})()


import mongoose from "mongoose";


(async()=>{

    // contectar a la base de datos con mongod --dbpath ./data/db
    try{
        await mongoose.connect('mongodb+srv://ClauSaba:Chaca1969@cluster0.nknccr4.mongodb.net/ecommerce',{
            serverSelectionTimeoutMS: 4000
        })
        console.log("conectado");
    }catch (e){console.log("error de conexion", e);}

    // crear un schema o estructura de la coleccion
    const usuarioSchema = new mongoose.Schema({
        nombre: {type: String, required: true},
        apellido: {type: String, required: false},
        edad: {type: Number, required: true},
        esEstudiante: {type: Boolean, default: true},
        dni: {type: String, required: true, unique: true}
    })

    //crear un modelo para la interpretacion de la coleccion
                                    // coll, schema
    const Usuarios = mongoose.model('usuarios', usuarioSchema)

    // try{
    //     await Usuarios.createCollection()
    //     console.log("coleccion creada");
    // }catch(e){
    //     console.log("error", e);
    // }
    
    //crud
    //crear
    await Usuarios.create({
        nombre: "tddu",
        apellido:"adsasdff",
        edad: 43,
        esEstudiante: true,
        dni: "4523554669"

    })

    //read
    // const listado = await Usuarios.find({ })
    // console.log(listado);


    //update
    // const modificacion = await Usuarios.updateOne({dni: '25669'}, {$set:{edad:55}})
    // console.log(modificacion);
    // const verifico = await Usuarios.find({dni: '25669'})
    // console.log(verifico);.

    //delete
    //await Usuarios.deleteOne({edad:45})


    //read con opciones
    const busqueda = await Usuarios.find({},{esEstudiante:0})
    .sort({dni: -1})
    .limit(3)
    .skip(1)
    console.log(busqueda);



})()
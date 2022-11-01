import mongoose from "mongoose";
import config from "../config.js";

    await mongoose.connect(config.MongoDB.uri, config.MongoDB.options )
    
    class ContenedorMongo {
        constructor(coleccion, esquema){
            this.db = mongoose.model(coleccion, esquema)
    }

    async findByID(id){
        try{
            const data = await this.db.findOne({_id: id})
            return data     
        }catch(e){
            console.log("ocurrió un error", e);
        }

    }

    async findAll(){
        try{
            const data = await this.db.find({})
            return data;

        }catch(e){
            console.log("ocurrió un error", e);
        } 
    }
    
    async save(newDoc){
        try{
            const data = await this.db.create(newDoc)
            return data
        }catch(e){
            console.log("ocurrió un error", e);
        }
    }

    async update(object){
        try{
            await this.db.replaceOne({_id: object._id}, object)
            return object;
            

        }catch(e){
            console.log("ocurrió un error", e);
        } 
    }

    async deleteAll(){
        try{
            await this.db.deleteMany({})

        }catch(e){
            console.log("ocurrió un error", e);
        }
    }
    
    async delete(id){
        try{
            await this.db.deleteOne({_id: id})

        }catch(e){
            console.log("ocurrió un error", e);
        }
    }
    
}


export default ContenedorMongo


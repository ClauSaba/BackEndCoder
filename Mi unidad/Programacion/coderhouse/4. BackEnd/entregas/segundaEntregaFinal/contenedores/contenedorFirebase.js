import admin from "firebase-admin";
import config from "../config.js";
import FirebaseDetails from "../FirebaseDetails.js"

    
    admin.initializeApp({ 
        credential: admin.credential.cert(FirebaseDetails),
        databaseURL: config.FirebaseDB.databaseURL
    })
    
    const db = admin.firestore();
    
    
    class ContenedorFirebase {
        constructor(){
            this.collection = db.collection('productos')
    }
    
    async findByID(id){
        try{
            const data = await this.collection.doc(id).get()
            console.log(data.data());
            return data     
        }catch(e){
            console.log("ocurrió un error", e);
        }
        
    }
    
    async findAll(){
        try{
            const data = await this.collection.get()
            data.forEach((prod)=> console.log(prod.data()))
            return data;
            
        }catch(e){
            console.log("ocurrió un error", e);
        } 
    }
    
    async save(newDoc){
        try{
            const data = await this.collection.add(newDoc)
            return data
        }catch(e){
            console.log("ocurrió un error", e);
        }
    }
    
    async update(id,object){
        try{
            await this.collection.doc(id).set({object})
            const data = await this.collection.doc(id).get()
            console.log(data.data());
            return object;
            
            
        }catch(e){
            console.log("ocurrió un error", e);
        } 
    }

    async deleteAll(){
        try{
            await this.collection.doc().delete()
        }catch(e){
            console.log("ocurrió un error", e);
        }
    }
    
    async delete(id){
        try{
            await this.collection.doc(id).delete()
            
        }catch(e){
            console.log("ocurrió un error", e);
        }
    }
    
}

export default ContenedorFirebase


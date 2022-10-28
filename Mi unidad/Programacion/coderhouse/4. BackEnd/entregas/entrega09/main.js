import admin from 'firebase-admin';
import firebaseConfig from './firebaseConfig.js';

(async()=>{

    
    admin.initializeApp({
        credential: admin.credential.cert(firebaseConfig),
        databaseURL: "https://interquesos.appspot.com"
    });
    
console.log("conectado a firebase!");

const db = admin.firestore();

const vehiculos = db.collection('vehiculos')

//* CRUD

//todo create

//await vehiculos.add({patente: "aa123ca", modelo: "kangoo", conductor: "pedro"})

//todo read

//const lista = await vehiculos.get()
//console.log(lista); //! saca un snapshot hay que loopearlo
//lista.forEach(doc=> console.log({ id: doc.id, ...doc.data()}))

// const busca = await vehiculos.doc('zb2bBLzuopanYQBUP7Yn').get()
// console.log(busca.data());

//todo update

//await Comprador.doc('oMVIzTMwW3N1SkhtgmIv').set({nombre: "Claudio", edad:45 })

//todo delete

//await vehiculos.doc('zb2bBLzuopanYQBUP7Yn').delete()

})()
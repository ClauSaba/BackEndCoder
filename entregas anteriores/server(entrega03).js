const express = require("express");
const db = require("../contenedor.js")
const app = express()

const DB = new db("data")

app.get("/productos",async (req, res)=>{
    const data = await DB.getAll()
    res.send(data);
})

app.get("/productoRandom",async (req, res)=>{
    let numeroAzar = Math.floor(Math.random()*3+1)
    const data = await DB.getById(numeroAzar)
    res.send(data);
})

app.listen(8080,()=>{
    console.log(`Servidor iniciado en el puerto 8080` );
})

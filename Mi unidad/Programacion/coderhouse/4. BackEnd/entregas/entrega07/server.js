import MySQLConn from "./dbConfig.js";
import sqliteConn from "./sqlite3Config.js";
import express from "express";
import DBContainer from "./DBcontainer.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const DB = new DBContainer(MySQLConn, "productos")
const DBsqlite = new DBContainer(sqliteConn, "mensajes")
import handlebars from 'express-handlebars';
import {Server as HTTPServer} from 'http'
import {Server as SocketServer} from 'socket.io'

const httpServer = new HTTPServer(app)
const io = new SocketServer(httpServer)

app.use(express.json())
app.use(express.static( __dirname + '/public/'))
app.use(express.static('data'))

io.on('connection', async (socket)=>{
    console.log(`conectado: ${socket.id}`)
    socket.emit('mensajes', DBsqlite.getAll())

    socket.on('nuevoMensaje',async(data)=>{
        io.sockets.emit('mensajes', await DBsqlite.insertValue(data))
        socket.emit('mensajes', DBsqlite.getAll())
    })
})

app.engine(
    'hbs',
    handlebars.engine({
        extname: ".hbs",
        defaultLayout: "index.hbs",
        layoutsDir: __dirname + '/views/',
    }),
    )

// muestra todos los productos
app.get("/productos", async(req, res)=>{
    const productos = await DB.getAll()
    res.send(productos)
})

// muestra un producto seleccionado
app.get("/productos/:id", async(req, res)=>{
    const { id } = req.params
    const producto = await DB.getByID(id)
    res.send(producto)
})

//inserta un producto 
app.post("/productos", async(req, res)=>{
    const { body } = req;
    const resultado = await DB.insertValue(body);
    res.send ({resultado})
})

//modifica un producto 
app.put("/productos/:id", async(req, res)=>{
    const { id } = req.params;
    const { body } = req;
    const resultado = await DB.updeteEntry(body, id);
    res.send ({resultado})
})

// //borra un producto segun id de parametro
app.delete("/productos/:id", async(req, res)=>{
    const { id } = req.params;
    await DB.deleteEntre(id);
    res.send (`producto ${id} borrado`)})


// muestra todos los mensajes
app.get("/mensajes", async(req, res)=>{
    const mensajes = await DBsqlite.getAll()
    res.send(mensajes)
})

//inserta un mensaje 
app.post("/mensaje", async(req, res)=>{
    const { body } = req;
    const resultado = await DBsqlite.insertValue(body);
    res.send ({resultado})
})


app.set('views', './views')
app.set('view engine', 'hbs')

const server = httpServer.listen(8080, ()=>{
    console.log(`server iniciado en puerto ${server.address().port}`)
})
server.on('error', error => console.log(`${error}`))
    
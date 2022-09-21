const { urlencoded } = require('express');
const express =  require ('express');
const fs = require ('fs');
const db = require("./contenedor")
const handlebars = require('express-handlebars')
const app = express();
const DB = new db("datos")
const cont = require('./contenedor')
const {Server: HTTPServer} = require('http')
const {Server: SocketServer} = require('socket.io');

const httpServer = new HTTPServer(app)
const io = new SocketServer(httpServer)

app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use('/contenedor', cont)
app.use(express.static(__dirname + '/public'))
app.use(express.static('datos'))

io.on('connection', (socket)=>{
    const Mensajes = 
    [
        {autor:"pepe", msj: "hola a todos"},
        {autor:"pepa", msj: "hola a pepe"}
    ] 

    console.log(`conectado: ${socket.id}`)
    socket.emit('mensajes', Mensajes)

    socket.on('nuevoMensaje',(data)=>{
        console.log(data);
        Mensajes.push(data)
        io.sockets.emit('mensajes', Mensajes)
    })
})

app.engine(
    'hbs',
    handlebars.engine({
        extname: "hbs",
        layoutsDir: __dirname + "/views",
        defaultLayout: "main",
    }),
)

app.set("views", __dirname + "/views");
app.set('view engine', 'hbs')

app.get('/main',  (req, res)=>{
    res.render('main', {
        layout:"main", 
        partialsPath: __dirname + "views/partials",
    })
})

const server = httpServer.listen(8080, ()=>{
    console.log(`server iniciado en puerto ${server.address().port}`)
})
server.on('error', error => console.log(`${error}`))

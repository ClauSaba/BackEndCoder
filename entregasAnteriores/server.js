const { urlencoded } = require('express');
const express =  require ('express');
const fs = require ('fs');
const db = require("./contenedor")
const handlebars = require('express-handlebars')
const app = express();
const DB = new db("datos")
const cont = require('./contenedor')
const {Server: HTTPServer} = require('http')
const {Server: SocketServer} = require('socket.io')

const httpServer = new HTTPServer(app)
const io = new SocketServer(httpServer)
const Mensajes = [
    {autor:"pepe@gmail.com", msj: "hola a todos"},
    {autor:"pancho@gmail.com", msj: "hola pepe"}
]

app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use('/contenedor', cont)
app.use(express.static(__dirname + '/public'))
app.use(express.static('datos'))

io.on('connection', (socket)=>{
    console.log(`conectado: ${socket.id}`)
    socket.emit('mensajes', Mensajes)

    socket.on('nuevoMensaje',(data)=>{
        Mensajes.push(data)
        io.sockets.emit('mensajes', Mensajes)
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

app.get('/index', async (req, res)=>{
    const Productos = await DB.getAll()
    res.render('index', {layout:"index", Productos})
})

// agrega un producto y lo devuelve con su id
app.post('/index', async(req, res)=>{
    const {title, price, thumbnail} = req.body
    const data = await DB.save({title, price, thumbnail})
    const Productos = await DB.getAll()
    res.render('index', {layout:"index", Productos})
})

app.set('views', './views')
app.set('view engine', 'hbs')

const server = httpServer.listen(8080, ()=>{
    console.log(`server iniciado en puerto ${server.address().port}`)
})
server.on('error', error => console.log(`${error}`))

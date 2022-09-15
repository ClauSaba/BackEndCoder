const { urlencoded } = require('express');
const express =  require ('express');
const fs = require ('fs');
const db = require("./contenedor")
const handlebars = require('express-handlebars')
const app = express();
const DB = new db("datos")
const productosRouter = require('./productos')
const cont = require('./contenedor')

app.use(express.json())
app.use(urlencoded({ extended: true }))

app.use('/productos', productosRouter)
app.use('/contenedor', cont)

app.use(express.static(__dirname + '/public'))

app.use(express.static('datos'))

app.engine(
    'hbs',
    handlebars.engine({
        extname: ".hbs",
        defaultLayout: "formulario.hbs",
        layoutsDir: __dirname + '/views/',
    }),

    )

app.get('/formulario',  (req, res)=>{
    res.render('formulario', {layout:"formulario"})
})

app.get('/vistaProductos',async (req, res)=>{
    const Productos = await DB.getAll()
    res.render('vistaProductos', {layout:"vistaProductos", Productos})
})

app.get('/producto/:id',async (req, res)=>{
    const {id} = req.params
    try{ 
    const Producto = await DB.getById(id)
    res.render('producto', {layout:"producto", ...Producto})
}catch(e){
    return res.render("error", {layout:"error"})
}
})

// agrega un producto y lo devuelve con su id
app.post('/formulario', async(req, res)=>{
    const {title, price, thumbnail} = req.body
    const data = await DB.save({title, price, thumbnail})
    const Productos = await DB.getAll()
    res.render('vistaProductos', {layout:"vistaProductos", Productos})
    console.log(data);
})

app.set('views', './views')
app.set('view engine', 'hbs')

const server = app.listen(8080, ()=>{
    console.log(`server iniciado en puerto ${server.address().port}`)
})
server.on('error', error => console.log(`${error}`))


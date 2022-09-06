const { urlencoded } = require('express');
const express =  require ('express');
const app = express();
const productosRouter = require('./productos')

app.use(express.json())
app.use(urlencoded({ extended: true }))

app.use('/api/productos', productosRouter)

app.use(express.static('datos'))

const server = app.listen(8080, ()=>{
    console.log(`server iniciado en puerto ${server.address().port}`)
})
server.on('error', error => console.log(`${error}`))
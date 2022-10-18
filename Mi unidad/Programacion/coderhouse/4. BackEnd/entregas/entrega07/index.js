
import sqliteConn from "./sqlite3Config.js";
import DBContainer from "./DBcontainer.js";
const DB = new DBContainer(MySQLConn, "productos")
const DBsqlite = new DBContainer(sqliteConn, "mensajes")

const mensajes = async()=>{ await DBsqlite.getAll()}
console.log(mensajes);

async function render (mensajes){
    
    const html = mensajes.map(mensaje => `
    <div>
        <span style="color: blue">${mensaje.autor} </span>
        <span style="color: red"> (${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}) :</span>
        <span style="color: green">${mensaje.mensaje}</span>
    </div>
    `).join(" ")
    document.getElementById("mensajes").innerHTML = html
}


const socket = io.connect()
function enviarMensaje(event){
    const email = document.getElementById("email").value
    const msj = document.getElementById("msj").value
    document.getElementById("msj").value = ""
    socket.emit("nuevoMensaje", {autor:email, mensaje: msj})
    return false
}


socket.on('mensajes', async (mensajes) =>{
    render(mensajes)
})


function render (data){
    const html = data.map(mensaje => `
    <div>
        <span style="color: blue">${mensaje.autor} </span>
        <span style="color: red"> (${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}) :</span>
        <span style="color: green">${mensaje.msj}</span>
    </div>
    `).join(" ")
    document.getElementById("mensajes").innerHTML = html
}
const socket = io.connect()

function enviarMensaje(event){
    const email = document.getElementById("email").value
    const msj = document.getElementById("msj").value
    document.getElementById("msj").value = ""
    socket.emit("nuevoMensaje", {autor:email, msj: msj})
    return false
}


socket.on('mensajes', (data) =>{
    render(data)
})
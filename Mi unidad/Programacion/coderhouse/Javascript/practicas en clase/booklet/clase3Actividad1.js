let user;
let password;

let tipo = parseInt(prompt("si sos nuevo en el sitio ingresa 1 para registrarte, si estas registrado entra con 0"));

if(tipo === 1){
    user = prompt("ingrese un nombre de usuario");
    password = prompt("ingrese una contraseña");
}else if ( tipo === 0){
    user = prompt("ingrese su letra");
    password = prompt("ingrese su contraseña");
}else{
    alert("solo admite 0 si ya estas registrado, o 1 si queres registrarte y acceder al sitio");
}

let entradaUser = prompt("ingrese su usuario")
let entradaPassword = prompt("ingrese su contraseña")

while( user != entradaUser || password!=entradaPassword){
    alert("credenciales no validas")
}



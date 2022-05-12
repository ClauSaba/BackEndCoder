const cotizacion = 200;
let cantidad = 0
obtenerDolares =(pesos) => pesos/cotizacion;
obtenerPesos =(dolares) => dolares*cotizacion;

let tipoOperacion = parseInt(prompt("digita 1 si queres comprar dolares, \ndigita 2 si queres vender dolares."));

if(tipoOperacion == 1){
    cantidad = parseInt(prompt("ingrese la cantidad de pesos que quiere cambiar"));
}else{
    cantidad = parseInt(prompt("ingrese la cantidad de dolares a vender"))
}

switch(tipoOperacion){
    case 1 :
        alert("Obtendrá: "+obtenerDolares(cantidad)+ " Dolares");
        break;
    case 2 :
        alert("Obtendrá: "+obtenerPesos(cantidad)+" Pesos");   
        break;
    default :
        alert("Datos ingresados no validos");
        break; 
}
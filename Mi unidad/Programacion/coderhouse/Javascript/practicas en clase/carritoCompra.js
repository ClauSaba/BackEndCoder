/* objetivos comerciales aplicados al carrito de compras
10% en todas las compras inferiores a 5000, 20% en la inferiores a 10.000 y 
30% en las superiores a 10000. Se suman descuentos adicionales del 5 y 10%,
si es domingo o martes respectivamente (la idea es que se active automaticamente cuando
el cliente reserve de un calendario..)
*/

let fechaReservaCliente = new Date ("2022-04-19 23:23:23"); // este dato lo tiene que tomar cuando el usuario clickee un calendario
let diaSemana = fechaReservaCliente.getDay();//0 domingo, 1 lunes, 2 martes, ....,6 sabado

if(diaSemana == 0){
    descuentoAdicional = 0.05;
    console.log("Obtuviste un descuento adicional del 5%, por reservar un Domingo ");
}else if(diaSemana == 2){
    descuentoAdicional = 0.10;
    console.log("Obtuviste un descuento adicional del 10%, por reservar un Martes ");
}else{
    descuentoAdicional = 0;
}

console.log(descuentoAdicional);

let totalCarro = 6000; // seria la suma de todos los productos agregados al carrito de compras
let porcentaje = 0;
let neto = 0;

function promo(diaSemana){
    if(totalCarro < 5000){
        porcentaje = 0.10 + descuentoAdicional;
    }else if (totalCarro < 10000){
        porcentaje = 0.15 + descuentoAdicional;
    }else{
        porcentaje = 0.20 + descuentoAdicional;
    }
    neto = totalCarro - (totalCarro*porcentaje);
    console.log(`El descuento en el total de tu compra de $ ${totalCarro} es del ${(porcentaje)*100}%,\n. El total a pagar es $ ${neto}, tu descuento fue de ${totalCarro-neto}!!!`);
}

promo(descuentoAdicional);
/*let askEdad = prompt("intruduce tu edad");
edad = parseInt(askEdad);
document.write(typeof(edad));
const FECHANACIMIENTO = "31-12-76";
document.write("Tenes " + edad +" años de edad" + ", Porque naciste el " + FECHANACIMIENTO +".");*/


/*
if(horasDeSueño < 4){
    console.log(`estas muerto de sueño porque apenas descansaste ${horasDeSueño} horas`);
}else if(horasDeSueño < 6){
    console.log(`anda pensando en dormir un poco mas, con ${horasDeSueño} no te alcanza`);
}else if(horasDeSueño >=6 && horasDeSueño < 10){
    console.log(`bien por vos, descansando esas horas tendras mejor rendimiento`)
}else{
    if(horasDeSueño>24){
        console.log("... estas en el sueño eterno");
    }else{
    console.log("sos un Koala")
    }
}*/

let horasDeSueño = parseInt(prompt("cuantas horas dormiste hoy?"));
console.log(typeof(horasDeSueño));
if (typeof(horasDeSueño) === "number"){
    if(horasDeSueño < 4){
        console.log(`estas muerto de sueño porque apenas descansaste ${horasDeSueño} horas`);
    }else if(horasDeSueño < 6){
        console.log(`anda pensando en dormir un poco mas, con ${horasDeSueño} no te alcanza`);
    }else if(horasDeSueño >=6 && horasDeSueño < 10){
        console.log(`bien por vos, descansando esas horas tendras mejor rendimiento`)
    }else if(horasDeSueño>24){
            console.log("... estas en el sueño eterno");
    }else if(horasDeSueño<24 && horasDeSueño>11){
        console.log("sos un Koala")
    }else{
    console.log("fijate que algo estas poniendo mal,\nla cantidad de horas se mide con un NUMERO!!!")
    }
}

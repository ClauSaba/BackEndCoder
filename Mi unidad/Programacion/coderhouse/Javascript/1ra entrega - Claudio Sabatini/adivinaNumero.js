//regla: un jugador elige un numero, el otro tiene 10 intentos para adivinar, con la ayuda de indicar si es mayor o menor, al numero objetivo..
// realizar la misma operacion, intercambiando de roles... quien adivine el numero en menos intentos gana.

let numeroJugador1 = parseInt(prompt("Jugador1: introduce un numero del 1 al 100 \nSIN QUE TU OPONENTE TE VEA!!!"));
while(numeroJugador1<1 || numeroJugador1>100 ){
    numeroJugador1 = parseInt(prompt("Jugador1: introduce un numero del 1 al 100 Por favor!!! \nSIN QUE TU OPONENTE TE VEA!!!"));
}
let intentosJugador1 = 0;
let numeroAdivinar1 = parseInt(prompt("que numero es?"));

while (numeroJugador1 != numeroAdivinar1 && intentosJugador1 != 10){
    if(numeroAdivinar1<numeroJugador1){
        alert("mas");
    }else if(numeroAdivinar1>numeroJugador1){
        alert("menos");
    }else if(numeroAdivinar1==numeroJugador1){
        alert("GANASTE!!!!!");
        break;
    }
    intentosJugador1++;
    if(intentosJugador1==10){
        alert("no lograste adivinarlo");
    }else{
    numeroAdivinar1 = parseInt(prompt("que numero es?"));
    }
}
alert(`El jugador 1 falló ${intentosJugador1} intentos`)

let numeroJugador2 = parseInt(prompt("Jugador2: introduce un numero del 1 al 100 \nSIN QUE TU OPONENTE TE VEA!!!"));
while(numeroJugador2<1 || numeroJugador2>100){
    numeroJugador2 = parseInt(prompt("Jugador2: introduce un numero del 1 al 100 POR FAVOR!!!!!\nSIN QUE TU OPONENTE TE VEA!!!"));
}    
let intentosJugador2 = 0;
let numeroAdivinar2 = parseInt(prompt("que numero es?"));

while (numeroJugador2 != numeroAdivinar2 && intentosJugador2 != 10){
    if(numeroAdivinar2<numeroJugador2){
        alert("mas");
    }else if(numeroAdivinar2>numeroJugador2){
        alert("menos");
    }else{
        alert("GANASTE!!!!!");
        break;
    }
    intentosJugador2++;
    if(intentosJugador2==10){
        alert("no lograste adivinarlo");
    }else{
    numeroAdivinar2 = parseInt(prompt("que numero es?"));
    }
}
alert(`El jugador 1 falló ${intentosJugador2} intentos`)

let resultado = intentosJugador1-intentosJugador2;

if(resultado >0){
    alert("gana el jugador 2");
}else if(resultado <0){
    alert("gana el jugador 1");
}else{
    alert("hubo un empate");
}

alert ("FIN DEL JUEGO, ESPERO LO HAYAS DISFRUTADO!")


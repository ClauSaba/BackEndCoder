let primerNumero = parseInt(prompt("ingrese el primer numero"));
let operador = prompt("si vas a sumar pone 1, para restar 2, para multiplicar 3, para dividir 4");
let segundoNumero = parseInt(prompt("ingrese un segundo numero"));

if(operador == 1){
    alert( primerNumero+segundoNumero);
}else if(operador == 2){
    alert(primerNumero-segundoNumero);
}else if(operador == 3){
    alert(primerNumero*segundoNumero);
}else if(operador == 4){
    alert(primerNumero/segundoNumero)
}else{
    alert("algo estas poniendo mal")
}
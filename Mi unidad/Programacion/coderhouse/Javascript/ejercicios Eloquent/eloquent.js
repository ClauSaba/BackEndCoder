/*let numero = 0;
let total = 0;

while(numero <= 10){
    {total = total + numero;
    numero += 1;
    document.write(`sumado uno al anterior da: ${total} <br>`)  ;
    }
}


document.write ("Esta es la primera linea <br> Y esta es la segunda")

prompt("anotar algo");

alert("calculo de la raiz cuadrada");
numero = Number(prompt("introduce un numero"));
document.write(numero*numero);

if (4==3+1 && 3==2+2){
    document.write("las dos expresiones son correctas")
}else{
    document.write("alguna es incorrecta")
}

let elNumero = Number(prompt("Elige un numero"));
if (!Number.isNaN(elNumero)) {
  document.write("Tu número es la raiz cuadrada de " +
              elNumero * elNumero);
} else {
  document.write("Ey. Por qué no me diste un número?");
}

let numero = Number(prompt("elige un numero"));
if (numero < 5){
    document.write ("el numero elegido es menor a 5")
}else{
    document.write(" el numero es igual o mayor que 5")
}

let numero = 0;
while(numero <=12){
    document.write(`${numero}  <br>`);
    numero = numero + 2;
}

for( let letra=-36; letra<=5;  letra ++ ){
    document.write(`Letra ${letra} <br>`);
};

for (let line = "@"; line.length < 8; line += "#@")
    document.write(`${line} <br>`);



    let numero = 1;
    while (numero<=100){
    
    if ((numero%3==0) && (numero%5!=0)){
        document.write (`Fizz <br>`);
        numero ++;
    }else if((numero%5==0) && (numero%3!=0)){
        document.write("Buzz <br>");
        numero ++;
    }else if ((numero%5==0) && (numero%3==0)){
        document.write("FizzBuzz <br>");
        numero ++;
    }else{
        document.write(`${numero} <br>`);
        numero++
    }
}

numero = 10;
resultado = numero%3
document.write(resultado)

var matriz = 8
var contador = 1

for (let filaImpar = "0#"; filaImpar.length <= matriz; filaImpar += "0#") {
    if (contador!=matriz){
        contador++
    }else{
        document.write(filaImpar.length);
        
        document.write(filaImpar);
        
    }
}
for (let filaPar = "0#"; filaPar.length <= matriz; filaPar += "0#") {
    continue;
}


const cuadrado = x => {return x*x;}
document.write( cuadrado(65))

quien = prompt("cual es tu nombre?") // fuera de la funcion
function saludar(quien){
quien = prompt("cual es tu nombre?");
document.write (`Hola, como estas  ${quien} <br>`); 
}

saludar();
document.write(quien); // fuera de la funcion

  

function encontrarSolucion(objetivo) {
    function encontrar(actual, historia) {
      if (actual == objetivo) {
        return historia;
      } else if (actual > objetivo) {
        return null;
      } else {
        return encontrar(actual + 5, `(${historia} + 5)`) ||
               encontrar(actual * 3, `(${historia} * 3)`);
      }
    }
    return encontrar(1, "1");
  }
  
  console.log(encontrarSolucion(24)); 

  function esPar(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return esPar(n - 2);
  }
  
  document.write (esPar(51));*/

eleccion = prompt("escribe 1 para pasar de Celsius a Farenheit o 2 para pasar de Farenheit a Celsius");
if (eleccion == 1){
    let celsius = prompt("introducir temperatura en celsius");
    let far = (celsius * (9/5)) + (32);
    document.write(`equivale a ${far} Farenheit`);
}else if (eleccion == 2){
    let far = prompt("introducir temperatura en grados farenheit");
    let celsius = (far -32) * (5/9) ;
    document.write(`equivale a ${celsius} celsius`);
}else{
    alert("intoduce una opcion valida");
}

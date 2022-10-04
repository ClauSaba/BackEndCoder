// DISPONIBLES POR DIA, 10 MESAS DENTRO Y 10 MESAS FUERA
let comensalesDentro = 10;
let comensalesFuera = 10;

// LIMITAMOS LAS VUELTAS DE SOLICITUDES A 100 (AUNQUE SE PODRIA ESTABLECER OTRA CANTIDAD A VOLUNTAD, PERO CUANDO SE COMPLETA SALE CON BREAK),
//  PREGUNTAMOS EL NOMBRE PARA LA RESERVA Y SI QUIERE COMER DENTRO O FUERA
for(let i=0; i<100; i++){
    alert("Bienvenido al sistema de reservas para el dia de hoy");
    let nombre = prompt("Por favor, ingresa tu nombre");
    let opcionDentroFuera = parseInt(prompt("presiona 1 si quieres comer dentro del salon o 2 en el exterior"));

    // HACEMOS VALIDACION DE QUE EL USUARIO SOLO PONGA UNA OPCION ENTRE 1 O 2
    while(opcionDentroFuera != 1 && opcionDentroFuera != 2){
        opcionDentroFuera = parseInt(prompt("presiona 1 si quieres comer dentro del salon o 2 en el exterior, por favor"));
    }
    
    // ACA PLANTEAMOS ESCENARIOS SI DENTRO O FUERA MIENTRAS HAYA DISPONIBILIDAD, SI NO HAY MAS DISPONIBILIDAD... BREAK
    if(comensalesDentro > 0 && opcionDentroFuera == 1){
        comensalesDentro--
        alert(`Gracias ${nombre} por tu reserva, tenes asignado el turno ${10 - comensalesDentro}(SALON) para el dia de hoy.`);
            console.log(`control interno: quedan ${comensalesDentro} turnos para comer adentro`);
    }else if(comensalesFuera > 0 && opcionDentroFuera == 2){
        comensalesFuera--
        alert(`Gracias ${nombre} por tu reserva, tenes asignado el turno ${10 - comensalesFuera}(TERRAZA) para el dia de hoy.`);
        console.log(`control interno: quedan ${comensalesFuera} turnos para comer fuera`);
    }else if(comensalesDentro > 0 && comensalesFuera == 0){
        alert("Lo sentimos no tenemos mas mesas disponibles en el exterior por el dia de hoy, si queres comer dentro del salon, volve a empezar y digita opcion 1")
    }else if(comensalesDentro == 0 && comensalesFuera > 0){
        alert("Lo sentimos no tenemos mas mesas disponibles en el interior por el dia de hoy, si queres comer en la terraza, volve a empezar y digita opcion 2")
    }else{
        alert("Lo sentimos, no hay mas mesas disponibles en el dia de hoy");
        break;
    }
}
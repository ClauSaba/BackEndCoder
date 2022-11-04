/**
 
Recorda que siempre necesitas crear un servidor para correr la app.
Consejo, siempre que se reciban datos para almacenar, esos datos deben ser verificados, siempre. Por seguridad y buenas practicas.
Podes aplicar middlewares de validacion para esto. Que trabajarian en las rutas post y put solamente. 

En cuanto al desafio, entiendo que es innecesariamente complejo, si te parece podemos obviar la parte de las rutas, trabaja solo con los metodos, asegurate de que
las conexiones a las db funcionen correctamente y que los metodos esten completos, mas que nada los de mongo ;)

En lo que pueda darte una mano, no dudes en consultar!

EXITOS!!

 */

import DAOCarritoFirebase from "./daos/carritos/DAOCarritoFirebase.js"

(async ()=>{

    const Carritos = new DAOCarritoFirebase()
    

    Carritos.saveCarrito({user: "Claudio"})
})()


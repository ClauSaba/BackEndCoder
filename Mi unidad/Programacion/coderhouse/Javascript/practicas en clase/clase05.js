class pizza{
    constructor(gusto, precio){
        this.gusto = gusto;
        this.precio = precio;
        this.costo = costo;
        this.stock = 10;
    }
    fabricar(cantidad){
        this.stock = this.stock +cantidad;
    }
    venta(cantVendida){
        this.stock = this.stock - cantVendida;
    }
}

const pepperoni = new pizza ("pepperoni", 800);
const roquefort = new pizza ("roquefort", 1100);

pepperoni.fabricar(150);
pepperoni.venta(80);

roquefort.fabricar(15);
roquefort.venta(2);

console.log(`el stock de la pizza de ${roquefort.gusto} es ${roquefort.stock}`);
console.log(pepperoni.stock);



class ContenedorMemoria {
    constructor() {
        this.productos = [];
    }

    findById(id) {
        const producto = this.productos.find((prod) => prod.id == id);
        if (!producto) {
        throw new Error(`producto no encontrado`);
        } else {
            return producto;
        }
    }

    findAll() {
        return [...this.productos];
    }

    save(newObj) {
        this.productos.push(newObj);
        console.log(this.productos);
        return newObj;
    }

    update(producto) {
        producto.id = Number(producto.id);
        const index = this.productos.findIndex((prod) => prod.id == producto.id);
        if (index == -1) {
        throw new Error(`producto no encontrado`);
        } else {
            this.productos[index] = producto;
            return producto;
        }
    }

    delete(id) {
        const index = this.productos.findIndex((prod) => prod.id == id);
        if (index == -1) {
            throw new Error(`producto no encontrado`);
        } else {
            return this.elementos.splice(index, 1);
        }
    }

    deleteAll() {
        this.productos = [];
    }
}

export default ContenedorMemoria;
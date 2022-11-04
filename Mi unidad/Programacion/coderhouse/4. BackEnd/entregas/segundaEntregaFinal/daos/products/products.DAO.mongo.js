/*
    En este archivo deberias llamar a la class MongoContainer y de ella extender una clase llamada por ej: ProductsDaoMongo
    Como la clase tiene un constructor que espera recibir una collection y un schema,

    deberias utilizar el metodo super() pasandole esos parametros, por ej:

    Primero creamos el schema del producto, algo asi:
    const productSchema = {
        name: { type: String, ... },
        description: { ... },
        price: { type: Number, ... },
        code: { type: Number, ..., unique: true },
        timestamp: { type: Date, ... },
        stock: { type: Number, ... },
        thumbnail: { type: String, ... }
    }
    Luego cramos la clase
    class ProductsDaoMongo extends ContenedorMongo {
        constructor() {
            super( "products", productSchema );
        }
    }
    export= ProductsDaoMongo;

    este-> ProductsDaoMongo
    es el que te va a permitir crear isntancias de productos, por ej:
    const ProductsDAO = new ProductsDaoMongo();
    y ahora ese ProductsDAO tiene acceso a los metodos que se declararon en la clase ContenedorMongo,
    por ej: findByID, findAll, save, etc
    es el quien te va a permitir responder las peticiones en las rutas, por ej:
    
    *importamos ProductsDaoMongo

    const ProductsDAO = new ProductsDaoMongo();

    productRoutes.get('/', async (req, res)=>{
        try{
            ...
            const allProducts= await ProductsDAO.findAll()
            res.status(200).send({
                error: '',
                data: allProducts
            })
        }
        catch(e){
            res.status(500).send({
                error: e.message,
                data: ''
            })
        }
    })
*/
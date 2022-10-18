import knex from "knex";
import MySQLConn from "../dbConfig.js";

const KNEX = knex(MySQLConn);

KNEX.schema.createTableIfNotExists("productos", table =>{
    table.increments('id_prod')
    table.string('nombre')
    table.integer('precio')
    table.string('foto')
    table.integer('stock')
    table.string('origen')
    table.string('bandera')
    table.string('descripcion')
    table.string('tipo')
})
.then(()=>{console.log("tabla creada!");})
.catch((e)=> console.log(e))
.finally(()=>KNEX.destroy())
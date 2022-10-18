import knex from "knex";
import sqliteConfig from "./sqlite3Config.js";

const KNEX = knex(sqliteConfig);

KNEX.schema.createTableIfNotExists("mensajes", table =>{
    table.string('autor')
    table.string('mensaje')
})
.then(()=>{console.log("tabla Sqlite creada!");})
.catch((e)=> console.log(e))
.finally(()=>KNEX.destroy())
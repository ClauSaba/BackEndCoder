import knex from "knex";
import sqliteConfig from "./sqlite3Config.js";
const KNEX = knex(sqliteConfig)

const Mensajes = [{
    autor: "Admin",
    mensaje: "Bienvenidos al chat de miTiendaBack"
}]

KNEX.insert(Mensajes).into("mensajes")
.then(()=>{console.log("then")})
.catch((e)=>console.log(e))
.finally(()=>KNEX.destroy())

KNEX.from("mensajes").select("*")
.then((rows)=>{console.table(rows)})
.catch((e)=>console.log(e))
.finally(()=>KNEX.destroy())



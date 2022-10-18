import knex from "knex";

class DBContainer {
    constructor(config, tabla){
        this.knex = knex(config);
        this.table = tabla;
    }

    async getAll() {
        try{
            return await this.knex.select("*").from(this.table)
        }catch (e){
            throw new Error(e);
        }
    }

    async getByID(id) {
        try{
            return await this.knex.select("*").from(this.table).where("id_prod", id)
        }catch (e){
            throw new Error(e);
        }
    }

    async insertValue(obj) {
        try{
            return await this.knex.insert(obj).into(this.table)
        }catch (e){
            throw new Error(e);
        }
    }

    async updeteEntry (obj, id) {
        try{
            return await this.knex.from(this.table).where("id_prod", id).update(obj)
        }catch (e){
            throw new Error(e);
        }
    }

    async deleteEntre (id) {
        try{
            return await this.knex.from(this.table).where("id_prod", id).del()
        }catch (e){
            throw new Error(e);
        }
    }

}

export default DBContainer;
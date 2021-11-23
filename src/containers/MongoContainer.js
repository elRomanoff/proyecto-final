const mongoose = require('mongoose');
const options = require("../../config.js")

class MongoContainer {
    constructor(collection, schema){
        this.collection = mongoose.model(collection, schema);
        this.init()
    }
    async init() {
        if(!this.connection){
            this.connection =  mongoose.connect(options.mongodb.host, options.mongodb.options)
        }
    }
    async save(product){
        try{
            const document = await this.collection.create(product);
            return document._id;
        }catch(error){
            console.error(error); throw error;
        }
    }
    async getById(id){
        try{
            const documents = await this.collection.find({_id: id})
            if(documents.length === 0){
                return null;
            }else{
                return documents[0];
            }
        }
        catch(error) {
            console.error(error); throw error;
        }
    }
    async getAll(){
        try{
            const documents = await this.collection.find()
            return documents
        }
        catch(error){console.error(error); throw error;}
    }
    async deleteById(id){
        try{
            const response = await this.collection.deleteOne({_id:id})
            console.log("deleted: ", {response})
        }
        catch(error){console.error(error); throw error;}
    }
    async deleteAll(){
        try{
            const response = await this.connection.deleteMany({})
            console.log("deleted: ", response)
        }
        catch (error) { console.error(error); throw error; }
    }
    async update(id, element){
        const elementUpdated = await this.getById(id)
        const obj = await this.collection.updateOne({_id: id}, {$set: element});

        console.log(obj)
        if (!obj) {
            console.error("elemento no encontrado")
            return null            
        }
        
        return elementUpdated
    }    
}

module.exports = MongoContainer
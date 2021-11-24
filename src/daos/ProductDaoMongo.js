const mongoose = require("mongoose")
const MongoContainer = require("../containers/MongoContainer.js")

class ProductDaoMongo extends MongoContainer{
    constructor(){
        super("products", new mongoose.Schema({
            name: { type: String, required: true},
            price: { type:Number, required: true},
            photo: { type: String, required: true},
            code:{ type: Number, required: true},
            stock:{ type: Number, required: true},
            description:{type: String, required: true}
        }));
        
    }
}

module.exports = ProductDaoMongo
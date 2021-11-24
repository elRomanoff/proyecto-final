const mongoose = require("mongoose")
const MongoContainer = require("../containers/MongoContainer.js")

class CartDaoMongo extends MongoContainer{
    constructor(){
        super("carts", new mongoose.Schema({
            product: {type: Array, required: true},
            timeStamp: {type: Number, required: true}
        }))
    }
    async deleteProductFromCart(id, idProduct, product){
        try {
            const document = await this.collection.updateOne({ _id: id }, { $pull: { product: { _id: idProduct }} });
        }
        catch (error) {
            console.error(error); throw error;
        }
    }
    async saveProductIntoCart(id, product){
        try {
            const document = await this.collection.updateOne({_id: id},{$push: {product: product}});
            return document;
        } catch (error) {
            console.error(error); throw error;
        }
    }
}

module.exports = CartDaoMongo
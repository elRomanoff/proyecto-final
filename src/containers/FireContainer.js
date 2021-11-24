const admin = require("firebase-admin");
const options = require("../../config.js")


class FireContainer {
    constructor(url){
        this.url = url;
        this.init()
    }
    init(){
        admin.initializeApp({
            credential: admin.credential.cert(options.fireBase),
            databaseURL: this.url
        });
    }
        async save(product){
        const data = this.db.ref("products").push(product);
        return data
    }
    async getAll(){
        const data = this.db.ref("products")
        return data;
    }
} 

module.exports = FireContainer

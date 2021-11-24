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
} 

module.exports = FireContainer

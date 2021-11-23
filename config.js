const options = {
    mongodb: {
        host: "mongodb://localhost/ecommerce",
        options: {useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,}
    },
    fireBase: {

    },
    file:{
        path: "./data"
    }
}

module.exports = options;
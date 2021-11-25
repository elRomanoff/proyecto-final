const express = require('express');
const productRouter = express.Router();
const ProductDaoMongo = require("../daos/ProductDaoMongo.js")
const isAdmin = require('../middlewares/isAdmin.js')
const ProductDaoFire = require("../containers/FireContainer.js")
require ("dotenv").config()

let productDao

if(process.env.DATABASE === "MONGODB") productDao = new ProductDaoMongo
else if (process.env.DATABASE === "FIREBASE") productDao = new ProductDaoFire("https://coderhouse-ecommerce-uwu-default-rtdb.firebaseio.com/")

productRouter.get('/', async (req,res) =>{
    const data = await productDao.getAll();
    res.send(data)
})

productRouter.get("/:id", async(req,res) =>{
    const data = await productDao.getById(req.params.id);
    res.send(data)
})

productRouter.delete("/", async(req,res) =>{
    const data = await productDao.deleteAll();
    res.send(data);
})
productRouter.delete("/:id", async(req, res) =>{
    const data = await productDao.deleteById(req.params.id)
    res.send(data)
})
productRouter.post("/", async(req,res) =>{
    let product = req.body;
    const data = productDao.save(product);
    res.send(data)
})
productRouter.put("/:id", async(req, res) =>{
    const product = req.body;
    const id = req.params.id;
    const data = productDao.update(id, product);
    res.send(data)
})


module.exports = productRouter;

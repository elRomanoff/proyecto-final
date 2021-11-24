const express = require('express');
const productRouter = express.Router();
const ProductDaoMongo = require("../daos/ProductDaoMongo.js")
const isAdmin = require('../middlewares/isAdmin.js')

const productDaoMongo = new ProductDaoMongo

productRouter.get('/', async (req,res) =>{
    const data = await productDaoMongo.getAll();
    res.send(data)
})

productRouter.get("/:id", async(req,res) =>{
    const data = await productDaoMongo.getById(req.params.id);
    res.send(data)
})

productRouter.delete("/", async(req,res) =>{
    const data = await productDaoMongo.deleteAll();
    res.send(data);
})
productRouter.delete("/:id", async(req, res) =>{
    const data = await productDaoMongo.deleteById(req.params.id)
    res.send(data)
})
productRouter.post("/", async(req,res) =>{
    let product = req.body;
    const data = productDaoMongo.save(product);
    res.send(data)
})
productRouter.put("/:id", async(req, res) =>{
    const product = req.body;
    const id = req.params.id;
    const data = productDaoMongo.update(id, product);
    res.send(data)
})


module.exports = productRouter;
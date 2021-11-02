const express = require('express');
const productRouter = express.Router();
const {getAllProducts, createProduct, deleteProduct} = require("../models/products.js")

productRouter.get('/', async (req,res) =>{
    const data = await getAllProducts();
    res.send({ data })
})

productRouter.post('/', async (req,res) =>{
    const nuevoProducto = req.body;

    const idProductSaved = await createProduct(nuevoProducto)
    res.send({data: idProductSaved})
})

productRouter.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const idDeletedProduct = await deleteProduct(id);
    res.send(idDeletedProduct);
})

module.exports = productRouter;
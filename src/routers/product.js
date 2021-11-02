const express = require('express');
const productRouter = express.Router();
const {getAllProducts, createProduct, deleteProduct, updateProduct} = require("../models/products.js")
const isAdmin = require('../middlewares/isAdmin.js')

productRouter.get('/', async (req,res) =>{
    const data = await getAllProducts();
    res.send({ data })
})

productRouter.post('/', isAdmin, async (req,res) =>{
    const nuevoProducto = req.body;

    const idProductSaved = await createProduct(nuevoProducto)
    res.send({data: idProductSaved})
})

productRouter.delete("/:id", isAdmin, async (req, res) => {
    const id = req.params.id;
    const idDeletedProduct = await deleteProduct(id);
    res.send(idDeletedProduct);
})

productRouter.put("/:id", isAdmin, async (req, res) => {
    const id = req.params.id;
    const product = req.body;
    await updateProduct(id, product)
    res.send({data: "producto actualizado exitosamente"})
})
module.exports = productRouter;
const express = require('express');
const cartRouter = express.Router();
const { getAllcarts, createcart, deleteCart, getAllProducts, addProductsToCart, deleteProductFromCart } = require("../models/carts.js")

cartRouter.get('/', async (req, res) => {
    const data = await getAllcarts();
    res.send({ data })
})

cartRouter.post('/', async (req, res) => {
    const newCart = req.body;

    const idCartSaved = await createcart(newCart)
    res.send({ data: idCartSaved })
})

cartRouter.delete("/:id", async (req, res) =>{
    const id = req.params.id
    const idCartDeleted = await deleteCart(id)
    res.send({data: idCartDeleted})
})

cartRouter.get("/:id/productos", async(req,res) =>{
    const id = req.params.id;
    const listOfProducts = await getAllProducts(id)
    res.send ({data: listOfProducts});
})

cartRouter.post("/:id/productos", async(req,res) =>{
    const id = req.params.id;
    const product = req.body;
    const data = await addProductsToCart(product, id);
    res.send({data:data})
})

cartRouter.delete("/:id/productos/:id_prod", async (req, res) => {
    const idCart = req.params.id;
    const idProd = req.params.id_prod;
    const data = await deleteProductFromCart(idCart, idProd)
    res.send({data: "producto borrado exitosamente"})
})


module.exports = cartRouter;
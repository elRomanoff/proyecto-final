const express = require('express');
const cartRouter = express.Router();
const { getAllcarts, createcart, deleteCart, getAllProducts, addProductsToCart } = require("../models/carts.js")

cartRouter.get('/', async (req, res) => {
    const data = await getAllcarts();
    res.send({ data })
})

cartRouter.post('/', async (req, res) => {
    const newCart = req.body;

    const idcartSaved = await createcart(newCart)
    res.send({ data: idcartSaved })
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
    const data = await addProductsToCart();
    res.send({data:data})
})

module.exports = cartRouter;
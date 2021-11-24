const express = require('express');
const cartRouter = express.Router();
const CartDaoMongo = require("../daos/CartDaoMongo.js")
const isAdmin = require('../middlewares/isAdmin.js')

const cartDaoMongo = new CartDaoMongo

//obtener todos los carritos
cartRouter.get('/', async (req, res) => {
    const data = await cartDaoMongo.getAll();
    res.send(data)
})

//crear carrito
cartRouter.post('/', async (req, res) => {
    const newCart = {};
    newCart.timeStamp = new Date();
    newCart.product = []
    const idCartSaved = await cartDaoMongo.save(newCart)
    res.send({ data: idCartSaved })
})

//borrar un carrito por id
cartRouter.delete("/:id", async (req, res) =>{
    const id = req.params.id
    const idCartDeleted = cartDaoMongo.deleteById(id)
    res.send({data: idCartDeleted})
})
//traer los productos de un carrito
cartRouter.get("/:id/productos", async(req,res) =>{
    const id = req.params.id;
    const listOfProducts = await cartDaoMongo.getById(id)
    console.log(listOfProducts)
    res.send ({data: listOfProducts.product});
})

//guardar un producto en el carrito
cartRouter.post("/:id/productos", async(req,res) =>{
    const id = req.params.id;
    const product = req.body;
    const data = await cartDaoMongo.saveProductIntoCart(id, product);
    res.send(data)
})

//borrar un producto del carrito
cartRouter.delete("/:id/productos/:id_prod", async (req, res) => {
    const idCart = req.params.id;
    const idProd = req.params.id_prod;
    await cartDaoMongo.deleteProductFromCart(idCart, idProd)
    res.send({data: "producto borrado exitosamente"})
})


module.exports = cartRouter;
const Contenedor = require("../../Contenedor");

const cartContenedor = new Contenedor("./src/data/carts.json");

const getAllcarts = async () => {
    const list = await cartContenedor.getAll();
    return list;
}

const createcart = async (cart) => {
    const idSavedcart = await cartContenedor.save(cart);
    return idSavedcart;
}

const deleteCart = async(idCart) =>{
    await cartContenedor.deleteById(idCart);
    return idCart;
}
const getAllProducts = async(idCart) => {
    const cart = await cartContenedor.getById(idCart);
    return cart.products;
}

const addProductsToCart = async(product, id) =>{
    let cart = await cartContenedor.getAll()
    for (let i = 0; i < cart.length; i++) {
        const element = array[i];
    }
}

module.exports = {
    getAllcarts,
    createcart,
    deleteCart,
    getAllProducts,
    addProductsToCart
}
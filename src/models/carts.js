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
        if (cart[i].id == id) {
            cart[i].products.push(product);
        }
    }
    cartContenedor.replace(cart)
}

const deleteProductFromCart = async(id, product) => {
    let cart = await cartContenedor.getAll()
    for (let i = 0; i < cart.length; i++) {
        const carro = cart[i];
        if (carro.id == id) {

            for (let j = 0; j < carro.products.length; j++) {
                if(carro.products[j].id == product){
                    carro.products.splice(j,1)
                }
            }
        }
    }
    cartContenedor.replace(cart)
}

module.exports = {
    getAllcarts,
    createcart,
    deleteCart,
    getAllProducts,
    addProductsToCart,
    deleteProductFromCart
}
const Contenedor = require("../../Contenedor");

const productosContenedor = new Contenedor("./src/data/products.json");

const getAllProducts = async ()=>{ 
    const list = await productosContenedor.getAll();
    return list;
}

const createProduct = async (product)=>{ 
    const idSavedProduct = await productosContenedor.save(product);
    return idSavedProduct;
}
const deleteProduct = async(product) =>{ 
    const idDeletedProduct = await productosContenedor.deleteById(product)
    return idDeletedProduct;
}

const updateProduct = async(id, product) =>{
    const productos = await productosContenedor.getAll();
    for (let i = 0; i < productos.length; i++) {

        if (productos[i].id == id){
            productos[i] = product;
        }
        else{ return "no se encontró"}

        productosContenedor.replace(productos);
    }

}   


module.exports = {
    getAllProducts,
    createProduct,
    deleteProduct,
    updateProduct
}
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



module.exports = {
    getAllProducts,
    createProduct,
    deleteProduct
}
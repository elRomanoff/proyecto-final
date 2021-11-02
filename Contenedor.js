const { time } = require("console");
const fs = require("fs")


class Contenedor {
    constructor(file) {
        this.file = file;
    }

    async save(producto) {
        try {
            const contenido = await fs.promises.readFile(`./${this.file}`, "utf-8")

            let productos = [];

            if (!contenido || contenido == "[]") {
                producto.id = 1;
                productos.push(producto)
            } else {
                const listaProductos = JSON.parse(contenido);

                producto.id = listaProductos[listaProductos.length - 1].id - (-1);
                listaProductos.push(producto);
                productos = listaProductos;
            }
            producto.timeStamp = Date.now()

            const productosString = JSON.stringify(productos, null, 2);
            await fs.promises.writeFile(`./${this.file}`, productosString)
            return producto.id;
        }
        catch (err) { console.error("Error:", err) };
    }
    async getById(num) {
        const contenido = await fs.promises.readFile(`./${this.file}`, "utf-8")
        if (!contenido) {
            return null;
        }
        else {
            let lista = JSON.parse(contenido)
            return lista[num - 1]
        }
    }
    async getAll() {
        try {
            const contenido = await fs.promises.readFile(`./${this.file}`, 'utf-8')
            const listaProductos = JSON.parse(contenido)
            return listaProductos;
        }
        catch (err) {
            console.log(err)
        }
    }
    async deleteById(num) {
        const contenido = await fs.promises.readFile(`./${this.file}`, "utf-8")
        if (!contenido) {
            return;
        }
        else {
            let lista = JSON.parse(contenido)
            let error = true

            let listaFinal = [];
            lista.forEach(element => {
                if (element.id != num) listaFinal.push(element);
                else error = false;
            })
            const listaString = JSON.stringify(listaFinal)
            await fs.promises.writeFile(`./${this.file}`, listaString)
            return error;
        }
    }
    async deleteAll() {
        try {
            await fs.promises.writeFile(`./${this.file}`, "")
        }
        catch (err) {
            console.log(err)
        }
    }
    async replace(arr){
        this.deleteAll();
        try{
            await fs.promises.writeFile(`./${this.file}`, JSON.stringify(arr))
        }catch(err){console.log(err)}
    }

}

let producto1 = { "title": "whatever", "price": "$$$", thombnail: "www.imagenrandom.com/rutarandom1" }
let producto2 = { "title": "some title", "price": "$$$$", thombnail: "www.imagenrandom.com/rutarandom2" }
let producto3 = { "title": "cheap one", "price": "$$", thombnail: "www.imagenrandom.com/rutarandom3" }



let producto = new Contenedor("productos.txt")

const main = async () => {
    let obj = await producto.save(producto1)
    console.log(obj)
    let obj2 = await producto.save(producto2)
    console.log(obj2)
    let obj3 = await producto.save(producto3)
    console.log(obj3)

    let list = await producto.getAll();
    console.log(list)

    let objObtenido = await producto.getById(2);
    console.log(objObtenido)

}

module.exports = Contenedor
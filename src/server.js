const express = require("express");
const productRouter = require("./routers/product")
const cartRouter = require("./routers/cart")
const app = express();

app.use( express.json() );
app.use( express.urlencoded({ extended: true}) )
// app.use("./middlewares/isAdmin.js")

app.set("port", process.env.PORT || 8080)

app.get("/",(req,res) => {
    res.send({data: Date.now()})
})

app.use("/api/productos", productRouter);
app.use("/api/carrito", cartRouter);


app.listen(app.get("port"), ()=>{
    console.log("servidor abierto")
})
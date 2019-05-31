const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/catalog_products",{useNewUrlParser: true });

const bodyparser=require("body-parser");
const cors=require("cors");
const express=require("express");
const app=express();
const productscontroller=require("./controllers/products.controller");


app.use(cors({origin:"http://localhost:4200"}));
app.use(bodyparser.json())
app.use(productscontroller);

app.listen(3000,()=>{
    console.log("Servidor creado");
});
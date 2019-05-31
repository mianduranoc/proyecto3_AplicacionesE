const app=require("express")();
const Product=require("../models/products.model");

app.get("/products", async(req,res)=>{
    const data= await Product.find(req.body);
    res.json({code:200,data:data});
});

app.post("/products",async (req,res)=>{
    const product={
        prod_name: req.body.prod_name,
        prod_desc: req.body.prod_desc,
        prod_price: req.body.prod_price,
        prod_img_url: req.body.prod_img_url
    };
    const data= await new Product(product).save();
    res.json({code:200,data:data});
});

app.put("/products/:id",async (req,res)=>{
    const product={
        prod_name: req.body.prod_name,
        prod_desc: req.body.prod_desc,
        prod_price: req.body.prod_price,
        prod_img_url: req.body.prod_img_url,
        updated_at: new Date()
    };
    Product.updateOne({_id:req.params.id},{$set:product},{new:true})
    .then(res=>{
        res.json({code:200,data:data});
    }).catch(err=>{
        res.json({code:400,data:err});
    });
});

app.delete("/products/:id",async (req,res)=>{
    Product.deleteOne({_id:req.params.id})
    .then(res=>{
        res.json({code:200,data:data});
    }).catch(err=>{
        res.json({code:400,data:err});
    });
});

module.exports=app;
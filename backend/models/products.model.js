const mongoose=require("mongoose");

module.exports=mongoose.model("Products",new mongoose.Schema({
    prod_name: String,
    prod_desc: String,
    prod_price: Number,
    prod_img_url: String,
    updated_at: { type: Date, default: Date.now }
}));
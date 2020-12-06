const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const productSchema = new mongoose.Schema({
    product_name : {
        type : String,
        trim : true,
        maxlength : 20,
        required : true
    },
    description : {
        type : String,
        maxlength : 50,
        required : true
    },
    category : {
        type : ObjectId,
        ref : "Category",
        required : true
    },
    price : {
        type : Number,
        trim : true,
        required : true
    },
    stock : {
        type : Number,
        trim : true,
    },
    sold : {
        type : Number,
        default : 0,
    },
    photo : {
        data : Buffer,
        contentType : String
    }
},{timestamps : true})

module.exports = mongoose.model("Product",productSchema);
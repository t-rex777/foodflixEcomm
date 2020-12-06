const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const categorySchema = new mongoose.Schema({
    category_name : {
        type : String,
        trim : true,
        maxlength : 20,
        required : true
    },
    products : {
        type : ObjectId,
        ref : "Category",
        maxlength : 20,
    }
},{timestamps : true})

module.exports = mongoose.model("Category",categorySchema);
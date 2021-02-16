const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    productId: {
      type: ObjectId,
      ref: "Category",
      maxlength: 20,
      required: true,
    },
    productName : {
      type : String,
      required :true
    },
    price: {
      type: Number,
      trim: true,
      required: true,
    },
    quantity: {
      type: Number,
      trim: true,
      required : true,
      default:1
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);

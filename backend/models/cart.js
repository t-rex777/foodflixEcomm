const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    product: {
      type: ObjectId,
      ref: "Category",
      maxlength: 20,
      required: true,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
    },
    quantity: {
      type: Number,
      trim: true,
      required : true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);

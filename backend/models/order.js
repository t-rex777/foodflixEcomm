const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const orderSchema = new mongoose.Schema(
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
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);

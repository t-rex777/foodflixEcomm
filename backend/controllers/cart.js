const cart = require("../models/cart");
const Cart = require("../models/cart");

exports.getProductsFromCart = (req, res) => {
  Cart.find().exec((err, cart) => {
    if (err) {
      return res.status(400).json({
        error: "Cart is empty",
      });
    }
    return res.json(cart);
  });
};

exports.addProductToCart = (req, res) => {
  const cartProduct = new Cart(req.body);
  cartProduct.save((err, pro) => {
    if (err) {
      return res.status(400).json({
        error: "Product did not saved in the cart",
      });
    }
    res.json({ pro });
  });
};

exports.updateProductInCart = (req, res) => {
  const cartId = req.params.cartId;
  Cart.updateOne(
    { _id: cartId },
    {
      $set: {
        price: req.body.price,
        quantity: req.body.quantity,
      },
    },
  ).exec((err, updatedCart) => {
    if (err) {
      return res.send(err);
    }
     res.send("Updated successfully");
  });

};

exports.deleteProductInCart = (req, res) => {
  const cartId = req.params.cartId;
  Cart.deleteOne({ _id: cartId }, (err) => {
    if (err) {
      return res.status(400).json({
        error: "Product did not remove from cart database",
      });
    }
    return res.json({
      message: `Product id ${cartId} removed successfully!`,
    });
  });
};

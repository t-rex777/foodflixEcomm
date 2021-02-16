const {
  getProductsFromCart,
  addProductToCart,
  updateProductInCart,
  deleteProductInCart,
} = require("../controllers/cart");
const express = require("express");
const router = express.Router();
const { getUserById } = require("../controllers/user");
router.param("userId", getUserById);

router.get("/cart/showproducts/:userId",getProductsFromCart);
router.post("/cart/addproduct/:productId/:userId",addProductToCart);
router.put("/cart/updateproduct/:cartId/:userId",updateProductInCart);
router.delete("/cart/deleteproduct/:cartId/:userId",deleteProductInCart);

module.exports = router;
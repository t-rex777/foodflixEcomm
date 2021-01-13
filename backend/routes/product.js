const express = require("express");
const router = express.Router();

const {
  getProductdById,
  getProduct,
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getProductPic,
  
} = require("../controllers/product");
const { getUserById } = require("../controllers/user");

router.param("productId", getProductdById);
router.param("userId", getUserById);

router.get("/products", getAllProducts);
router.get("/product/:productId",getProduct);
router.get("/products/:productId/photo",getProductPic);
router.post("/create/product/:userId", createProduct);
router.put("/update/product/:userId/:productId", updateProduct);
router.delete("/delete/product/:userId/:productId", deleteProduct);

module.exports = router;

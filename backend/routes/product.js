const express = require("express");
const router = express.Router();

const {
  getProductdById,
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");
const { getUserById } = require("../controllers/user");

router.param("productId", getProductdById);
router.param("userId", getUserById);

router.get("/products", getAllProducts);
router.post("/create/product/:userId", createProduct);
router.put("/update/product/:userId/:productId", updateProduct);
router.delete("/delete/products/:userId/:productId", deleteProduct);

module.exports = router;

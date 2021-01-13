const express = require("express");
const router = express.Router();
const {
  getCategoryById,
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory
} = require("../controllers/category");
const { getUserById } = require("../controllers/user");

router.param("categoryId",getCategoryById);
router.param("userId",getUserById);

router.get("/categories",getAllCategories);
router.get("/category/:categoryId",getCategory);
router.post("/create/category/:userId",createCategory);
router.put("/update/category/:userId/:categoryId",updateCategory);
router.delete("/delete/category/:userId/:categoryId",deleteCategory);


module.exports = router;
const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { signUp, signin, signout } = require("../controllers/auth");
const { getAllUsers, getUserById, getUser } = require("../controllers/user");

router.param("userId", getUserById);

router.post("/signin", signin);
router.post(
  "/signup",
  [body("email").isEmail(), body("password").isLength({ min: 6 })],
  signUp
);
router.get("/signout", signout);

router.get("/users", getAllUsers);
router.get("/user/:userId", getUser);

module.exports = router;

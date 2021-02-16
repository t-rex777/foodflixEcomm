const express = require("express");
const router = express.Router();
const {userPayment} = require("../controllers/stripePayment");

router.post("/stripePayment",userPayment);

module.exports = router;
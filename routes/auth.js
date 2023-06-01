const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");

router.post("/signup", authController.signUpUser);
router.post("/signin", authController.siginUser);

module.exports = router;

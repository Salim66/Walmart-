const express = require("express");
const { login, refresh, logout, register } = require("../controllers/authController");

const router = express.Router();

// routing
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/refresh").get(refresh);
router.route("/logout").post(logout);

// export
module.exports = router;

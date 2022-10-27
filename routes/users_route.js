const express = require("express");
const {
  getUsersById,
  register,
  login,
} = require("../controllers/users_controller");

const router = express.Router();

router.get("/users", getUsersById);
router.get("/register", register);
router.get("/login", login);

module.exports = router;

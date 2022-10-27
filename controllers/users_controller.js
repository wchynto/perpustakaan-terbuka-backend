const User = require("../models/user_model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const getUsersById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const register = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    password = await bcrypt.hash(password, 10);
    User.create({ username: username, email: email, password: password });
    const jwt_token = await jwt.sign(
      { username: username, email: email },
      process.env.JWT_SECRET
    );
    res.status(200).json({
      message: "success register",
      islogin: true,
      token: jwt_token,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const login = async (req, res) => {
  try {
    let { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
      const same = await bcrypt.compare(password, user.password);
      if (same) {
        const jwt_token = await jwt.sign(
          { username: user.username, email: user.email },
          process.env.JWT_SECRET
        );
        res.status(200).json({
          message: "success login",
          islogin: true,
          token: jwt_token,
        });
      } else {
        res.status(500).send("invalid password");
      }
    } else {
      res.status(500).send("user not found");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getUsersById,
  register,
  login,
};

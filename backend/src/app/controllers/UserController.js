const User = require("../models/User");
const { hashPassword } = require("../helpers/Helper");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const UserController = {
  login: async (req, res) => {
    const dataUsers = req.body;
    const user = await User.findOne({ username: dataUsers.username });
    if (user && user.comparePassword(dataUsers.password)) {
      user.password = undefined;
      res.json({
        success: true,
        user,
        accessToken: jwt.sign(
          { username: user.username },
          process.env.JWT_SECRET_KEY,
          { expiresIn: process.env.JWT_TTL }
        ),
        refreshToken: jwt.sign(
          { username: user.username },
          process.env.JWT_SECRET_KEY,
          { expiresIn: process.env.JWT_REFRESH_TTL }
        ),
      });
    } else {
      res.json({
        success: false,
        message: "username hoặc mật khẩu không đúng !",
      });
    }
  },
  register: async (req, res) => {
    const dataUsers = req.body;
    dataUsers.password = await hashPassword(dataUsers.password);
    const user = new User(dataUsers);
    await user.save();
    res.json({
      success: true,
      user,
    });
  },
  getAllUser: async (req, res) => {
    try {
      const allUser = await User.find();
      res.json({
        success: true,
        message: "Get All User",
        allUser: allUser,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error,
      });
    }
  },
};

module.exports = UserController;

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
    const isExisted = await User.exists({ username: dataUsers.username });
    if (isExisted) {
      res.json({
        success: false,
        message: "username đã tồn tại !",
      });
    } else {
      const data = req.body;
      data.password = await hashPassword(req.body.password);
      const user = new User(data);
      await user.save();
      res.json({
        success: true,
        user,
      });
    }
  },
};

module.exports = UserController;

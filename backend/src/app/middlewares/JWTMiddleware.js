const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWTAuthMiddleware = {
  async authentication(req, res, next) {
    try {
      const token = req.headers.authorization.substring(7);
      const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
      if (data) {
        const user = await User.findOne({ username: data.username });
        req.user = user;
        next();
      }
    } catch (error) {
      res.status(401).send("Unauthorized");
    }
  },
};

module.exports = JWTAuthMiddleware;

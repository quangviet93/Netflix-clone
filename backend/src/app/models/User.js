const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const User = new Schema(
  {
    username: { type: String, require: true },
    fullname: { type: String, require: true },
    password: { type: String, require: true },
    role: { type: String, default: "user" },
  },
  {
    timestamps: true,
  }
);

User.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};
module.exports = mongoose.model("User", User);

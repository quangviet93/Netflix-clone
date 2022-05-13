const bcrypt = require("bcrypt");

const Helper = {
  async hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password.toString(), salt);
    return hashedPassword;
  },
};

module.exports = Helper;

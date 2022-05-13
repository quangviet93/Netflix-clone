const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Actor = new Schema(
  {
    name: { type: String, require: true },
    birthday: { type: String, require: true },
    nationality: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Actor", Actor);

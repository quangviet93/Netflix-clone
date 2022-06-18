const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Actor = new Schema(
  {
    name: { type: String, require: true, default: "Unknown" },
    birthday: { type: String, require: true, default: "Unknown" },
    nationality: { type: String, require: true, default: "Unknown" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Actor", Actor);

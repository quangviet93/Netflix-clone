const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Genre = new Schema(
  {
    name: { type: String, require: true, default: "Unknown" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Genre", Genre);

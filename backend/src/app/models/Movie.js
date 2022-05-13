const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Movie = new Schema(
  {
    name: { type: String, require: true },
    description: { type: String, require: true },
    genre: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
    actor: [{ type: Schema.Types.ObjectId, ref: "Actor" }],
    thumbnail: { type: String },
    video: { type: String, require: true },
    trailer: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Movie", Movie);

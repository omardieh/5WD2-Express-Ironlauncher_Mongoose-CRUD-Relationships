const { Schema, model } = require("mongoose");

const bookSchema = new Schema(
  {
    title: String,
    description: String,
  },
  { timestamps: true }
);

module.exports = model("Book", bookSchema);

const { Schema, model, mongoose } = require("mongoose");

const product = new mongoose.Schema({
  src: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  article: {
    type: Number,
    require: true,
  },
  developer: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  genre: {
    type: String,
    require: true,
  },
  language: {
    type: String,
    require: true,
  },
  the_plot: {
    type: String,
    require: true,
  },
  data: {
    type: String,
    require: true,
  },
  platforms: {
    type: String,
    require: true,
  },
  category: {
    type: Number,
    require: true,
  },
});

module.exports = model("Product", product);
const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  des: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  avilQty: {
    type: Number,
    required: true,
  },
  minQty: {
    type: Number,
    required: true,
  }
});

module.exports = productSchema;

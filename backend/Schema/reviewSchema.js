const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  des: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  rating: {
    type: Number,
    required: true,
  },
});

module.exports = productSchema;

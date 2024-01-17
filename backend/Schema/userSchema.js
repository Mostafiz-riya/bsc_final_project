const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    requied: true,
  },
  image: {
    type: String,
  },
  role: {
    type: String,
    requied: true,
  },
});

module.exports = userSchema;

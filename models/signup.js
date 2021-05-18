const mongoose = require("mongoose");

const signupQuery = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    lowercase: true,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const signupModel = mongoose.model("userData", signupQuery);

module.exports = signupModel;

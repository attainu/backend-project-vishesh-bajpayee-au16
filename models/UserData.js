const mongoose = require("mongoose");

const UserdataSchema = new mongoose.Schema({
  githubRepo: {
    type: Array,
    // required: true,
  },

  activityCount: {
    type: Number,
    // required: true,
  },

  level: {
    type: String,
    // required: true,
  },
  colorCode: {
    type: Number,
    // required: true,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Signup",
    // required: true,
  },
});

const UserdataModel = mongoose.model("userdata", UserdataSchema);

module.exports = UserdataModel;

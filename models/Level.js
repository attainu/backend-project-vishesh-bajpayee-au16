const mongoose = require("mongoose");

const LevelSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Signup",
  },

  level: {
    type: Number,
  },
});

const LevelModel = mongoose.model("level", LevelSchema);

module.exports = LevelModel;

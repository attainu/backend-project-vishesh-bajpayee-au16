const mongoose = require("mongoose");

const ColorPalletteSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Signup",
  },

  colors: {
    type: Array,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ColorPalletteModel = mongoose.model("colorPallette", ColorPalletteSchema);

module.exports = ColorPalletteModel;

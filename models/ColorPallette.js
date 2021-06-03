const mongoose = require("mongoose");

const ColorPalletteSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Signup",
  },
  palletteName: {
    type: String,
  },

  palletteColors: {
    color01: {
      type: String,
    },
    color02: {
      type: String,
    },
    color3: {
      type: String,
    },
    color04: {
      type: String,
    },
    color05: {
      type: String,
    },
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ColorPalletteModel = mongoose.model("colorPallette", ColorPalletteSchema);

module.exports = ColorPalletteModel;

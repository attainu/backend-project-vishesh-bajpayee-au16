const mongoose = require("mongoose");

const PomodoroSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  count: {
    type: Number,
    default: 0,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const PomodoroModel = mongoose.model("pomodoro", PomodoroSchema);

module.exports = PomodoroModel;

const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Signup",
  },
  item: {
    type: {
      String,
    },
  },
  count: {
    type: {
      Number,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TodoModel = mongoose.model("todo", TodoSchema);

module.exports = TodoModel;

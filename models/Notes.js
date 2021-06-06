const mongoose = require("mongoose");

const NotesSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Signup",
  },

  title: {
    type: String,
  },

  content: {
    type: String,
  },
  count: {
    type: Number,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const NotesModel = mongoose.model("Notes", NotesSchema);

module.exports = NotesModel;

const mongoose = require("mongoose");

const NotesHTMLSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
  },

  notesHTML: {
    type: String,
  },
});

const NotesHTMLModel = mongoose.model("notesHTML", NotesHTMLSchema);

module.exports = NotesHTMLModel;

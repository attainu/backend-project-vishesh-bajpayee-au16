const express = require("express");
const router = express.Router();
const NotesModel = require("../models/Notes");
router.get("/dashboard/notes", (req, res) => {
  // Notes.find({ userId: "654321654321654" });

  res.render("notes");
});

router.post("/dashboard/notes", async (req, res) => {
  const newNoteObj = {
    userId: req.session.user._id,
    title: req.body.title,
    content: req.body.content,
    count: req.body.count,
  };

  const newEntry = new NotesModel(newNoteObj);
  await newEntry.save();

  console.log(newEntry);
});

module.exports = router;

const express = require("express");
const router = express.Router();
const NotesModel = require("../models/Notes");
router.get("/dashboard/notes", (req, res) => {
  // Notes.find({ userId: "654321654321654" });

  res.render("notes");
});

router.post("/dashboard/notes", async (req, res) => {
  const userObj = req.session.user;

  const newNoteObj = {
    userId: userObj._id,
    title: req.body.title,
    content: req.body.content,
    count: req.body.count,
  };

  const newEntry = new NotesModel(newNoteObj);
  await newEntry.save();
});

router.delete("/database/notes/delete", async (req, res) => {
  const deleteObj = {
    title: req.body.deletePayload.notesHeading,
    content: req.body.deletePayload.notesPara,
  };

  const checkHeadingObjs = await NotesModel.find({ title: deleteObj.title });
  const checkContentOnjs = await NotesModel.find({
    content: deleteObj.content,
  });
  const userObj = req.session.user;

  if (checkHeadingObjs.userId === userObj.userId) {
    await NotesModel.deleteOne({ title: deleteObj.title });
  }
});

module.exports = router;

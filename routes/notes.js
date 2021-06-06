const express = require("express");
const router = express.Router();
const NotesModel = require("../models/Notes");
router.get("/dashboard/notes", async (req, res) => {
  const userObj = req.session.user;
  const notesHtmlObj = await NotesModel.find({ userId: userObj._id }).lean();

  res.render("notes", {
    notes: notesHtmlObj,
  });
});

router.post("/dashboard/notes", async (req, res) => {
  try {
    const userObj = req.session.user;

    const newNoteObj = {
      userId: userObj._id,
      title: req.body.title,
      content: req.body.content,
      count: req.body.count,
    };

    const newEntry = new NotesModel(newNoteObj);
    await newEntry.save();
  } catch (error) {
    res.render("404");
  }
});

router.delete("/dashboard/notes/delete", async (req, res) => {
  try {
    const deleteObj = {
      title: req.body.deletePayload.notesHeading,
      content: req.body.deletePayload.notesPara,
    };

    const checkHeadingObjs = await NotesModel.find({ title: deleteObj.title });
    const checkContentObjs = await NotesModel.find({
      content: deleteObj.content,
    });
    const userObj = req.session.user;

    if (checkHeadingObjs.userId === userObj.userId) {
      await NotesModel.deleteOne({ title: deleteObj.title });
    }
  } catch (error) {
    res.render("404");
  }
});

router.delete("/dashboard/notes/deleteall", async (req, res) => {
  try {
    const deleteAllPayload = req.body.deleteAllPayload;
    const userObj = req.session.user;
    console.log(deleteAllPayload);
    for (let index = 0; index < deleteAllPayload.length; index++) {
      const headingName = deleteAllPayload[index];

      await NotesModel.deleteOne({ title: headingName });
    }
  } catch (error) {
    res.render("404");
  }
});

router.put("/dashboard/notes/updatehtml", async (req, res) => {
  try {
    const userObj = req.session.user;
    let htmlPayload = req.body.notesHtml;
    const dbObj = await NotesHTMLModel.findOneAndUpdate(
      { userId: userObj._id },
      { notesHTML: htmlPayload }
    );
  } catch (error) {
    res.render("404");
  }
});

module.exports = router;

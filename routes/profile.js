const express = require("express");
const NotesModel = require("../models/Notes");
const TodoModel = require("../models/Todo");
const router = express.Router();

router.post("/profile", async (req, res) => {
  const sessionObj = req.session.user;
  // Getting list of elements specific to user from DB.
  const notesObjList = await NotesModel.find({ userId: sessionObj._id });
  const todoObjList = await TodoModel.find({ userId: sessionObj._id });
  // Total entries in list
  let notesCount = notesObjList.length;
  let todoCount = todoObjList.length;

  // Total Count
  let totalCount = notesCount + todoCount;

  // payload Obj sent to handlebar

  const payloadObj = {
    userDetails: sessionObj,
    notesCount: notesCount,
    todoCount: todoCount,
    totalCount: totalCount,
  };

  res.render("profile", payloadObj);
});

module.exports = router;

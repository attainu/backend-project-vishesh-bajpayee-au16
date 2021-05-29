const express = require("express");
const NotesModel = require("../models/Notes");
const LevelModel = require("../models/Level");
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

  // Level Variables
  let totalCount = notesCount + todoCount;
  let levelCount = 0;
  let levelUpdate = 0;

  //
  if (totalCount < 10) {
    levelCount = 10 - totalCount;
    levelUpdate = 1;
  } else if (totalCount >= 10 && totalCount <= 20) {
    levelCount = 20 - totalCount;
    levelUpdate = 2;
  } else if (totalCount >= 20 && totalCount <= 30) {
    levelUpdate = 3;
    levelCount = 30 - totalCount;
  } else if (totalCount >= 30 && totalCount <= 40) {
    levelUpdate = 4;
    levelCount = 40 - totalCount;
  } else if (totalCount >= 40 && totalCount <= 50) {
    levelUpdate = 5;
    levelCount = 50 - totalCount;
  } else if (totalCount >= 50 && totalCount <= 60) {
    levelUpdate = 6;
    levelCount = 60 - totalCount;
  } else if (totalCount >= 60 && totalCount <= 70) {
    levelUpdate = 7;
    levelCount = 70 - totalCount;
  } else if (totalCount >= 70 && totalCount <= 80) {
    levelUpdate = 8;
    levelCount = 80 - totalCount;
  } else if (totalCount >= 80 && totalCount <= 90) {
    levelUpdate = 9;
    levelCount = 90 - totalCount;
  } else if (totalCount >= 90 && totalCount <= 100) {
    levelUpdate = 10;
    levelCount = 100 - totalCount;
  }

  const levelUpdatedObj = await LevelModel.findOneAndUpdate(
    { userId: sessionObj._id },
    { level: levelUpdate }
  );

  // payload Obj sent to handlebar

  const payloadObj = {
    userDetails: sessionObj,
    notesCount: notesCount,
    todoCount: todoCount,
    totalCount: totalCount,
    levelCount: levelCount,
    level: levelUpdatedObj.level,
  };

  res.render("profile", payloadObj);
});

module.exports = router;

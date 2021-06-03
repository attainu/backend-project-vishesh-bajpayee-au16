const express = require("express");
const router = express.Router();
const PomodoroModel = require("../models/Pomodoro");
router.get("/dashboard/pomodoro", (req, res) => {
  res.render("pomodoro");
});

router.post("/dashboard/pomodoro", async (req, res) => {
  const userObj = req.session.user;

  const pomodoroObjArr = await PomodoroModel.find({
    userId: userObj._id,
  }).lean();
  const pomodoroObj = pomodoroObjArr[0];

  const updatedPomodoro = await PomodoroModel.findOneAndUpdate(
    { userId: userObj._id },
    { count: pomodoroObj.count + 1 }
  );
  res.json(pomodoroObj);
});
module.exports = router;

const express = require("express");
const LevelModel = require("../models/Level");
const router = express.Router();

router.get("/dashboard", (req, res) => {
  if (req.session.isLoggedIn === true) {
    res.render("dashboard", req.session.user);
    return;
  } else {
    res.redirect("/");
  }
});

router.get("/dashboard/data", async (req, res) => {
  const sessionObj = req.session.user;
  const levelUpdatedObj = await LevelModel.find({ userId: sessionObj._id });
  console.log(sessionObj);
  console.log(levelUpdatedObj);
  res.send(levelUpdatedObj);
});

module.exports = router;

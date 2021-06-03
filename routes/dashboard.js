const express = require("express");
const LevelModel = require("../models/Level");
const router = express.Router();

router.get("/dashboard", (req, res) => {
  try {
    if (req.session.isLoggedIn === true) {
      res.render("dashboard", req.session.user);
      return;
    } else {
      res.redirect("/");
    }
  } catch (error) {
    res.send(error);
  }
});

router.get("/dashboard/data", async (req, res) => {
  try {
    const sessionObj = req.session.user;
    const levelUpdatedObj = await LevelModel.find({ userId: sessionObj._id });
    res.send(levelUpdatedObj);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;

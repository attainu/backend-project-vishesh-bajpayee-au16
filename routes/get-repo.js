const express = require("express");
const router = express.Router();
const UserdataModel = require("../models/UserData");
router.post("/dashboard/get-repo", async (req, res) => {
  try {
    const userRepo = req.body.userRepo;

    const userObj = {
      githubRepo: userRepo,
      activityCount: 1,
      level: 1,
      colorCode: 123123,
      user: req.session.user._id,
    };
    const newUserData = await UserdataModel.create(userObj);

    await newUserData.save();

    res.redirect("/dashboard");
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;

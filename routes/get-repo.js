const express = require("express");
const router = express.Router();
const GithubRepoModel = require("../models/GithubRepo");
router.post("/dashboard/get-repo", async (req, res) => {
  try {
    const userRepo = req.body.userRepo;

    const userObj = {
      githubRepo: userRepo,

      user: req.session.user._id,
    };
    const newUserData = await GithubRepoModel.create(userObj);

    await newUserData.save();

    res.redirect("/dashboard");
  } catch (error) {
    res.render("404");
  }
});

module.exports = router;

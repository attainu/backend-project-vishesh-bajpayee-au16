const express = require("express");
const all = require("everyday-fun");
const LevelModel = require("../models/Level");
const GithubRepoModel = require("../models/GithubRepo");
const router = express.Router();

router.get("/dashboard", async (req, res) => {
  try {
    const userObj = req.session.user;
    const quoteObj = all.getRandomQuote();

    const payloadObj = {
      userObj: userObj,
      quote: quoteObj.quote,
      author: quoteObj.author,
    };
    if (req.session.isLoggedIn === true) {
      res.render("dashboard", payloadObj);

      return;
    } else {
      res.redirect("/");
    }
  } catch (error) {
    res.send(error);
  }
});
router.post("/dashboard", (req, res) => {
  const quoteObj = all.getRandomJoke();
  res.send(quoteObj);
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

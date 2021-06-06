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

let recentActivity = [];
router.post("/dashboard/recentactivity", (req, res) => {
  const payloadObj = req.body;
  let colorActivity = `<i class="fas fa-palette"></i>`;
  let todoActivity = `<i class="far fa-list-alt"></i>`;
  let notesActivity = `<i class="far fa-sticky-note"></i>`;
  let pomodoroActivity = `<i class="far fa-clock"></i>`;

  if (payloadObj.putReq === 0) {
    recentActivity.push(notesActivity);
  } else if (payloadObj.putReq === 1) {
    recentActivity.push(todoActivity);
  } else if (payloadObj.putReq === 2) {
    recentActivity.push(pomodoroActivity);
  } else if (payloadObj.putReq === 3) {
    recentActivity.push(colorActivity);
  }

  if (recentActivity.length > 5) {
    recentActivity.shift();
  }
});

router.get("/dashboard/recentactivityupdate", (req, res) => {
  res.send(recentActivity);
});
module.exports = router;

//  const putReqObj = {
//    putReq: 0,
//  };
//  await axios.post("/dashboard/recentactivity", putReqObj);

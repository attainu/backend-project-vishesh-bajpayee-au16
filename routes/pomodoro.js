const express = require("express");
const router = express.Router();

router.get("/dashboard/pomodoro", (req, res) => {
  res.render("pomodoro");
});

module.exports = router;

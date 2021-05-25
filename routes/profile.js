const express = require("express");

const router = express.Router();

router.post("/profile", (req, res) => {
  const userObj = req.session.user;
  res.render("profile", userObj);
});

module.exports = router;

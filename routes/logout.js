const express = require("express");
const router = express.Router();
const session = require("express-session");
router.post("/logout", (req, res) => {
  req.session.isLoggedIn = false;
  res.redirect("/");
});

module.exports = router;

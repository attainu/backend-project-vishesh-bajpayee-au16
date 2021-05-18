const express = require("express");

const router = express.Router();

router.get("/dashboard", (req, res) => {
  if (req.session.isLoggedIn === true) {
    res.render("dashboard");
    return;
  } else {
    res.redirect("/");
  }
});

module.exports = router;

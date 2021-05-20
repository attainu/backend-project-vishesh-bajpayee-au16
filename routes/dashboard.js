const express = require("express");

const router = express.Router();

router.get("/dashboard", (req, res) => {
  if (req.session.isLoggedIn === true) {
    res.render("dashboard", req.session.user);
    return;
  } else {
    res.redirect("/");
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();

router.post("/profile", (req, res) => {
  res.redirect("/profile");
});

module.exports = router;

const express = require("express");
const router = express.Router();

router.get("/contactus/submitted", (req, res) => {
  res.render("submitted");
});

module.exports = router;

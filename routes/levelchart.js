const express = require("express");

const router = express.Router();

router.get("/dashboard/profile/levelchart", (req, res) => {
  res.render("levelchart");
});

module.exports = router;

const express = require("express");
const router = express.Router();

router.get("/dashboard/commitcounter", (req, res) => {
  res.render("commitcounter");
});

module.exports = router;

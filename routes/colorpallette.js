const express = require("express");
const router = express.Router();

router.get("/dashboard/colorpallette", (req, res) => {
  res.render("colorpallette");
});

module.exports = router;

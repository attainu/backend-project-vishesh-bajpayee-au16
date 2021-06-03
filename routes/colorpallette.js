const express = require("express");
const router = express.Router();

router.get("/dashboard/colorpallette", (req, res) => {
  res.render("colorpallette");
});

router.post("/dashboard/colorpallette", (req, res) => {
  const payload = req.body;
  console.log(payload.colorArray);
});

module.exports = router;

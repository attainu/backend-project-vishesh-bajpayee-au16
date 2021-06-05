const express = require("express");

const router = express.Router();

router.get("/contactus", (req, res) => {
  res.render("contactus");
});

router.post("/contactus", (req, res) => {
  const infoObj = req.body;
  console.log(infoObj);
});

module.exports = router;

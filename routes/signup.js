const express = require("express");
const router = express.Router();
const signupModel = require("../models/signup");
router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/signup", (req, res) => {
  res.json(req.body);
});

module.exports = router;

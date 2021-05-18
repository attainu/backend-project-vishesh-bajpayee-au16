const express = require("express");
const router = express.Router();
const SignupModel = require("../models/signup");
const bcrypt = require("bcrypt");

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(hashedPassword);
    const userObj = {
      username: username,
      email: email,
      password: hashedPassword,
    };
    const newUser = new SignupModel(userObj);
    await newUser.save();
    console.log(userObj);
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.send("ERROR OCCURED");
  }
});

module.exports = router;

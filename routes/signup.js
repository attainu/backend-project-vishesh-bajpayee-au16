const express = require("express");
const router = express.Router();
const SignupModel = require("../models/Signup");
const LevelModel = require("../models/Level");
const NotesHTMLModel = require("../models/NotesHTML");
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

    // signupdatas collection

    const userObj = {
      username: username,
      email: email,
      password: hashedPassword,
    };
    const newUser = new SignupModel(userObj);
    console.log(newUser);
    await newUser.save();

    // levels collections

    const level = {
      userId: newUser._id,
      level: 1,
    };
    const levelObj = new LevelModel(level);
    await levelObj.save();

    // notesHTML collections

    const notesHTMLObj = {
      userId: newUser._id,
      notesHTML: "",
    };

    const noteshtmlObj = new NotesHTMLModel(notesHTMLObj);
    await noteshtmlObj.save();

    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.send("ERROR OCCURED");
  }
});

module.exports = router;

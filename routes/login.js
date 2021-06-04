require("dotenv");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const session = require("express-session");
const SignupModel = require("../models/Signup");
const myStore = new session.MemoryStore();

const { SECRET } = process.env;

router.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 4.32e7,
    },
  })
);

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const userObj = await SignupModel.findOne({ username: username });
    const check = await bcrypt.compare(password, userObj.password);
    if (check == true) {
      req.session.isLoggedIn = true;
      req.session.user = userObj;
      res.redirect("/dashboard");
    } else {
      res.send("user not found");
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;

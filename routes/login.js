const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const session = require("express-session");
const SignupModel = require("../models/signup");
const myStore = new session.MemoryStore();

router.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000000,
    },
  })
);

router.post("/login", async (req, res) => {
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
});

module.exports = router;

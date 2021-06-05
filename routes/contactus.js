const express = require("express");
const ContactModel = require("../models/Contact");
const router = express.Router();

router.get("/contactus", (req, res) => {
  res.render("contactus");
});

router.post("/contactus", async (req, res) => {
  const infoObj = req.body;
  // console.log(infoObj);

  const contactObj = {
    firstname: infoObj.firstname,
    lastname: infoObj.lastname,
    email: infoObj.email,
    message: infoObj.message,
  };
  const sentObj = await new ContactModel(contactObj);
  await sentObj.save();
  res.redirect("/contactus/submitted");
});

module.exports = router;

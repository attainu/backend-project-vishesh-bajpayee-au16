const express = require("express");
const NotesModel = require("../models/Notes");
const router = express.Router();

router.post("/profile", (req, res) => {
  res.send("Profile");
});
module.exports = router;

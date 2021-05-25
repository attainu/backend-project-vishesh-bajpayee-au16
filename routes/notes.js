const express = require("express");
const router = express.Router();

router.get("/dashboard/notes", (req, res) => {
  // Notes.find({ userId: "654321654321654" });

  res.render("notes");
});

module.exports = router;

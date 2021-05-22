const express = require("express");
const router = express.Router();

router.get("/dashboard/notes", (req, res) => {
  res.render("notes");
});

module.exports = router;

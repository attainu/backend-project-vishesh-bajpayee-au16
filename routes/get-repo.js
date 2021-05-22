const express = require("express");
const router = express.Router();

router.post("/dashboard/get-repo", (req, res) => {
  const repoURL = req.body.userRepo;
  console.log(repoURL);
  res.redirect("/dashboard");
});

module.exports = router;

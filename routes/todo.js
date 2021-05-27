const express = require("express");
const router = express.Router();
const TodoModel = require("../models/Todo");

router.get("/dashboard/todo", (req, res) => {
  res.render("todo");
});

router.post("/dashboard/todo", async (req, res) => {
  const TodoObj = {
    userId: req.session.user._id,
    item: req.body.item,
    count: req.body.count,
  };

  const newEntry = TodoModel(TodoObj);
  await newEntry.save();
});

router.delete("/dashboard/todo/delete", async (req, res) => {
  const deletObject = req.body;
  const refrenceObj = await TodoModel.find({ item: deletObject.item });
  console.log(refrenceObj);
});
module.exports = router;

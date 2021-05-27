const express = require("express");
const router = express.Router();
const TodoModel = require("../models/Todo");

router.get("/dashboard/todo", (req, res) => {
  res.render("todo");
});

router.post("/dashboard/todo", async (req, res) => {
  const TodoObj = {
    userId: req.session.user_id,
    item: req.body.item,
    count: req.body.count,
  };

  const newEntry = TodoModel(TodoObj);
  await newEntry.save();
});

router.delete("/dashboard/todo/delete", async (req, res) => {
  const deleteObj = req.body.deletePayload;
  const refrenceObj = await TodoModel.deleteOne({ item: deleteObj.item });
});
module.exports = router;

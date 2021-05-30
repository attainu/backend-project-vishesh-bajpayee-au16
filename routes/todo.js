const express = require("express");
const { log } = require("handlebars");
const router = express.Router();
const TodoModel = require("../models/Todo");

router.get("/dashboard/todo", async (req, res) => {
  const userObj = req.session.user;
  const todoListObjs = await TodoModel.find({ userId: userObj._id }).lean();
  console.log(todoListObjs);
  res.render("todo", {
    todo: todoListObjs,
  });
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
  const deleteObj = req.body.deletePayload;
  const refrenceObj = await TodoModel.deleteOne({ item: deleteObj.item });
});

// router.delete("/dashboard/todo/deleteall", async (req, res) => {
//   const payloadObj = req.body.deleteAllPayload;

//   for (let index = 0; index < payloadObj.length; index++) {
//     const item = payloadObj[index];
//     console.log(item);
//   }
// });
module.exports = router;

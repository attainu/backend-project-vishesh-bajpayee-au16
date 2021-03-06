const express = require("express");
const router = express.Router();
const TodoModel = require("../models/Todo");

router.get("/dashboard/todo", async (req, res) => {
  try {
    const userObj = req.session.user;
    const todoListObjs = await TodoModel.find({ userId: userObj._id }).lean();
    console.log(todoListObjs);
    res.render("todo", {
      todo: todoListObjs,
    });
  } catch (error) {
    res.send(error);
  }
});

router.post("/dashboard/todo", async (req, res) => {
  try {
    const TodoObj = {
      userId: req.session.user._id,
      item: req.body.item,
      count: req.body.count,
    };

    const newEntry = TodoModel(TodoObj);
    await newEntry.save();
  } catch (error) {
    res.send(error);
  }
});

router.delete("/dashboard/todo/delete", async (req, res) => {
  try {
    const deleteObj = req.body.deletePayload;
    const refrenceObj = await TodoModel.deleteOne({ item: deleteObj.item });
  } catch (error) {
    res.send(error);
  }
});

router.delete("/dashboard/todo/deleteall", async (req, res) => {
  try {
    const userObj = req.session.user;
    const todoItemArray = req.body.deleteAllPayload;

    for (let index = 0; index < todoItemArray.length; index++) {
      const userItem = todoItemArray[index];
      await TodoModel.deleteOne({ item: userItem });
    }
  } catch (error) {
    res.send(error);
  }
});
module.exports = router;

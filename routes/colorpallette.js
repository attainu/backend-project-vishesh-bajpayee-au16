const express = require("express");
const router = express.Router();
const ColorpalletteModel = require("../models/ColorPallette");

router.get("/dashboard/colorpallette", async (req, res) => {
  const userObj = req.session.user;
  const userColors = await ColorpalletteModel.find({
    userId: userObj._id,
  }).lean();

  // console.log(userColors);

  res.render("colorpallette", {
    pallette: userColors,
  });
});

router.post("/dashboard/colorpallette/", async (req, res) => {
  try {
    const userObj = req.session.user;
    const payload = req.body;
    const newPalletteObj = {
      userId: userObj._id,
      colors: {
        color01: payload.randomColorsArr[0],
        color02: payload.randomColorsArr[1],
        color03: payload.randomColorsArr[2],
        color04: payload.randomColorsArr[3],
        color05: payload.randomColorsArr[4],
      },
    };
    // console.log(payload.randomColorsArr);
    const newPallette = new ColorpalletteModel(newPalletteObj);
    await newPallette.save();
  } catch (error) {
    res.render("404");
  }
});
router.delete("/dashboard/colorpallette/delete", async (req, res) => {
  const userObj = req.session.user;
  const deleteObj = req.body;
  const payloadArr = deleteObj.payload.payload;
  // console.log(payloadArr);
  const userPallette = await ColorpalletteModel.find({ userId: userObj._id });
  await ColorpalletteModel.findOneAndDelete({
    colors: {
      color01: payloadArr[0],
      color02: payloadArr[1],
      color03: payloadArr[2],
      color04: payloadArr[3],
      color05: payloadArr[4],
    },
  });
});

module.exports = router;

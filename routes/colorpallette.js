const express = require("express");
const router = express.Router();
const ColorpalletteModel = require("../models/ColorPallette");

router.get("/dashboard/colorpallette", (req, res) => {
  res.render("colorpallette");
});

router.post("/dashboard/colorpallette/", (req, res) => {
  try {
    const payload = req.body;
    const randomColorArr = payload.colorArray;
    // console.log(randomColorArr);

    router.post("/dashboard/colorpallette/save-pallette", async (req, res) => {
      try {
        const userObj = req.session.user;

        const colorPalletteObj = {
          userId: userObj._id,
          colors: randomColorArr,
        };
        const newPallette = new ColorpalletteModel(colorPalletteObj);
        await newPallette.save();
        res.redirect("/dashboard/colorpallette/");
      } catch (error) {
        res.send(error);
      }
    });
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;

var express = require("express");
var router = express.Router();
var nameDetection = require("../models/name-detection");

/* GET users listing. */
router.get("/:name", function (req, res, next) {
  async function getGender() {
    result = await nameDetection.nameDetection(req.params.name);
    res.json(result);
  }
  getGender();

  //console.log(result);
  //res.send("ok");
});

module.exports = router;

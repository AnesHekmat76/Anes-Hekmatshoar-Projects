var express = require("express");
const { status } = require("express/lib/response");
var router = express.Router();
var nameDetection = require("../models/name-detection");

/* GET users listing. */
router.get("/:name", function (req, res, next) {
  async function getResult() {
    console.log('called');
    result = await nameDetection.nameDetection(req.params.name);
    console.log(result);
    res.status(200);
    res.json(result);
  }
  getResult();
});

module.exports = router;

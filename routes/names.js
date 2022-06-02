var express = require("express");
const { status } = require("express/lib/response");
var router = express.Router();
var nameDetection = require("../models/name-detection");

/* GET users listing. */
router.get("/:name", async function (req, res, next) {
  result = await nameDetection.nameDetection(req.params.name);
  res.status(200);
  res.json(result);
});

module.exports = router;

var express = require("express");
const { status } = require("express/lib/response");
var router = express.Router();
var nameDetection = require("../models/name-detection");

/* GET users listing. */
router.get("/:name", async function (req, res, next) {
  genderResponse = await nameDetection.getGender(req.params.name);
  nationalityResponse = await nameDetection.getNationality(req.params.name);
  definitionResponse = await nameDetection.getDefinition(req.params.name);

  let definitionsArray = definitionResponse.list.map((item) => {
    return item.definition;
  });
  if (
    genderResponse.gender === null ||
    nationalityResponse.country.length === 0 ||
    definitionsArray.length === 0
  ) {
    res.status(404);
    res.send('Not Found');
  } else {
    console.log("here");
    let nameInformation = {
      name: req.params.name,
      gender: genderResponse.gender,
      country_id: nationalityResponse.country[0].country_id,
      definitions: definitionsArray,
    };
    res.status(200);
    res.json(nameInformation);
  }
});

module.exports = router;

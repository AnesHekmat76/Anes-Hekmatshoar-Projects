const axios = require("axios").default;

async function getGender(name) {
  try {
    const response = await axios.get(`https://api.genderize.io/?name=${name}`);
    return response.data.gender;
  } catch (error) {
    return error;
  }
}
async function getNationality(name) {
  try {
    const response = await axios.get(
      `https://api.nationalize.io/?name=${name}`
    );
    return response.data.country[0].country_id;
  } catch (error) {
    return error;
  }
}

async function getDefinition(name) {
    try {
      const response = await axios.get(
        `https://api.urbandictionary.com/v0/define?term=${name}`
      );
      let definitionsArray = response.data.list.map((item) => {
        return item.definition;
      });
      return definitionsArray;
    } catch (error) {
      console.log(error);
      return error;
    };




}

module.exports = {
  nameDetection: async (name) => {
    let gender = await getGender(name);
    let country = await getNationality(name);
    let definitions = await getDefinition(name) ;
    let nameInformation = {
      name: name,
      gender: gender,
      country_id: country,
      definitions: definitions,
    };
    return nameInformation;
  },
};
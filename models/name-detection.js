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
    return response.data;
  } catch (error) {
    return error;
  }
  //   let definition = response.data.list.map((item) => {
  //     return definition;
  //     // definition is an array
  //   });
  //   return response.data.list;
}

module.exports = {
  nameDetection: async (name) => {
    //console.log(typeof(name))
    let gender = await getGender(name);
    let country = await getNationality(name);
    let definitions = await getDefinition(name);
    console.log(definitions);
  },
};

const url = "https://api.urbandictionary.com/v0/define?term=shamim";
const url2 = "https://api.nationalize.io/?name=shamim";

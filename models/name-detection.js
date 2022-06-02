const axios = require("axios").default;

module.exports = {
  getGender: async (name) => {
    try {
      const response = await axios.get(
        `https://api.genderize.io/?name=${name}`
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },
  getNationality: async (name) => {
    try {
      const response = await axios.get(
        `https://api.nationalize.io/?name=${name}`
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },
  getDefinition: async (name) => {
    try {
      const response = await axios.get(
        `https://api.urbandictionary.com/v0/define?term=${name}`
      );

      return response.data;
    } catch (error) {
      return error;
    }
  },
};

const axios = require("axios").default;

module.exports = {
  nameDetection: async (name) => {
    try {
      const response = await axios.get(
        `https://api.genderize.io/?name=${name}`
      );
      return response.data.gender;
    } catch (error) {
      return error;
    }
  },
};

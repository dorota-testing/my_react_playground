const axios = require('axios');

export const makeGetCall = async (url) => {
  try {
    const response = await axios.get(url);
    // console.log('lorem = ', response);
    return response;
  } catch (error) {
    // console.error('my error = ', error);
    // return error;
  }
};

// WARNING!!! NOT TESTED!!!
export const makePostCall = async (url) => {
  try {
    const response = await axios.post(url);
    //console.log(response);
    return response;
  } catch (error) {
    //console.error(error);
  }
};
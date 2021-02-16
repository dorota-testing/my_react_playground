import { makeGetCall } from '../AdminUtils/makeAxiosCalls.js';

const getDatesForPostcode = async (postcode) => {
  postcode = '9781451648546';
  const url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:'+postcode;
  const resp = await makeGetCall(url);
  let myArray = [];
  if(resp.data.items[0].id){
    myArray.push(resp.data.items[0].id);
  }
  return myArray;
}

export default getDatesForPostcode;

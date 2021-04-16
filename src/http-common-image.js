import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: 'https://rpg-image-api.herokuapp.com/',
  //baseURL: 'http://localhost:8090/',
  headers: {
    'Content-type': 'application/json',
  },
});
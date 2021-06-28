import axios from 'axios';

export default axios.create({  // spring boot url
    baseURL: 'http://localhost:8080/api/'
});
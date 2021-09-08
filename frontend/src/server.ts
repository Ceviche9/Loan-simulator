import axios from 'axios';

const api = axios.create({
  baseURL: "https://letalk-backend.herokuapp.com/",
});

export default api;
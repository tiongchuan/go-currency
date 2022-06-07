import axios from "axios";

const API = axios.create({
    baseURL : 'https://openexchangerates.org/api'
  })

export default API
import axios from "axios";

const API = axios.create({baseURL:"https://api.apilayer.com/exchangerates_data"});

export default API;
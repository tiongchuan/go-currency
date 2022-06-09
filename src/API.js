import axios from "axios";

const API = axios.create({
    baseURL:"https://api.apilayer.com/exchangerates_data",
    headers: {
        //'Access-Control-Allow-Headers': 'Authorization',
        'apikey': 'A8RchVZIe3oJWxRDcwWePZmHjn5moxXM'
}
});

export default API;
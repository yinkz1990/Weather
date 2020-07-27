import axios from "axios";
export const FETCH_URL = "FETCH_URL";

const API_KEY = "5a2f7435806d120de8f9528fba33bd08";
const rootUrl = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export default function fetchUrl (city){
    const URL = `${rootUrl}&q=${city},us`;
    const request = axios.get(URL);
    return {
        type: FETCH_URL,
        payload: request

    }
        
    

};


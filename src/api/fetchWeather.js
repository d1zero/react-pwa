import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather"


export const fetchWeather = async (query, API_KEY) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: "metric",
            APPID: API_KEY,
        },
    });

    return data;
};

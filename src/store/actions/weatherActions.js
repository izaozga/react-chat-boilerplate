import axios from "axios";
import {
  WEATHER_API_FAILED,
  WEATHER_API_RECEIVED,
  WEATHER_API_REQUESTED,
} from "../consts";
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_API_URL = `http://api.openweathermap.org/data/2.5/weather`;

export function getCurrentWeather(cityName) {
  return async function (dispatch) {
    dispatch({
      type: WEATHER_API_REQUESTED,
    });
    getWeatherData(cityName).then(
      (response) => {
        dispatch({
          type: WEATHER_API_RECEIVED,
          payload: response.data,
        });
      },
      (error) => {
        dispatch({
          type: WEATHER_API_FAILED,
          payload: error,
        });
      }
    );
  };
}

// not action creator
function getWeatherData(cityName) {
  const url = `${BASE_API_URL}?q=${cityName}&appid=${API_KEY}`;
  return axios.get(url);
}

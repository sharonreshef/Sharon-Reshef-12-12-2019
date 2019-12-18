import axios from "axios";
import {
  GET_CITY_DATA,
  GET_FIVE_DAYS_WEATHER,
  TOGGLE_DEGREES_FORMAT
} from "./types";
import { setAlert } from "./alert";

const apiKey = "ox5MncPoAGSDdNll9XJt1Somn3pQLZcr";
const baseUrl = "//dataservice.accuweather.com";

export const getLocationData = () => async dispatch => {
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  async function success(pos) {
    var crd = pos.coords;
    try {
      const res = await axios.get(
        `${baseUrl}/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${crd.latitude}%2C${crd.longitude}&toplevel=true"`
      );
      dispatch(
        getCityData(
          res.data.LocalizedName,
          res.data.Key,
          res.data.Country.LocalizedName
        )
      );
    } catch (err) {
      const error = err;
      dispatch(setAlert(error, "danger"));
    }
  }

  function error(err) {
    dispatch(getCityData("Tel Aviv", "215854", "Israel"));
  }

  navigator.geolocation.getCurrentPosition(success, error, options);
};

export const getCityData = (name, key, country) => async dispatch => {
  try {
    const res = await axios.get(
      `${baseUrl}/currentconditions/v1/${key}?apikey=${apiKey}`
    );

    const city = {
      currentWeatherData: res.data[0],
      name,
      key,
      country
    };
    dispatch({
      type: GET_CITY_DATA,
      payload: city
    });
    dispatch(getFiveDaysWeather(key));
  } catch (err) {
    const error = err.response.data.Message;
    dispatch(setAlert(error, "danger"));
  }
};

export const getFiveDaysWeather = key => async dispatch => {
  try {
    const res = await axios.get(
      `${baseUrl}/forecasts/v1/daily/5day/${key}?apikey=${apiKey}&metric=true`
    );

    dispatch({
      type: GET_FIVE_DAYS_WEATHER,
      payload: res.data.DailyForecasts
    });
  } catch (err) {
    const error = err.response.data.Message;
    dispatch(setAlert(error, "danger"));
  }
};

export const toggleDegreesFormat = currentFormat => dispatch => {
  dispatch({
    type: TOGGLE_DEGREES_FORMAT,
    payload: currentFormat
  });
};

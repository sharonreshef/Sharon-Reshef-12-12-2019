import axios from "axios";
import { GET_CITY_DATA, GET_FIVE_DAYS_WEATHER } from "./types";
import { setAlert } from "./alert";

export const getCityData = (name, key, country) => async dispatch => {
  try {
    const res = await axios.get(
      `currentconditions/v1/${key}?apikey=${Tkahw7D9GyntmjA2CKfI14zzUsTeVIbk}`
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
      `forecasts/v1/daily/5day/${key}?apikey=${process.env.REACT_APP_API_KEY}&metric=true`
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

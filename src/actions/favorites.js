import axios from "axios";
import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  FETCH_FAVORITES_DATA
} from "./types";
import { setAlert } from "./alert";

const apiKey = "58jiHIZg4nYOHReRyhDYtotr0MzpQJzy";
const baseUrl = "//dataservice.accuweather.com";

export const addToFavorites = city => dispatch => {
  try {
    dispatch({
      type: ADD_TO_FAVORITES,
      payload: city
    });
  } catch (err) {
    console.error(err);
  }
};

export const removeFromFavorites = city => dispatch => {
  try {
    dispatch({
      type: REMOVE_FROM_FAVORITES,
      payload: city
    });
  } catch (err) {
    const error = err.response.data.Message;
    dispatch(setAlert(error, "danger"));
  }
};

export const fetchFavoritesData = (name, key, country) => async dispatch => {
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
      type: FETCH_FAVORITES_DATA,
      payload: city
    });
    dispatch(addToFavorites(city));
  } catch (err) {
    const error = err.response.data.Message;
    dispatch(setAlert(error, "danger"));
  }
};

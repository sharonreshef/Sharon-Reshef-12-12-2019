import axios from "axios";

import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  FETCH_FAVORITES_DATA
} from "./types";
import favorites from "../reducers/favorites";
import { getCityData, getFiveDaysWeather } from "./city";

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
    console.error(err);
  }
};

export const fetchFavoritesData = (name, key, country) => async dispatch => {
  try {
    const res = await axios.get(
      `currentconditions/v1/${key}?apikey=${process.env.REACT_APP_API_KEY}`
    );
    // const res = {
    //   LocalObservationDateTime: "2019-12-15T12:16:00+02:00",
    //   EpochTime: 1576404960,
    //   WeatherText: "Mostly cloudy",
    //   WeatherIcon: 6,
    //   HasPrecipitation: false,
    //   PrecipitationType: null,
    //   IsDayTime: true,
    //   Temperature: {
    //     Metric: {
    //       Value: 19.8,
    //       Unit: "C",
    //       UnitType: 17
    //     },
    //     Imperial: {
    //       Value: 68,
    //       Unit: "F",
    //       UnitType: 18
    //     }
    //   },
    //   MobileLink:
    //     "http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
    //   Link:
    //     "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
    // };
    const city = {
      //from API
      // weatherData: res.data[0],
      //from local
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
    console.error(err);
  }
};

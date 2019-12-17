import axios from "axios";
import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  FETCH_FAVORITES_DATA
} from "./types";
import { setAlert } from "./alert";

const apiKey = "Tkahw7D9GyntmjA2CKfI14zzUsTeVIbk";

export const addToFavorites = city => dispatch => {
  try {
    // // if (localStorage.getItem("favorites") === null) {
    // //   localStorage.setItem("favorites", city.key);
    // // }
    // if (localStorage.getItem("favorites") === null) {
    //   var favorites = [city.key];
    //   // favorites.push(JSON.parse(localStorage.getItem("favorites")));
    //   localStorage.setItem("favorites", JSON.stringify(favorites));
    // } else {
    //   let favorites = JSON.parse(localStorage.getItem("favorites"));
    //   console.log(favorites);
    //   favorites.push(parseInt(city.key));
    //   console.log(favorites);
    //   localStorage.setItem("favorites", JSON.stringify(favorites));
    // }
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
    // let favorites = JSON.parse(localStorage.getItem("favorites"));
    // console.log(favorites);
    // let newfavorites = favorites.filter(key => key !== city.key);
    // console.log(newfavorites);
    // localStorage.setItem("favorites", JSON.stringify(newfavorites));
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
      `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${apiKey}`
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

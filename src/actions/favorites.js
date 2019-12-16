import axios from "axios";

import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "./types";

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

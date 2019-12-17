import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  FETCH_FAVORITES_DATA
} from "../actions/types";

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_FAVORITES_DATA:
      return state.filter(city => city.key !== payload.key);
    case ADD_TO_FAVORITES:
      return [...state, payload];
    case REMOVE_FROM_FAVORITES:
      return state.filter(city => city.key !== payload.key);
    default:
      return state;
  }
}

import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../actions/types";

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;
  console.log(payload);

  switch (type) {
    case ADD_TO_FAVORITES:
      return [...state, payload];
    case REMOVE_FROM_FAVORITES:
      return state.filter(city => city.key !== payload.key);
    default:
      return state;
  }
}

import {
  GET_CITY_DATA,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  GET_FIVE_DAYS_WEATHER
} from "../actions/types";

const initialState = {
  name: null,
  key: null,
  country: null,
  currentWeatherData: null,
  fiveDaysWeather: null,
  isFavorite: false,
  isCelsius: true,
  isLoading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CITY_DATA:
      return {
        ...state,
        name: payload.name,
        key: payload.key,
        country: payload.country,
        currentWeatherData: payload.currentWeatherData
      };
    case ADD_TO_FAVORITES:
      return Object.assign({}, state, {
        isFavorite: true
      });
    case REMOVE_FROM_FAVORITES:
      if (state.key === payload.key) {
        return Object.assign({}, state, {
          isFavorite: false
        });
      } else {
        return state;
      }
    case GET_FIVE_DAYS_WEATHER:
      return {
        ...state,
        fiveDaysWeather: payload,
        isLoading: false
      };
    default:
      return state;
  }
}

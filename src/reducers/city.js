import { GET_CITY_DATA } from "../actions/types";

const initialState = {
  cityName: null,
  cityKey: null,
  country: null,
  weatherData: null,
  isFavorites: false,
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  console.log(payload);

  switch (type) {
    case GET_CITY_DATA:
      return {
        ...state,
        cityName: payload.cityName,
        cityKey: payload.cityKey,
        country: payload.country,
        weatherData: payload.weatherData
      };

    default:
      return state;
  }
}

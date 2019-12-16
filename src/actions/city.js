import axios from "axios";

import { GET_CITY_DATA } from "./types";

export const getCityData = value => async dispatch => {
  try {
    // const res = await axios.get(
    //   `currentconditions/v1/${value.key}?apikey=${process.env.REACT_APP_API_KEY}`
    // );
    const res = {
      LocalObservationDateTime: "2019-12-15T12:16:00+02:00",
      EpochTime: 1576404960,
      WeatherText: "Mostly cloudy",
      WeatherIcon: 6,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 19.8,
          Unit: "C",
          UnitType: 17
        },
        Imperial: {
          Value: 68,
          Unit: "F",
          UnitType: 18
        }
      },
      MobileLink:
        "http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
      Link:
        "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
    };
    const city = {
      //from API
      // weatherData: res.data[0],
      //from local
      currentWeatherData: res,
      name: value.name,
      key: value.key,
      country: value.country
    };
    dispatch({
      type: GET_CITY_DATA,
      payload: city
    });
  } catch (err) {
    console.error(err);
  }
};

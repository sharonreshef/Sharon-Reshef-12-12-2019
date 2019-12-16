import axios from "axios";

import { GET_CITY_DATA, GET_FIVE_DAYS_WEATHER } from "./types";

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
    dispatch(getFiveDaysWeather(city.key));
  } catch (err) {
    console.error(err);
  }
};

export const getFiveDaysWeather = key => async dispatch => {
  try {
    // const res = await axios.get(
    //   `forecasts/v1/daily/5day/${key}?apikey=${process.env.REACT_APP_API_KEY}&metric=true`
    // );
    const res = {
      Headline: {
        EffectiveDate: "2019-12-21T07:00:00+02:00",
        EffectiveEpochDate: 1576904400,
        Severity: 7,
        Text: "Mostly sunny this weekend",
        Category: "",
        EndDate: null,
        EndEpochDate: null,
        MobileLink:
          "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?unit=c&lang=en-us",
        Link:
          "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
      },
      DailyForecasts: [
        {
          Date: "2019-12-16T07:00:00+02:00",
          EpochDate: 1576472400,
          Temperature: {
            Minimum: {
              Value: 10.9,
              Unit: "C",
              UnitType: 17
            },
            Maximum: {
              Value: 20.9,
              Unit: "C",
              UnitType: 17
            }
          },
          Day: {
            Icon: 1,
            IconPhrase: "Sunny",
            HasPrecipitation: false
          },
          Night: {
            Icon: 34,
            IconPhrase: "Mostly clear",
            HasPrecipitation: false
          },
          Sources: ["AccuWeather"],
          MobileLink:
            "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
          Link:
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
        },
        {
          Date: "2019-12-17T07:00:00+02:00",
          EpochDate: 1576558800,
          Temperature: {
            Minimum: {
              Value: 10.6,
              Unit: "C",
              UnitType: 17
            },
            Maximum: {
              Value: 21.1,
              Unit: "C",
              UnitType: 17
            }
          },
          Day: {
            Icon: 2,
            IconPhrase: "Mostly sunny",
            HasPrecipitation: false
          },
          Night: {
            Icon: 33,
            IconPhrase: "Clear",
            HasPrecipitation: false
          },
          Sources: ["AccuWeather"],
          MobileLink:
            "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
          Link:
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"
        },
        {
          Date: "2019-12-18T07:00:00+02:00",
          EpochDate: 1576645200,
          Temperature: {
            Minimum: {
              Value: 10.6,
              Unit: "C",
              UnitType: 17
            },
            Maximum: {
              Value: 21.4,
              Unit: "C",
              UnitType: 17
            }
          },
          Day: {
            Icon: 1,
            IconPhrase: "Sunny",
            HasPrecipitation: false
          },
          Night: {
            Icon: 33,
            IconPhrase: "Clear",
            HasPrecipitation: false
          },
          Sources: ["AccuWeather"],
          MobileLink:
            "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
          Link:
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"
        },
        {
          Date: "2019-12-19T07:00:00+02:00",
          EpochDate: 1576731600,
          Temperature: {
            Minimum: {
              Value: 10.3,
              Unit: "C",
              UnitType: 17
            },
            Maximum: {
              Value: 22.9,
              Unit: "C",
              UnitType: 17
            }
          },
          Day: {
            Icon: 1,
            IconPhrase: "Sunny",
            HasPrecipitation: false
          },
          Night: {
            Icon: 33,
            IconPhrase: "Clear",
            HasPrecipitation: false
          },
          Sources: ["AccuWeather"],
          MobileLink:
            "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
          Link:
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us"
        },
        {
          Date: "2019-12-20T07:00:00+02:00",
          EpochDate: 1576818000,
          Temperature: {
            Minimum: {
              Value: 10,
              Unit: "C",
              UnitType: 17
            },
            Maximum: {
              Value: 22.1,
              Unit: "C",
              UnitType: 17
            }
          },
          Day: {
            Icon: 1,
            IconPhrase: "Sunny",
            HasPrecipitation: false
          },
          Night: {
            Icon: 33,
            IconPhrase: "Clear",
            HasPrecipitation: false
          },
          Sources: ["AccuWeather"],
          MobileLink:
            "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
          Link:
            "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us"
        }
      ]
    };
    dispatch({
      type: GET_FIVE_DAYS_WEATHER,
      payload: res.DailyForecasts
    });
  } catch (err) {
    console.error(err);
  }
};

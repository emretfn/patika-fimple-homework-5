import { createContext, useEffect, useState } from "react";
import { Forecast, Weather } from "../lib/types";
import { API_KEY, BASE_API_URL } from "../lib/config";

interface Context {
  getCurrentWeather: (searchQuery: string) => void;
  weather: Weather | null;
  forecast: Forecast[] | null;
  days: string[];
}

export const WeatherContext = createContext<Context>({} as Context);

export const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [forecast, setForecast] = useState<Forecast[] | null>(null);

  useEffect(() => {
    getCurrentWeather("Konya");
  }, []);

  useEffect(() => {
    if (weather) {
      getForecast(weather.coords.lat, weather.coords.lon);
    }
  }, [weather]);

  const getCurrentWeather = async (searchQuery: string) => {
    try {
      const res = await fetch(
        `${BASE_API_URL}/weather?q=${searchQuery}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) {
        throw new Error("City not found");
      }
      const data = await res.json();
      console.log("data", data);
      const newWeather: Weather = {
        name: data.name,
        description: data.weather[0].description,
        temp: data.main.temp,
        feelsLike: data.main.feels_like,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        wind: data.wind.speed,
        icon: data.weather[0].id,
        coords: {
          lat: data.coord.lat,
          lon: data.coord.lon,
        },
      };
      setWeather(newWeather);

      return newWeather;
    } catch (error) {
      console.log(error);
    }
  };

  const getForecast = async (lat: number, lon: number) => {
    try {
      const res = await fetch(
        `${BASE_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );

      if (!res.ok) {
        throw new Error("City not found");
      }
      const data = await res.json();

      setForecast(data.list);
    } catch (error) {
      console.log(error);
    }
  };

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <WeatherContext.Provider
      value={{
        getCurrentWeather,
        weather,
        forecast,
        days,
      }}
      //   value={{
      //     weather,
      //     setWeather,
      //     forecast,
      //     setForecast,
      //     getCurrentWeather,
      //     forecastFetch,
      //     days
      //   }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

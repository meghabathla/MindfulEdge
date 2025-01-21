import React, { useState, useEffect } from "react";
import axios from "axios";
import { TiWeatherSunny } from "react-icons/ti";

const getLocationPoints = async () => {
  if (navigator.geolocation) {
    const promise = new Promise<{ lat: number; long: number }>((res) => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          res({
            lat: position.coords.latitude,
            long: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    });
    const { lat, long } = await promise;
    return { lat, long };
  }

  // else {
  //   console.log("Geolocation is not supported by this browser.");
  // }
};

export const WeatherWidget = () => {
  const [city, setCity] = useState<string>("Delhi");
  const [temperature, setTemperature] = useState<number>(23);
  const [error, setError] = useState<unknown>();

  const getCityWeatherData = async () => {
    const location = await getLocationPoints();
    if (location) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.long}&units=metric&appid=8a0b50cebe4d4758052e5a7cf1451b7c`
        );
        console.log(response);
        if (response.data.name) {
          setCity(response.data.name);
        }
        if (response.data.main.temp) {
          setTemperature(response.data.main.temp);
        }
      } catch (error) {
        console.log(
          "Error fetching weather data in getCityWeatherData API:",
          error
        );
        setError(error);
      }
    } else {
      setCity("NA");
      setTemperature(0);
    }
  };

  useEffect(() => {
    getCityWeatherData();
  }, []);

  return (
    <div className="weather_section">
      <div className="weather_degree_day">
        <TiWeatherSunny size={20} style={{ paddingRight: "5px" }} />
        <div style={{ fontSize: "20px" }}>{temperature}°</div>
      </div>
      <div className="header_text">{city}</div>
    </div>
  );
};

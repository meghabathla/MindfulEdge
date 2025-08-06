import { useState, useEffect } from "react";
import axios from "axios";
import { TiWeatherSunny } from "react-icons/ti";
import { getLocationPoints } from "./LocationPoints";
import { OPENWEATHER_API_KEY } from "./weatherConstant";

export const WeatherWidget = () => {
  const [location, setLocation] = useState<string>("");
  const [temperature, setTemperature] = useState<number>();
  const [iconCode, setIconCode] = useState<string | null>(null);

  const getCityWeatherData = async () => {
    const location = await getLocationPoints();
    if (location) {
      try {
        console.log("API KEY:", import.meta.env.VITE_OPENWEATHER_API_KEY);

        console.log(OPENWEATHER_API_KEY);
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${
            location.lat
          }&lon=${location.long}&units=metric&appid=${
            import.meta.env.VITE_OPENWEATHER_API_KEY
          }`
        );
        const weatherData = {
          location: response.data.name,
          temperature: response.data.main.temp,
          iconCode: response.data.weather?.[0]?.icon || null,
        };
        // Set state
        setLocation(weatherData.location);
        setTemperature(weatherData.temperature);
        setIconCode(weatherData.iconCode);

        // Store in cache for 5 minutes
        localStorage.setItem("weatherData", JSON.stringify(weatherData));
        localStorage.setItem(
          "weatherDataExpiry",
          (new Date().getTime() + 5 * 60 * 1000).toString()
        );
      } catch (error) {
        console.log("Error fetching weather data:", error);
      }
    } else {
      console.log("else");
      setLocation("Delhi");
      setTemperature(22);
    }
  };

  useEffect(() => {
    const cached = localStorage.getItem("weatherData");
    const cacheExpiry = localStorage.getItem("weatherDataExpiry");

    if (cached && cacheExpiry && new Date().getTime() < Number(cacheExpiry)) {
      const data = JSON.parse(cached);
      console.log(data, "data");
      setLocation(data.location);
      setTemperature(data.temperature);
      setIconCode(data.iconCode);
      return;
    } else {
      getCityWeatherData();
    }
  }, []);

  const iconUrl = iconCode
    ? `https://openweathermap.org/img/wn/${iconCode}@2x.png`
    : null;

  return (
    <div className="weather_section">
      <div className="weather_degree_day">
        {iconUrl ? (
          <img
            src={iconUrl}
            alt="weather icon"
            style={{ width: 32, height: 32, marginRight: 5 }}
          />
        ) : (
          <TiWeatherSunny size={20} style={{ paddingRight: "5px" }} />
        )}
        <div style={{ fontSize: "20px" }}>{temperature}°</div>
      </div>
      <div className="header_text">{location}</div>
    </div>
  );
};

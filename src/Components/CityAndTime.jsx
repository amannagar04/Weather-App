import Forecast from './Forecast'
import sun from "../assets/sun.png"
import Clock from './Clock'
import sunrise from "../assets/sunrise.png";
import sunset from "../assets/sunset.png";
import humidity from "../assets/humidity.png";
import windImage from "../assets/wind.png";
import pressure from "../assets/pressure.png";
import uv from "../assets/uv.png";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";

const CityAndTime = ({cityName, lat, lon, setLat, setLon}) => {

  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [uvIndex, setUvIndex] = useState(null);

  const fetchData = async () => {
    try {
      const encodedCity = encodeURIComponent(cityName);
      let url;

      if (encodedCity) {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&units=metric&appid=1f1433cdbbd15597af571b666b08bc0c`;
      } else if (lat && lon) {
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=1f1433cdbbd15597af571b666b08bc0c`;
      } else {
        // toast.error("Missing city name or coordinates");
      }

      const currentWeather = await axios.get(url);
      setWeatherData(currentWeather.data);

      const { coord } = currentWeather.data;
      setLat(coord.lat);
      setLon(coord.lon);

      const forecast = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coord.lat}&lon=${coord.lon}&units=metric&appid=1f1433cdbbd15597af571b666b08bc0c`);
      setForecastData(forecast.data);

      const uv = await axios.get(`https://api.openweathermap.org/data/2.5/uvi?lat=${coord.lat}&lon=${coord.lon}&appid=1f1433cdbbd15597af571b666b08bc0c`);
      setUvIndex(uv.data.value);


    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!cityName && (!lat || !lon)) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setLat(latitude);
          setLon(longitude);
          fetchData(latitude, longitude);
        },
        (error) => {
          console.log("Geolocation error:", error);
          toast.error("Location access denied. Please enter a city manually.");
        }
      );
    } else {
      fetchData(lat, lon);
    }
  }, [cityName, lat, lon]);

  if (!weatherData || !forecastData) {
    return <div className='flex items-center justify-center text-white text-2xl md:text-6xl'>Loading...</div>
  }

  const { main, weather, sys, wind } = weatherData;
  const { list } = forecastData;

  const weatherIconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;



  return (
    <>
    <div className="flex flex-col xl:flex-row gap-4">
      {/* Left section: city and time */}
      <div className="flex-grow m-4 h-auto md:h-72 bg-[#050e1fde] shadow-2xl shadow-black rounded-lg text-white p-4 flex flex-col justify-between items-center">
        <h1 className="text-3xl font-bold">{cityName || weatherData.name}</h1>
        <img src={weatherIconUrl} alt="WeatherImage" className="w-34 select-none" />
        <Clock />
      </div>

      {/* Right Section: Weather Details */}
      <div className="flex-grow h-auto md:h-72 bg-[#050e1d] shadow-2xl rounded-lg text-white m-4 p-4 flex flex-col justify-around md:flex-row items-center md:items-stretch gap-4">
        
        {/* Temperature + Feels Like */}
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-7xl font-bold">{main.temp}°C</h1>
          <p className="text-sm md:text-md font-medium">Feels like: <span className="text-xl md:text-2xl font-bold">{main.feels_like}°C</span></p>
        </div>

        {/* Sunrise and Sunset */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Sunrise */}
          <div className="flex items-center gap-2">
            <img src={sunrise} alt="sunrise" className="h-8 md:h-10 select-none" />
            <div className="text-center">
              <h6>Sunrise</h6>
              <p>{new Date(sys.sunrise * 1000).toLocaleTimeString()}</p>
            </div>
          </div>

          {/* Sunset */}
          <div className="flex items-center gap-2">
            <img src={sunset} alt="sunset" className="h-8 md:h-10 select-none" />
            <div className="text-center">
              <h6>Sunset</h6>
              <p>{new Date(sys.sunset * 1000).toLocaleTimeString()}</p>
            </div>
          </div>
        </div>

        {/* Weather Icon + Info */}
        <div className="flex-col justify-center items-center">
          <img src={weatherIconUrl} alt="sun" className="h-36 md:h-52 select-none" />
          <p className="font-bold text-xl text-center">{[weather[0].description]}</p>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-2 gap-4 text-sm font-semibold">
          <div className="flex flex-col items-center gap-2">
            <img src={humidity} alt="humidity" className="h-8 md:h-10 select-none" />
            <h6>Humidity</h6>
            <p>{main.humidity}%</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src={windImage} alt="windSpeed" className="h-8 md:h-10 select-none" />
            <h6>Wind Speed</h6>
            <p>{wind.speed} km/h</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src={pressure} alt="pressure" className="h-8 md:h-10 select-none" />
            <h6>Pressure</h6>
            <p>{main.pressure} hPa</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src={uv} alt="uv" className="h-8 md:h-10 select-none" />
            <h6>UV</h6>
            <p>{uvIndex !== null ? uvIndex : 'N/A'}</p>
          </div>
        </div>
      </div>
    </div>
    <Forecast forecast={list} />
    </>
  )
}

export default CityAndTime
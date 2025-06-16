import sun from "../assets/sun.png"
import Clock from './Clock'
import sunrise from "../assets/sunrise.png";
import sunset from "../assets/sunset.png";
import humidity from "../assets/humidity.png";
import wind from "../assets/wind.png";
import pressure from "../assets/pressure.png";
import uv from "../assets/uv.png";

const CityAndTime = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-4">
      {/* Left section: city and time */}
      <div className="flex-grow h-auto md:h-72 bg-[#050e1fde] shadow-2xl shadow-black rounded-lg text-white p-4 flex flex-col justify-between items-center">
        <h1 className="text-3xl font-bold">Bengaluru</h1>
        <img src={sun} alt="WeatherImage" className="w-24 select-none" />
        <Clock />
      </div>

      {/* Right Section: Weather Details */}
      <div className="flex-grow h-auto md:h-72 bg-[#050e1d] shadow-2xl rounded-lg text-white p-4 flex flex-col justify-around md:flex-row items-center md:items-stretch gap-4">
        
        {/* Temperature + Feels Like */}
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-7xl font-bold">24.61°C</h1>
          <p className="text-sm md:text-md font-medium">Feels like: <span className="text-xl md:text-2xl font-bold">25.45°C</span></p>
        </div>

        {/* Sunrise and Sunset */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Sunrise */}
          <div className="flex items-center gap-2">
            <img src={sunrise} alt="sunrise" className="h-8 md:h-10 select-none" />
            <div className="text-center">
              <h6>Sunrise</h6>
              <p>6:03 AM</p>
            </div>
          </div>

          {/* Sunset */}
          <div className="flex items-center gap-2">
            <img src={sunset} alt="sunset" className="h-8 md:h-10 select-none" />
            <div className="text-center">
              <h6>Sunset</h6>
              <p>6:28 PM</p>
            </div>
          </div>
        </div>

        {/* Weather Icon + Info */}
        <div className="flex-col justify-center items-center">
          <img src={sun} alt="sun" className="h-36 md:h-52 select-none" />
          <p className="font-bold text-xl text-center">Sunny</p>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-2 gap-4 text-sm font-semibold">
          <div className="flex flex-col items-center gap-2">
            <img src={humidity} alt="humidity" className="h-8 md:h-10 select-none" />
            <h6>Humidity</h6>
            <p>72%</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src={wind} alt="windSpeed" className="h-8 md:h-10 select-none" />
            <h6>Wind Speed</h6>
            <p>2.29 km/h</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src={pressure} alt="pressure" className="h-8 md:h-10 select-none" />
            <h6>Pressure</h6>
            <p>1010 hPa</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src={uv} alt="uv" className="h-8 md:h-10 select-none" />
            <h6>UV</h6>
            <p>2</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CityAndTime
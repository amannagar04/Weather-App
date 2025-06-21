const Forecast = ({forecast}) => {
  // const forecast = [
  //   { temperature: "20°C", day: "Friday", date: "1 Sep", icon: "🌤️" },
  //   { temperature: "22°C", day: "Saturday", date: "2 Sep", icon: "🌤️" },
  //   { temperature: "27°C", day: "Sunday", date: "3 Sep", icon: "☀️" },
  //   { temperature: "18°C", day: "Monday", date: "4 Sep", icon: "🌧️" },
  //   { temperature: "16°C", day: "Tuesday", date: "5 Sep", icon: "☁️" },
  // ];

  // const hourlyForeCast = [
  //   { time: "12:00", icon: "🌞", degree: "26°C", windSpeed: "3km/h",},
  //   { time: "15:00", icon: "🌤️", degree: "27°C", windSpeed: "2km/h",},
  //   { time: "18:00", icon: "⛅", degree: "27°C", windSpeed: "2km/h",},
  //   { time: "21:00", icon: "🌥️", degree: "25°C", windSpeed: "3km/h",},
  //   { time: "00:00", icon: "🌙", degree: "22°C", windSpeed: "3km/h",},
  // ];

  const dailyForecast = forecast.reduce((acc, item) => {
    const date = new Date(item.dt * 1000).toLocaleDateString();
    if (!acc.find(f => f.date === date)) {
      acc.push({
        temperature: `${item.main.temp}°C`,
        day: new Date(item.dt * 1000).toLocaleDateString("en-EN", { weekday: 'short' }),
        date: date,
        icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
      });
    }
    return acc;
  }, []).slice(0, 5);

  const hourlyForecast = forecast.slice(0, 5).map(item => ({
    time: new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
    degree: `${item.main.temp}°C`,
    windSpeed: `${item.wind.speed}`
  }));


  return (
    <div className="flex">
  {/* 5 Day Forecast */}
      <div className="xl:w-96 w-full h-1/2 px-4 py-4 bg-[#050e1d] shadow-2xl shadow-black m-4 rounded-lg text-white">
        <h2 className="flex items-center justify-center font-bold text-2xl">5 Days Forecast:</h2>
        {dailyForecast.map((cast, index) => (
          <div key={index} className="flex flex-row justify-between items-center p-2">
            <img src={cast.icon} alt="icon" className="select:none w-16 h-16"/>
            <p className="font-bold items-center">{cast.temperature}</p>
            <p className="font-bold">{cast.day}, {cast.date}</p>
          </div>
        ))}
      </div>

  {/* Hourly ForeCast */}
      <div className="flex-grow h-auto px-4 py-4 bg-[#050e1fde] shadow-2xl m-4 rounded-lg hidden lg:block text-white">
        <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">Hourly ForeCast</h1>
        <div className="flex justify-around items-center gap-4 p-4 h-54 mt-14">
            {hourlyForecast.map((hourCast, index) => (
                <div key={index} className="flex flex-col items-center gap-5 bg-[#1c2938] rounded-lg p-4 w-28 text-center shadow-md">
                    <p className="text-sm font-medium">{hourCast.time}</p>
                    <img src={hourCast.icon} alt="icon" className="select:none w-16 h-16"/>
                    <p>{hourCast.degree}</p>
                    <p>{hourCast.windSpeed}km/hr</p>
                </div>
            ))}
        </div>
      </div>

    </div>
  );
};

export default Forecast;
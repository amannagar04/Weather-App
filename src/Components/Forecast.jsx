const Forecast = () => {
  const forecast = [
    { temperature: "20°C", day: "Friday", date: "1 Sep", icon: "🌤️" },
    { temperature: "22°C", day: "Saturday", date: "2 Sep", icon: "🌤️" },
    { temperature: "27°C", day: "Sunday", date: "3 Sep", icon: "☀️" },
    { temperature: "18°C", day: "Monday", date: "4 Sep", icon: "🌧️" },
    { temperature: "16°C", day: "Tuesday", date: "5 Sep", icon: "☁️" },
  ];

  const hourlyForeCast = [
    { time: "12:00", icon: "🌞", degree: "26°C", windSpeed: "3km/h",},
    { time: "15:00", icon: "🌤️", degree: "27°C", windSpeed: "2km/h",},
    { time: "18:00", icon: "⛅", degree: "27°C", windSpeed: "2km/h",},
    { time: "21:00", icon: "🌥️", degree: "25°C", windSpeed: "3km/h",},
    { time: "00:00", icon: "🌙", degree: "22°C", windSpeed: "3km/h",},
  ];


  return (
    <div className="flex gap-4">
      <div className="xl:w-96 w-full h-90 px-4 py-4 bg-[#050e1d] shadow-2xl shadow-black mt-10 rounded-lg text-white">
        <h2>5 Days Forecast:</h2>
        {forecast.map((cast, index) => (
          <div key={index} className="flex flex-row justify-between items-center p-2">
            <p>{cast.icon}</p>
            <p className="font-bold items-center">{cast.temperature}</p>
            <p className="font-bold">{cast.day}, {cast.date}</p>
          </div>
        ))}
      </div>

      <div className="flex-grow h-90 px-4 py-4 bg-[#050e1fde] shadow-2xl m-4 mt-10 rounded-lg hidden lg:block text-white">
        <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">Hourly ForeCast</h1>
        <div className="flex justify-around items-center gap-4 h-54 mt-4">
            {hourlyForeCast.map((hourCast, index) => (
                <div key={index} className="flex flex-col items-center gap-5 bg-[#1c2938] rounded-lg p-4 w-28 text-center shadow-md">
                    <p className="text-sm font-medium">{hourCast.time}</p>
                    <p>{hourCast.icon}</p>
                    <p>{hourCast.degree}</p>
                    <p>{hourCast.windSpeed}</p>
                </div>
            ))}
        </div>
      </div>

    </div>
  );
};

export default Forecast;
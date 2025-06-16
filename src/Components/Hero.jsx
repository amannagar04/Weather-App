import React from 'react'
import sun from '../assets/sun.png'
import Clock from './Clock'

const Hero = () => {
  return (
    <div className="flex flex-row gap-4">
      <div className="flex-grow h-auto md:h-72 bg-[#050e1fde] shadow-2xl shadow-black rounded-lg text-white p-4 flex flex-col justify-between items-center">
        <div>Bengaluru</div>
        <img src={sun} alt="" className="h-30" />
        <Clock />
      </div>
      <div className="bg-black text-white p-3 rounded-2xl w-full m-2 justify-evenly flex lg:flex-row">
        <div className="flex flex-col items-center">
            <div className="text-6xl font-bold">22°C</div>
            <div className=" flex flex-row items-center p-1">
                <div className="text-sm m-2">Feels Like</div>
                <div className="text-2xl m-2">21°C</div>
            </div>
            <div className="flex flex-row">
                <img src={sun} className="h-10" alt="" />
                <div>
                    <div>Sunrise</div>
                    <div>06:20 AM</div>
                </div>
            </div>
            <div className="flex flex-row">
                <img src={sun} className="h-10" alt="" />
                <div>
                    <div>Sunset</div>
                    <div>06:40 PM</div>
                </div>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center">
            <img src={sun}className="h-30" alt="" />
            <div className="text-4xl font-serif">Sunny</div>
        </div>
      </div>
    </div>
  )
}

export default Hero

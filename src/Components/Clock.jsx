import { useEffect, useState } from "react"

const Clock = () => {
    // function for clock
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

//  returned element
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl md:text-7xl font-bold">
        {currentTime.toLocaleTimeString()}
      </h1>
      <p className="text-sm md:text-md font-medium">
        {currentTime.toLocaleDateString()}
      </p>
    </div>
  )
}

export default Clock
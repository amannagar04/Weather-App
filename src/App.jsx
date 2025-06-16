import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import CityAndTime from './Components/CityAndTime'
import Forecast from './Components/Forecast'


const App = () => {
  return (
    <div>
      <NavBar />
      <CityAndTime />
      {/* <Hero /> */}
      <Forecast />
    </div>
  )
}

export default App

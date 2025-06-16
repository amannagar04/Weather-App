import logo from '../assets/logo.png'
import search from '../assets/search.png'
import location from '../assets/location.png'

const NavBar = () => {
  return (
    <div className="m-4">
        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
            {/* logo */}
            <img src={logo} alt="logo" className="w-20 select-none" />
            {/* search bar */}
            <form className="relative flex items-center w-full max-w-md bg-white rounded-lg shadow-md">
                <img src={search} alt="search" className="absolute left-3 w-4 h-4 select-none" />
                <input type="text" placeholder='Search for your preferred city...' className="w-full py-2 text-sm pl-10 pr-4"/>
                <button className="px-5 py-2">Search</button>
            </form>
            <div className="flex items-center gap-3 px-4 text-sm font-medium text-white bg-green-500 rounded cursor-pointer">
                <img src={location} alt="location" className="w-6 py-2 select-none" />
                <p>Current Location</p>
            </div>
        </div>

    </div>
  )
}

export default NavBar

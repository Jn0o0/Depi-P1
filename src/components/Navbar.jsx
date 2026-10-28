import React from "react"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white  text-lg font-medium text-navbar-text  ">
      <ul className="flex justify-between items-center ">
        <img src="/src/assets/Images/logohome.png" alt="logo" className="w-auto h-auto ml-[25px]" />
        <Link to={"/"}>
        <li className="block border-b-[1.5px] border-transparent pb-1 font-bold transition-colors font-lato duration-300 hover:border-hover hover:text-hover">Home</li>
        </Link>
        <Link to={"/units"}>
        <li className="block border-b-[1.5px] border-transparent pb-1 font-bold transition-colors font-lato duration-300 hover:border-hover hover:text-hover">Units</li>
        </Link>
        <Link to={"/zones"}>
        <li className="block border-b-[1.5px] border-transparent pb-1 font-bold transition-colors font-lato duration-300 hover:border-hover hover:text-hover">Zones</li>
        </Link>
        <Link to={"/developers"}>
        <li className="block border-b-[1.5px] border-transparent pb-1 font-bold transition-colors font-lato duration-300 hover:border-hover hover:text-hover">Developers</li>
        </Link>
        <Link to={"/contact-us"}>
          <li className="block border-b-[1.5px] border-transparent pb-1 font-bold transition-colors font-lato duration-300 hover:border-hover hover:text-hover">Contact Us</li>
        </Link>
          <li className="flex h-[35px] w-[110px] items-center justify-center rounded-md bg-gradient-to-r from-[#8E1616] to-[#C34B4B] text-base text-white transition-opacity duration-300 hover:opacity-90 mr-[36px]">Register</li>
      </ul>
    </nav>
  )
}

export default Navbar
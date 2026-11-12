import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Counter from "./Counter"
import logo from "../assets/Images/Logohome.png";

function Navbar() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false)
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open])

  const links = [
    { to: "/", label: "Home" },
    { to: "/units", label: "Units" },
    { to: "/zones", label: "Zones" },
    { to: "/developers", label: "Developers" },
    { to: "/contact-us", label: "Contact Us" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white  text-lg font-medium text-navbar-text  ">
      <ul className="flex justify-between items-center max-lg:hidden">
        <img src={logo} alt="logo" className="w-auto h-auto ml-[25px]" />
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

      <div className="hidden items-center justify-between max-lg:flex">
        <img
          src={logo}
          alt="logo"
          className="w-auto h-auto ml-[25px] max-md:ml-[16px]"
        />
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="mr-[24px] flex h-[44px] w-[44px] shrink-0 flex-col items-center justify-center gap-[5px] rounded-md border border-[#8E1616]/30 max-md:mr-[16px]"
        >
          <span className="h-[2px] w-[22px] bg-[#8E1616]" />
          <span className="h-[2px] w-[22px] bg-[#8E1616]" />
          <span className="h-[2px] w-[22px] bg-[#8E1616]" />
        </button>
      </div>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />


      <aside
        aria-hidden={!open}
        className={`fixed top-0 right-0 z-[70] flex h-full w-[280px] max-w-[80vw] flex-col bg-white px-[24px] py-[20px] shadow-[-4px_0px_12px_rgba(0,0,0,0.25)] transition-all duration-300 lg:hidden ${
          open ? "translate-x-0 visible" : "translate-x-full invisible"
        }`}
      >
        <div className="flex items-center justify-end">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-[40px] w-[40px] items-center justify-center rounded-md text-[28px] leading-none text-[#8E1616]"
          >
            &times;
          </button>
        </div>

        <ul className="mt-[24px] flex flex-col gap-[24px]">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                onClick={() => setOpen(false)}
                className="inline-block border-b-[1.5px] border-transparent pb-1 font-bold transition-colors font-lato duration-300 hover:border-hover hover:text-hover"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-[32px] flex h-[40px] w-full items-center justify-center rounded-md bg-gradient-to-r from-[#8E1616] to-[#C34B4B] text-base text-white transition-opacity duration-300 hover:opacity-90">
          Register
        </div>
      </aside>
      
    </nav>
  )
}

export default Navbar
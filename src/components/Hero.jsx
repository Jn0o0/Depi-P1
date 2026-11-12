import React from 'react'
import herohome from '../assets/Images/herohome.png'
import fb from '../assets/Icons/faceb.svg'
import ins from '../assets/Icons/insta.svg'
import tic from '../assets/Icons/ti.svg'
import tiw from '../assets/Icons/tw.svg'

export default function Hero({ bg, title, desc, btncont, btn, icons }) {
  return (
    <div className="relative w-full">
      <div
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-white text-center px-6 py-20 max-lg:pb-28 max-md:px-5 max-sm:px-4 max-sm:py-16 max-sm:pb-24"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="text-[48px] max-lg:text-[42px] max-md:text-[36px] max-sm:text-[28px] font-bold w-full max-w-[850px] mb-[33px] max-md:mb-[24px] max-sm:mb-[18px] text-[#EEEEEE] font-playfair leading-tight">
          {title}
        </h1>

        <p className="text-[#CEC7C7] font-lato font-bold text-[20px] max-md:text-[17px] max-sm:text-[14px] w-full max-w-[988px] mb-[33px] max-md:mb-[25px] leading-relaxed">
          {desc}
        </p>

        {btn && (
          <button className="bg-gradient-to-r from-[#8E1616] to-[#C34B4B] w-[258px] max-sm:w-[210px] h-[47px] rounded-lg font-bold font-lato text-[16px] max-sm:text-[14px] shrink-0">
            {btncont}
          </button>
        )}
      </div>

      {icons && (
        <div className="absolute bottom-30 left-0 px-9 flex flex-col justify-center items-center gap-5 max-lg:bottom-10 max-lg:right-0 max-lg:px-0 max-lg:flex-row max-lg:gap-4 max-md:bottom-8 max-sm:bottom-6 max-sm:gap-3">
          <img
            src={fb}
            alt="facebook"
            className="size-12 max-lg:size-11 max-md:size-10 max-sm:size-8 border-white border-[3px] max-sm:border-2 rounded-full p-2 max-sm:p-1"
          />

          <img
            src={tiw}
            alt="twitter"
            className="size-12 max-lg:size-11 max-md:size-10 max-sm:size-8 border-white border-[3px] max-sm:border-2 rounded-full p-2 max-sm:p-1"
          />

          <img
            src={ins}
            alt="instagram"
            className="size-12 max-lg:size-11 max-md:size-10 max-sm:size-8 border-white border-[3px] max-sm:border-2 rounded-full p-2 max-sm:p-1"
          />

          <img
            src={tic}
            alt="tiktok"
            className="size-12 max-lg:size-11 max-md:size-10 max-sm:size-8 border-white border-[3px] max-sm:border-2 rounded-full p-2 max-sm:p-1"
          />
        </div>
      )}
    </div>
  )
}
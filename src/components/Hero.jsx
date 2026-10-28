import React from 'react'
import herohome from '../assets/Images/herohome.png'
import fb from '../assets/Icons/faceb.svg'
import ins from '../assets/Icons/insta.svg'
import tic from '../assets/Icons/ti.svg'
import tiw from '../assets/Icons/tw.svg'

export default function Hero({bg,title,desc,btncont,btn,icons}) {
  return (
    <>

    <div className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center" style={{ backgroundImage: `url(${bg})`}}>
      <h1 className='text-[48px] font-bold w-140 mb-[33px] text-[#EEEEEE] font-playfair'>{title}</h1>
      <p className='text-[#CEC7C7] font-lato font-bold text-[20px] w-[988px] mb-[33px]'>{desc}</p>

      {
        btn ?
        <button className='bg-gradient-to-r from-[#8E1616] to-[#C34B4B] w-[258px] h-[47px] rounded-lg font-bold font-lato'>{btncont}</button>
        :""
        }
    </div>
    
    
    { icons &&
      <div className='absolute bottom-30 px-9 flex flex-col justify-center items-center gap-5'>
      <img src={fb} alt="facebook" className='size-12 border-white border-[3px]  rounded-full p-2' />
      <img src={tiw} alt="twitter" className=' size-12 border-white border-[3px] rounded-full p-2' /> 
      <img src={ins} alt="instagram" className=' size-12 border-white border-[3px] rounded-full p-2' />
      <img src={tic} alt="tiktok" className=' size-12 border-white border-[3px] rounded-full p-2' />
    
    </div>

    }
    
    </>
  )
}

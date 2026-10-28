import React from 'react'
import ftlog from '../assets/Images/Logohome.png'
import ar from '../assets/Icons/arrow.svg'
import { Link } from 'react-router-dom'
import icf from '../assets/Icons/icFacebook.svg'
import ici from '../assets/Icons/Linkedin.svg'
import ict from '../assets/Icons/icTwitter.svg'
export default function Footer() {
  return (
    <>
    <footer className='w-full bg-[#FAFAFA] flex flex-col'>
      <div className='mx-auto w-full max-w-[1085px] px-5 pt-10'>
        <div className='flex justify-between gap-[12px]'>

          <div className='flex flex-col items-start'>
            <img src={ftlog} alt='footer logo' className='h-[151px] w-[151px] object-contain'/>
            <p className='font-lato text-[#0A142F]'>+1 (7635) 547-12-97</p>
            <p className='mt-[26px] font-lato text-[#0A142F]'>support@lift.agency</p>
          </div>

          <div className='flex flex-col'>
            <h3 className='font-lato w-auto h-auto text-[16px] font-bold mt-[36px] mb-[10px]'>Quick Links</h3>
            <div className='flex flex-col gap-[12px] text-[#0A142F] font-normal text-[16px] font-lato'>
              <Link to={"/"}>Home</Link>
              <Link to={"/units"}>Inventories</Link>
              <Link to={"/zones"}>Zones</Link>
              <Link to={"/developers"}>Developers</Link>
              <Link to={"/contact-us"}>Contact Us</Link>
            </div>
          </div>

          <div className='flex flex-col'>
            <h3 className='font-lato w-auto h-auto text-[16px] font-bold mt-[36px] mb-[10px]'>About</h3>
            <div className='flex flex-col gap-[12px] text-[#0A142F] font-normal text-[16px] font-lato'>
              <p>Grand Atlas</p>
              <p>Privacy Policy</p>
              <p>Legal</p>
              <p>Help</p>
              <p>Support</p>
            </div>
          </div>

          <div className='w-[248px] shrink-0'>
            <h3 className='font-lato w-auto h-auto text-[16px] font-normal mt-[36px] mb-[34px]'>Get In touch</h3>
            <div className='flex h-[46px] w-auto overflow-hidden rounded-md border border-[#8E1616]'>
              <input type="text" placeholder="Get product updates" className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-[#847D7D]"/>
              <button type='button' className='flex w-[50px] shrink-0 items-center justify-center bg-[#8E1616] text-white'>
                <img src={ar} alt='arrow' className='h-auto w-auto'/>
              </button>
            </div>
            <div className='mt-[21px] flex items-center gap-[15px]'>
              <div className='flex items-center justify-center h-[38px] w-[38px] border-[1.5px] border-[#8E1616]/10 rounded-full'>
              <img src={ici} alt='Linkedin' className='w-[11.86px] h-[11.86px] object-contain'/>
              </div>
              <div className='flex items-center justify-center h-[38px] w-[38px] border-[1.5px] border-[#8E1616]/10 rounded-full'>
              <img src={icf} alt='Facebook' className='w-[6.97px] h-[12.12px] object-contain'/>
              </div>
              <div className='flex items-center justify-center h-[38px] w-[38px] border-[1.5px] border-[#8E1616]/10 rounded-full'>
              <img src={ict} alt='Twitter' className='w-[12.29px] h-[10.38px] object-contain'/>
              </div>
              </div>
          </div>

      </div>
      <div className="mt-[26px] h-px w-full bg-[#0A142F]/[0.06]"></div>
      <p className='font-lato text-[16px] font-normal w-auto text-[#0A142F] text-center mt-[40px] mb-[36px]'>&copy;2020 Lift Media. All rights reserved</p>
      </div>
    </footer>
    
    </>
  )
}
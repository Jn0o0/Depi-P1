import React from 'react'
import Hero from '../../components/Hero'
import herohome from '../../assets/Images/herohome.png'
import Title from '../../components/Title'
import ic1 from '../../assets/Icons/icon1.png'
import ic2 from '../../assets/Icons/icon2.png'
import ic3 from '../../assets/Icons/icon3.png'
import ic4 from '../../assets/Icons/icon4.png'
import ph from '../../assets/Images/home_pho.png'
import arr from '../../assets/Icons/arrow.svg'
import im1 from '../../assets/Images/im1.png'
import im2 from '../../assets/Images/im2.png'
import im3 from '../../assets/Images/im3.png'
import im4 from '../../assets/Images/im4.png'
import pal from '../../assets/Images/palm_ph.png'
import pllog from '../../assets/Images/palm_logo.svg'
import hay from '../../assets/Images/haya_ph.png'
import haylog from '../../assets/Images/haya_logo.svg'

export default function Home() {
  return (
    <>
    <div>
      <Hero
      bg={herohome}
      title={"Redefining the Horizon of Modern Luxury Living"}
      desc={"We believe a home should be a sanctuary of innovation and an extension of your personal brand. By combining cutting-edge market data with a keen eye for world-class design, we help you navigate the complexities of the luxury market to find a space that inspires your best work and your deepest rest"}
      btncont={"Explore"}
      btn={true}
      icons={true}
      />
      <Title title={"Benchmarks of Success"} h={"mt-[123px]"} d={"md-[4px]"} />
      <div className='flex  justify-between items-center gap-[22px]'>

      <div className="ml-[37px] mr-[22px] flex h-[143px] w-[325px] flex-col items-center gap-[8px] rounded-[12px] border border-[#CEC7C7] bg-white px-[12px] py-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
        <img src={ic1} alt="icon" className="h-[36.71px] w-[36.71px] shrink-0 mt-[11.14px]"/>
        <h2 className="font-lato text-[24px] font-bold text-[#1D1616]">48</h2>
        <p className="font-lato text-[16px] font-normal  text-[#554E4E]">Properties Managed</p>
      </div>

      <div className="mr-[22px] flex h-[143px] w-[325px] flex-col items-center gap-[8px] rounded-[12px] border border-[#CEC7C7] bg-white px-[12px] py-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
        <img src={ic2} alt="icon" className="h-[36.71px] w-[36.71px] shrink-0 mt-[11.14px]"/>
        <h2 className="font-lato text-[24px] font-bold text-[#000000]">90M</h2>
        <p className="font-lato text-[16px] font-normal  text-[#554E4E]">Total Managed Investments</p>
      </div>

      <div className="mr-[22px] flex h-[143px] w-[325px] flex-col items-center gap-[8px] rounded-[12px] border border-[#CEC7C7] bg-white px-[12px] py-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
        <img src={ic3} alt="icon" className="h-[36.71px] w-[36.71px] shrink-0 mt-[11.14px]"/>
        <h2 className="font-lato text-[24px] font-bold text-[#000000]">500</h2>
        <p className="font-lato text-[16px] font-normal  text-[#554E4E]">Happy Clients</p>
      </div>

      <div className="mr-[37px] flex h-[143px] w-[325px] flex-col items-center gap-[8px] rounded-[12px] border border-[#CEC7C7] bg-white px-[12px] py-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
        <img src={ic4} alt="icon" className="h-[36.71px] w-[36.71px] shrink-0 mt-[11.14px]"/>
        <h2 className="font-lato text-[24px] font-bold text-[#1D1616]">99%</h2>
        <p className="font-lato text-[16px] font-normal  text-[#554E4E]">Client Satisfaction</p>
      </div>

      </div>

      <Title title={"About Grand Atlas"} h={"mt-[180px]"} d={"md-[10px]"} />

      <div className='flex justify-between items-center gap-[70px]' >
        <img src={ph} alt="photo" className='w-[673px] h-[667px] border-[5px] border-[#8E1616] rounded-tl-[100px] rounded-tr-[100px] ml-[37px]'/>

        <div className='w-[624px] h-[643px]'>
          <p className='font-lato text-[#554E4E] text-[24px] w-[624px] h-[504px] mb-[92px]'>We began with a singular, uncompromising vision: to bridge the gap between world-class architecture and the individuals who define our global culture. We recognized that for the discerning client, a home is rarely just a physical structure; it is a curated environment, a private gallery, and the ultimate expression of a life well-lived. Our journey started not in the pursuit of transactions, but in the pursuit of excellence. We set out to dismantle the traditional, high-volume real estate model in favor of a bespoke, 'private office' approach—one where quality
             always supersedes quantity, and where every client is treated as the sole focus of our firm,  We don't just find you a home; we secure your peace of mind through a veil of absolute professional confidentiality.</p>
          <div className="mr-[36px] flex h-[47px] w-[258px] items-center justify-center gap-[18px] rounded-lg bg-gradient-to-r from-[#8E1616] to-[#C34B4B] font-lato text-[20px] font-bold text-[#EEEEEE] transition-opacity duration-300 hover:opacity-90">
            <span>Know More</span>
            <img src={arr} alt="arrow" className="h-auto w-auto"/>
            </div>
        </div>
      </div>
      <Title title={"Hand-Selected Masterpieces"} h={"mt-[180px]"} d={"md-[12px]"} />

      <div className="mt-[39px] ml-[37px] overflow-hidden">
        <div className="carousel carousel-start w-full gap-5 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory pb-2">
          <div className="carousel-item w-[442px] shrink-0 snap-start flex-col">
            <div className="h-[298px] w-full overflow-hidden rounded-[16px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
        <img src={im1} alt="Palm Hills Office No.3" className="h-full w-full object-cover"/>
          </div>
          <h3 className="mt-[18px] font-Playfair_Display text-[24px] font-semibold leading-[32px] text-black">
        01. Palm Hills Office No.3
        </h3>
        </div>
        <div className="carousel-item w-[442px] shrink-0 snap-start flex-col">
          <div className="h-[298px] w-full overflow-hidden rounded-[16px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
        <img src={im2} alt="Hacienda Duplex No.4" className="h-full w-full object-cover"/>
        </div>
        <h3 className="mt-[18px] font-playfair text-[24px] font-semibold leading-[32px] text-black">
        02. Hacienda Duplex No.4
        </h3>
        </div>
        <div className="carousel-item w-[442px] shrink-0 snap-start flex-col">
          <div className="h-[298px] w-full overflow-hidden rounded-[16px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
        <img src={im3} alt="Sawary Family Villa" className="h-full w-full object-cover"/>
        </div>
        <h3 className="mt-[18px] font-Playfair_Display text-[24px] font-semibold leading-[32px] text-black">
        03. Sawary Family Villa
        </h3>
        </div>
        </div>
        <div className="mt-[45px] flex items-center justify-center gap-[9px]">
          <button type="button" aria-label="Go to first property" className="h-[12px] w-[60px] rounded-[8px] bg-[#8E1616]"/>
          <button type="button" aria-label="Go to second property" className="h-[12px] w-[16px] rounded-full bg-[#D9D9D9]"/>
          <button type="button" aria-label="Go to third property" className="h-[12px] w-[16px] rounded-full bg-[#D9D9D9]"/>
          </div>
          </div>
      
      
      
      
      <Title title={"Strategic Locations"} h={"mt-[180px]"} d={"md-[4px]"} />
      <img src={im4} alt='map' className='w-[1439px] h-[512px]'/>

      <Title title={"Future Landmarks"} h={"mt-[180px]"} d={"md-[12px]"} />

      <div className="flex items-center gap-[20px]">
        <div className="ml-[40px]  flex h-[426px] w-[442px] shrink-0 flex-col rounded-[16px] border border-[#EAEAEA] bg-white p-[12px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <div className="relative h-[271px] w-full shrink-0 overflow-hidden rounded-[16px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <img src={pal} alt="Palm Hills Property" className="h-full w-full object-cover"/>
            <span className='absolute top-[25px] left-[304px] flex  rounded-[4px] bg-[#8E1616] font-lato text-center text-[#FFFFFF] text-[16px] items-center justify-center w-[104px] h-[24px] font-normal'>New Cairo</span>
          </div>
          <img src={pllog} alt='palm logo' className='w-[196px] h-[65px] mt-[16px] '/>
          <div className='mt-[17px] flex items-center justify-center w-[415px] h-[35px] top-[382px] left-[13px] border px-[8px] text-center rounded-[8px] gap-[10px] border-[#8E1616] text-[#8E1616] text-[16px] font-lato font-normal '>View Details</div>
        </div>

        <div className="flex h-[426px] w-[442px] shrink-0 flex-col rounded-[16px] border border-[#EAEAEA] bg-white p-[12px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <div className="relative h-[271px] w-full shrink-0 overflow-hidden rounded-[16px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <img src={hay} alt="Haya City Property" className="h-full w-full object-cover"/>
            <span className='absolute top-[25px] left-[304px] flex  rounded-[4px] bg-[#8E1616] font-lato text-center text-[#FFFFFF] text-[16px] items-center justify-center w-[104px] h-[24px] font-normal'>New Cairo</span>
          </div>
          <div className='flex'>
            <img src={haylog} alt='Haya logo' className='w-[37px] h-[41px] mt-[8px] '/>
            <div className="ml-[4px] mt-[10px] flex flex-col">
              <h2 className="h-[24px] w-auto font-lato text-[20px] font-bold leading-[24px] text-[#1D1616]">Hayah City</h2>
              <p className="h-[14px] w-auto font-lato text-[12px] font-bold leading-[14px] text-[#847D7D] ">Hayah Development</p>
            </div>            
          </div>
          <div className='mt-[17px] flex items-center justify-center w-[415px] h-[35px] top-[382px] left-[13px] border px-[8px] text-center rounded-[8px] gap-[10px] border-[#8E1616] text-[#8E1616] text-[16px] font-lato font-normal mt-[50px]'>View Details</div>
        </div>

        <div className=" mr-[20px] flex h-[426px] w-[442px] shrink-0 flex-col rounded-[16px] border border-[#EAEAEA] bg-white p-[12px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <div className="relative h-[271px] w-full shrink-0 overflow-hidden rounded-[16px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <img src={pal} alt="Palm Hills Property" className="h-full w-full object-cover"/>
            <span className='absolute top-[25px] left-[304px] flex  rounded-[4px] bg-[#8E1616] font-lato text-center text-[#FFFFFF] text-[16px] items-center justify-center w-[104px] h-[24px] font-normal'>New Cairo</span>
          </div>
          <img src={pllog} alt='palm logo' className='w-[196px] h-[65px] mt-[16px] '/>
          <div className='mt-[17px] flex items-center justify-center w-[415px] h-[35px] top-[382px] left-[13px] border px-[8px] text-center rounded-[8px] gap-[10px] border-[#8E1616] text-[#8E1616] text-[16px] font-lato font-normal '>View Details</div>
        </div>
      </div>
      <div className="mt-[36px] flex items-center justify-center gap-[9px] mb-[147px]">
          <button type="button" aria-label="Go to first property" className="h-[12px] w-[60px] rounded-[8px] bg-[#8E1616]"/>
          <button type="button" aria-label="Go to second property" className="h-[12px] w-[16px] rounded-full bg-[#D9D9D9]"/>
          <button type="button" aria-label="Go to third property" className="h-[12px] w-[16px] rounded-full bg-[#D9D9D9]"/>
      </div>




      </div>
    
    </>
  )
}

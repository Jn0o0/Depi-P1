
import React from 'react'
import Hero from '../../components/Hero'
import contactusbg from '../../assets/Images/contactushero.png'
import rl from '../../assets/Icons/location_red_icon.svg'
import ei from '../../assets/Icons/email_icon.svg'
import pi from '../../assets/Icons/mobile_icon.svg'
import ci from '../../assets/Icons/call_icon.svg'
import si from '../../assets/Icons/social_icons.svg'

export default function ContactUs() {
  return (
    <>
      <Hero
        bg={contactusbg}
        title={"Connected Globally. Available Locally."}
        desc={"With experts positioned in the world’s most influential markets, we are never more than a conversation away. Reach out to our team to experience a new standard of real estate advisory."}
        btn={false}
        icons={false}
      />

      <div className='flex flex-col lg:flex-row mt-[70px] md:mt-[90px] lg:mt-[118px] mx-4 sm:mx-6 lg:mx-[37px] mb-[70px] md:mb-[90px] lg:mb-[99px] justify-between gap-10 lg:gap-[30px]'>

        <div className='flex flex-col w-full lg:flex-1 min-w-0'>

          <span className='w-full font-semibold font-playfair text-[28px] sm:text-[30px] lg:text-[32px] text-[#000000]'>
            Contact Information
          </span>

          <span className='w-full max-w-[673px] font-lato text-[16px] sm:text-[18px] lg:text-[20px] font-normal text-[#847D7D] mt-4 lg:mt-[20px] leading-relaxed'>
            Our team is available for private consultations and off-market inquiries. We operate with absolute discretion to ensure your real estate objectives are met with precision.
          </span>

          <div className='flex flex-col gap-[20px] mt-[30px] lg:mt-[38px]'>

            <div className='flex items-start gap-2'>
              <img src={rl} alt='location' className='w-[25px] h-[25px] object-contain shrink-0'/>
              <span className='w-full font-lato text-[16px] sm:text-[18px] lg:text-[20px] text-[#8E1616] font-medium leading-relaxed break-words'>
                Minusio, Lake Maggiore, Switzerland — ref. LOC1771
              </span>
            </div>

            <div className='flex items-start gap-[8px]'>
              <img src={ei} alt='email' className='w-[24px] h-[24px] object-contain shrink-0'/>
              <span className='w-full font-lato text-[16px] sm:text-[18px] lg:text-[20px] text-[#8E1616] font-medium break-all'>
                Grand .Atlas.Support@gmail.com
              </span>
            </div>

            <div className='flex items-start gap-[8px]'>
              <img src={pi} alt='Phone' className='w-[24px] h-[24px] object-contain shrink-0'/>
              <span className='w-full font-lato text-[16px] sm:text-[18px] lg:text-[20px] text-[#8E1616] font-medium'>
                01247859622
              </span>
            </div>

            <div className='flex items-start gap-[8px]'>
              <img src={ci} alt='call' className='w-[24px] h-[24px] object-contain shrink-0'/>
              <span className='w-full font-lato text-[16px] sm:text-[18px] lg:text-[20px] text-[#8E1616] font-medium'>
                035987124
              </span>
            </div>

          </div>

          <span className='w-full mt-[30px] lg:mt-[36px] font-playfair font-semibold text-[20px] sm:text-[21px] lg:text-[22px] text-[#847D7D]'>
            Follow us on social media
          </span>

          <img src={si} alt='social' className='w-[180px] sm:w-[207px] h-auto mt-[20px] object-contain'/>

          <span className='w-full font-playfair font-semibold text-[20px] sm:text-[21px] lg:text-[22px] text-[#847D7D] mt-[30px] lg:mt-[36px]'>
            Working Hours
          </span>

          <div className='flex flex-col mt-[20px] w-full gap-[11px]'>

            <span className='w-full text-[#8E1616] font-lato text-[16px] sm:text-[18px] lg:text-[20px] font-medium'>
              Saturday : <span className='pl-3 sm:pl-[26px] text-[#847D7D]'>9:00AM - 5:00 PM</span>
            </span>

            <span className='w-full text-[#8E1616] font-lato text-[16px] sm:text-[18px] lg:text-[20px] font-medium'>
              Sunday : <span className='pl-3 sm:pl-[39px] text-[#847D7D]'>9:00AM - 5:00 PM</span>
            </span>

            <span className='w-full text-[#8E1616] font-lato text-[16px] sm:text-[18px] lg:text-[20px] font-medium'>
              Monday : <span className='pl-3 sm:pl-[36px] text-[#847D7D]'>9:00AM - 5:00 PM</span>
            </span>

            <span className='w-full text-[#8E1616] font-lato text-[16px] sm:text-[18px] lg:text-[20px] font-medium'>
              Tuesday : <span className='pl-3 sm:pl-[32px] text-[#847D7D]'>9:00AM - 5:00 PM</span>
            </span>

            <span className='w-full text-[#8E1616] font-lato text-[16px] sm:text-[18px] lg:text-[20px] font-medium'>
              Wednesday : <span className='pl-3 sm:pl-[4px] text-[#847D7D]'>9:00AM - 5:00 PM</span>
            </span>

          </div>
        </div>

        <div className='w-full lg:flex-1 min-w-0 lg:max-w-[673px] min-h-0 lg:min-h-[733px] bg-white border border-[#E2E2E2] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[20px] sm:rounded-[24px] p-5 sm:p-[25px] lg:p-[30px] relative'>

          <h2 className='font-playfair font-semibold pb-[25px] sm:pb-[35px] text-[23px] sm:text-[25px] lg:text-[26px] text-[#000000]'>
            Send us a message
          </h2>

          <form className='flex flex-col gap-[22px] sm:gap-[27px]'>

            <div className='flex flex-col gap-[8px]'>
              <label className='font-playfair font-medium text-[#000000] text-[18px] sm:text-[20px]'>
                Name
              </label>
              <input type='text' className='w-full h-[52px] sm:h-[58px] border border-[#CEC7C7] rounded-[8px] bg-[#F7F7F7] outline-none px-4'/>
            </div>

            <div className='flex flex-col gap-[8px]'>
              <label className='font-playfair font-medium text-[#000000] text-[18px] sm:text-[20px]'>
                Email
              </label>
              <input type='email' className='w-full h-[52px] sm:h-[58px] border border-[#CEC7C7] rounded-[8px] bg-[#F7F7F7] outline-none px-4'/>
            </div>

            <div className='flex flex-col gap-[8px]'>
              <label className='font-playfair font-medium text-[#000000] text-[18px] sm:text-[20px]'>
                Phone
              </label>
              <input type='tel' className='w-full h-[52px] sm:h-[58px] border border-[#CEC7C7] rounded-[8px] bg-[#F7F7F7] outline-none px-4'/>
            </div>

            <div className='flex flex-col gap-[8px]'>
              <label className='font-playfair font-medium text-[#000000] text-[18px] sm:text-[20px]'>
                Message
              </label>
              <textarea className='w-full h-[120px] sm:h-[140px] border border-[#CEC7C7] rounded-[8px] bg-[#F7F7F7] outline-none px-4 py-3 resize-none'/>
            </div>

            <button type='submit' className='w-full min-h-[49px] py-2 bg-gradient-to-r from-[#8E1616] to-[#C34B4B] border border-[#EEEEEE] rounded-[8px] font-playfair font-semibold text-[18px] sm:text-[20px] text-[#EEEEEE]'>
              Send Message
            </button>

          </form>
        </div>

      </div>
    </>
  )
}

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
import React, { useRef, useState } from 'react'

export default function Home() {
  const carouselRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const landmarksRef = useRef(null)
  const [activeLandmark, setActiveLandmark] = useState(0)

  const scrollToSlide = (index) => {
    const carousel = carouselRef.current
    if (!carousel) return

    const slide = carousel.children[index]

    carousel.scrollTo({
      left: slide.offsetLeft - carousel.offsetLeft,
      behavior: 'smooth',
    })

    setActiveIndex(index)
  }

  const scrollToLandmark = (index) => {
    const container = landmarksRef.current
    if (!container) return

    const slide = container.children[index]
    if (!slide) return

    container.scrollTo({
      left: slide.offsetLeft - container.offsetLeft,
      behavior: 'smooth',
    })

    setActiveLandmark(index)
  }

  return (
    <>
      <div className="w-full overflow-x-hidden">

        <Hero
          bg={herohome}
          title={"Redefining the Horizon of Modern Luxury Living"}
          desc={"We believe a home should be a sanctuary of innovation and an extension of your personal brand. By combining cutting-edge market data with a keen eye for world-class design, we help you navigate the complexities of the luxury market to find a space that inspires your best work and your deepest rest"}
          btncont={"Explore"}
          btn={true}
          icons={true}
        />


        <Title title={"Benchmarks of Success"} h={"mt-[123px] max-md:mt-[80px] max-sm:mt-[60px]"} d={"md-[4px]"} />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[22px] px-[37px] max-md:px-[20px] max-sm:px-[16px] items-center">

          <div className="flex h-[143px] w-full flex-col items-center gap-[8px] rounded-[12px] border border-[#CEC7C7] bg-white px-[12px] py-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <img src={ic1} alt="icon" className="h-[36.71px] w-[36.71px] shrink-0 mt-[11.14px]" />
            <h2 className="font-lato text-[24px] font-bold text-[#1D1616]">48</h2>
            <p className="font-lato text-[16px] max-sm:text-[14px] font-normal text-[#554E4E] text-center">Properties Managed</p>
          </div>

          <div className="flex h-[143px] w-full flex-col items-center gap-[8px] rounded-[12px] border border-[#CEC7C7] bg-white px-[12px] py-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <img src={ic2} alt="icon" className="h-[36.71px] w-[36.71px] shrink-0 mt-[11.14px]" />
            <h2 className="font-lato text-[24px] font-bold text-[#000000]">90M</h2>
            <p className="font-lato text-[16px] max-sm:text-[14px] font-normal text-[#554E4E] text-center">Total Managed Investments</p>
          </div>

          <div className="flex h-[143px] w-full flex-col items-center gap-[8px] rounded-[12px] border border-[#CEC7C7] bg-white px-[12px] py-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <img src={ic3} alt="icon" className="h-[36.71px] w-[36.71px] shrink-0 mt-[11.14px]" />
            <h2 className="font-lato text-[24px] font-bold text-[#000000]">500</h2>
            <p className="font-lato text-[16px] max-sm:text-[14px] font-normal text-[#554E4E] text-center">Happy Clients</p>
          </div>

          <div className="flex h-[143px] w-full flex-col items-center gap-[8px] rounded-[12px] border border-[#CEC7C7] bg-white px-[12px] py-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <img src={ic4} alt="icon" className="h-[36.71px] w-[36.71px] shrink-0 mt-[11.14px]" />
            <h2 className="font-lato text-[24px] font-bold text-[#1D1616]">99%</h2>
            <p className="font-lato text-[16px] max-sm:text-[14px] font-normal text-[#554E4E] text-center">Client Satisfaction</p>
          </div>

        </div>


        <Title title={"About Grand Atlas"} h={"mt-[180px] max-md:mt-[100px] max-sm:mt-[70px]"} d={"md-[10px]"} />

        <div className="flex justify-between items-center gap-[70px] px-[37px] max-lg:gap-[35px] max-md:flex-col max-md:px-[20px] max-sm:px-[16px]">

          <img
            src={ph}
            alt="photo"
            className="w-[673px] max-lg:w-[50%] max-md:w-full max-md:max-w-[600px] h-[667px] max-lg:h-[550px] max-md:h-auto max-md:aspect-square object-cover border-[5px] border-[#8E1616] rounded-tl-[100px] rounded-tr-[100px] max-sm:rounded-tl-[65px] max-sm:rounded-tr-[65px]"
          />

          <div className="w-[624px] max-lg:w-[50%] max-md:w-full h-auto">

            <p className="font-lato text-[#554E4E] text-[24px] max-lg:text-[20px] max-md:text-[18px] max-sm:text-[16px] w-full h-auto mb-[92px] max-md:mb-[35px] max-sm:mb-[25px] leading-relaxed">
              We began with a singular, uncompromising vision: to bridge the gap between world-class architecture and the individuals who define our global culture. We recognized that for the discerning client, a home is rarely just a physical structure; it is a curated environment, a private gallery, and the ultimate expression of a life well-lived. Our journey started not in the pursuit of transactions, but in the pursuit of excellence. We set out to dismantle the traditional, high-volume real estate model in favor of a bespoke, 'private office' approach—one where quality
              always supersedes quantity, and where every client is treated as the sole focus of our firm,  We don't just find you a home; we secure your peace of mind through a veil of absolute professional confidentiality.
            </p>

            <div className="mr-[36px] max-md:mr-0 flex h-[47px] w-[258px] max-sm:w-full max-sm:max-w-[258px] items-center justify-center gap-[18px] rounded-lg bg-gradient-to-r from-[#8E1616] to-[#C34B4B] font-lato text-[20px] font-bold text-[#EEEEEE] transition-opacity duration-300 hover:opacity-90">
              <span>Know More</span>
              <img src={arr} alt="arrow" className="h-auto w-auto" />
            </div>

          </div>
        </div>


        <Title title={"Hand-Selected Masterpieces"} h={"mt-[180px] max-md:mt-[100px] max-sm:mt-[70px]"} d={"md-[12px]"} />

        <div className="mt-[39px] ml-[37px] max-md:ml-[20px] max-sm:ml-[16px] overflow-hidden">

          <div
            ref={carouselRef}
            onScroll={(e) => {
              const carousel = e.currentTarget
              const slides = Array.from(carousel.children)
              let closestIndex = 0
              let minDistance = Infinity

              slides.forEach((slide, index) => {
                const distance = Math.abs(
                  slide.offsetLeft - carousel.offsetLeft - carousel.scrollLeft,
                )

                if (distance < minDistance) {
                  minDistance = distance
                  closestIndex = index
                }
              })

              setActiveIndex(closestIndex)
            }}
            className="carousel carousel-start w-full gap-5 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory pb-2"
          >

            <div className="carousel-item w-[85vw] max-w-[442px] shrink-0 snap-start flex-col">
              <div className="h-[298px] max-md:h-[250px] max-sm:h-[210px] w-full overflow-hidden rounded-[16px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                <img
                  src={im1}
                  alt="Palm Hills Office No.3"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-[18px] font-Playfair_Display text-[24px] max-md:text-[20px] max-sm:text-[18px] font-semibold leading-[32px] text-black">
                01. Palm Hills Office No.3
              </h3>
            </div>

            <div className="carousel-item w-[85vw] max-w-[442px] shrink-0 snap-start flex-col">
              <div className="h-[298px] max-md:h-[250px] max-sm:h-[210px] w-full overflow-hidden rounded-[16px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                <img
                  src={im2}
                  alt="Hacienda Duplex No.4"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-[18px] font-Playfair_Display text-[24px] max-md:text-[20px] max-sm:text-[18px] font-semibold leading-[32px] text-black">
                02. Hacienda Duplex No.4
              </h3>
            </div>

            <div className="carousel-item w-[85vw] max-w-[442px] shrink-0 snap-start flex-col">
              <div className="h-[298px] max-md:h-[250px] max-sm:h-[210px] w-full overflow-hidden rounded-[16px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                <img
                  src={im3}
                  alt="Sawary Family Villa"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-[18px] font-Playfair_Display text-[24px] max-md:text-[20px] max-sm:text-[18px] font-semibold leading-[32px] text-black">
                03. Sawary Family Villa
              </h3>
            </div>

          </div>

          <div className="mt-[45px] flex items-center justify-center gap-[9px]">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollToSlide(index)}
                aria-label={`Go to property ${index + 1}`}
                className={`h-[12px] rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-[60px] bg-[#8E1616]"
                    : "w-[16px] bg-[#D9D9D9]"
                }`}
              />
            ))}
          </div>

        </div>


        <Title title={"Strategic Locations"} h={"mt-[180px] max-md:mt-[100px] max-sm:mt-[70px]"} d={"md-[4px]"} />

        <img
          src={im4}
          alt="map"
          className="w-full max-w-full h-auto object-contain px-[20px] max-sm:px-[10px]"
        />


        <Title title={"Future Landmarks"} h={"mt-[180px] max-md:mt-[100px] max-sm:mt-[70px]"} d={"md-[12px]"} />

        <div
          ref={landmarksRef}
          onScroll={(e) => {
            const container = e.currentTarget
            const cards = Array.from(container.children)

            const isOverflowing = container.scrollWidth > container.clientWidth + 5
            const isAtEnd =
              container.scrollLeft + container.clientWidth >= container.scrollWidth - 5

            // لو وصلنا لآخر السكرول، فعّل آخر نقطة
            if (isOverflowing && isAtEnd) {
              setActiveLandmark(cards.length - 1)
              return
            }

            let closestIndex = 0
            let minDistance = Infinity

            cards.forEach((card, index) => {
              const distance = Math.abs(
                card.offsetLeft -
                container.offsetLeft -
                container.scrollLeft
              )

              if (distance < minDistance) {
                minDistance = distance
                closestIndex = index
              }
            })

            setActiveLandmark(closestIndex)
          }}
          className="mt-[20px] ml-[37px] max-md:ml-[20px] max-sm:ml-[16px] flex gap-[20px] overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >


          <div className="flex h-[426px] max-sm:h-[370px] w-[85vw] max-w-[442px] shrink-0 snap-start flex-col rounded-[16px] border border-[#EAEAEA] bg-white p-[12px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">

            <div className="relative h-[271px] max-sm:h-[210px] w-full shrink-0 overflow-hidden rounded-[16px]">
              <img src={pal} alt="Palm Hills Property" className="h-full w-full object-cover" />
              <span className="absolute right-[25px] top-[25px] max-sm:right-[12px] max-sm:top-[12px] flex h-[24px] w-[104px] items-center justify-center rounded-[4px] bg-[#8E1616] font-lato text-[16px] max-sm:text-[13px] text-white">
                New Cairo
              </span>
            </div>

            <img src={pllog} alt="Palm Hills logo" className="mt-[16px] h-[65px] w-[196px] max-sm:w-[160px] object-contain object-left" />

            <div className="mt-auto flex h-[35px] w-full cursor-pointer items-center justify-center rounded-[8px] border border-[#8E1616] px-[8px] text-center font-lato text-[16px] text-[#8E1616] transition-all duration-300 hover:bg-[#8E1616] hover:text-white">
              View Details
            </div>

          </div>


          <div className="flex h-[426px] max-sm:h-[370px] w-[85vw] max-w-[442px] shrink-0 snap-start flex-col rounded-[16px] border border-[#EAEAEA] bg-white p-[12px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">

            <div className="relative h-[271px] max-sm:h-[210px] w-full shrink-0 overflow-hidden rounded-[16px]">
              <img src={hay} alt="Haya City Property" className="h-full w-full object-cover" />
              <span className="absolute right-[25px] top-[25px] max-sm:right-[12px] max-sm:top-[12px] flex h-[24px] w-[104px] items-center justify-center rounded-[4px] bg-[#8E1616] font-lato text-[16px] max-sm:text-[13px] text-white">
                New Cairo
              </span>
            </div>

            <div className="mt-[8px] flex items-center">
              <img src={haylog} alt="Haya logo" className="h-[41px] w-[37px] object-contain" />

              <div className="ml-[4px] flex flex-col">
                <h2 className="font-lato text-[20px] max-sm:text-[18px] font-bold leading-[24px] text-[#1D1616]">
                  Hayah City
                </h2>
                <p className="font-lato text-[12px] font-bold leading-[14px] text-[#847D7D]">
                  Hayah Development
                </p>
              </div>
            </div>

            <div className="mt-auto flex h-[35px] w-full cursor-pointer items-center justify-center rounded-[8px] border border-[#8E1616] px-[8px] text-center font-lato text-[16px] text-[#8E1616] transition-all duration-300 hover:bg-[#8E1616] hover:text-white">
              View Details
            </div>

          </div>


          <div className="mr-[20px] flex h-[426px] max-sm:h-[370px] w-[85vw] max-w-[442px] shrink-0 snap-start flex-col rounded-[16px] border border-[#EAEAEA] bg-white p-[12px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">

            <div className="relative h-[271px] max-sm:h-[210px] w-full shrink-0 overflow-hidden rounded-[16px]">
              <img src={pal} alt="Palm Hills Property" className="h-full w-full object-cover" />
              <span className="absolute right-[25px] top-[25px] max-sm:right-[12px] max-sm:top-[12px] flex h-[24px] w-[104px] items-center justify-center rounded-[4px] bg-[#8E1616] font-lato text-[16px] max-sm:text-[13px] text-white">
                New Cairo
              </span>
            </div>

            <img src={pllog} alt="Palm Hills logo" className="mt-[16px] h-[65px] w-[196px] max-sm:w-[160px] object-contain object-left" />

            <div className="mt-auto flex h-[35px] w-full cursor-pointer items-center justify-center rounded-[8px] border border-[#8E1616] px-[8px] text-center font-lato text-[16px] text-[#8E1616] transition-all duration-300 hover:bg-[#8E1616] hover:text-white">
              View Details
            </div>

          </div>

        </div>


        {/* الـ margin السفلي على wrapper عشان يفضل موجود حتى لما النقط تختفي على الشاشات الكبيرة */}
        <div className="mb-[147px] max-md:mb-[90px] max-sm:mb-[60px]">
          <div className="mt-[36px] flex items-center justify-center gap-[9px] min-[1430px]:hidden">

            {[0, 1, 2].map((index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollToLandmark(index)}
                aria-label={`Go to property ${index + 1}`}
                aria-current={activeLandmark === index ? "true" : undefined}
                className={`h-[12px] rounded-full transition-all duration-300 ${
                  activeLandmark === index
                    ? "w-[60px] bg-[#8E1616]"
                    : "w-[16px] bg-[#D9D9D9] hover:bg-[#B8A0A0]"
                }`}
              />
            ))}

          </div>
        </div>

      </div>
    </>
  )
}

import React, { useEffect, useState } from 'react'
import api from "../../utils/axios_instance"
import Hero from '../../components/Hero'
import developersbg from '../../assets/Images/developershero.png'
import { Link } from 'react-router-dom'

export default function Developers() {

  const [developers, setDeveolpers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getDevelopers() {
      setLoading(true)
      try {
        const r = await api.get("/developer")
        console.log(r.data)
        setDeveolpers(r.data)
        setLoading(false)
      }
      catch (error) {
        setLoading(false)
      }
    }
    getDevelopers()
  }, [])

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-screen px-4'>
        <p className='text-xl sm:text-2xl font-bold'>Loading...</p>
      </div>
    )
  }

  return (
    <>
      <Hero
        bg={developersbg}
        title={"Defining the Future Skyline."}
        desc={"Great developments require more than just capital; they require a narrative. We provide the elite marketing and specialized brokerage services needed to position your landmark projects in front of the world’s most discerning buyers."}
        btn={false}
        icons={true}
      />

      <div className='w-full max-w-[1366px] mx-auto flex flex-wrap justify-center lg:justify-start items-stretch mt-[45px] sm:mt-[55px] lg:mt-[69px] gap-5 px-4 sm:px-6 lg:px-5 mb-[70px] sm:mb-[85px] lg:mb-[100px]'>

        {developers.length > 0 ? (
          developers.map((developer) => (
            <Link
              to={`/developers/${developer.id}`}
              key={developer.id}
              className='w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] max-w-[442px] min-h-[400px] sm:min-h-[410px] lg:min-h-[426px] flex flex-col border border-[#EAEAEA] rounded-[16px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] overflow-hidden bg-white'
            >

              <div className='relative w-full h-[220px] sm:h-[240px] lg:h-[271px] shrink-0 px-3 pt-3'>
                <div className='relative w-full h-full rounded-[16px] overflow-hidden shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>

                  <img
                    src={developer.images?.[0]}
                    alt={developer.title_en}
                    className='w-full h-full object-cover'
                  />

                  <span className='absolute top-4 right-4 sm:top-[25px] sm:right-[27px] min-w-[95px] sm:min-w-[104px] min-h-[24px] px-2 py-1 flex items-center justify-center rounded-[4px] bg-[#8E1616] font-lato font-normal text-[13px] sm:text-[16px] text-white'>
                    {developer.projects?.length ?? 0} Projects
                  </span>

                </div>
              </div>

              <div className='min-h-[65px] flex items-center px-5 sm:px-[25px] lg:px-[35px] mt-4'>
                <div className="flex flex-col min-w-0">

                  <span className="font-lato font-bold text-[17px] sm:text-[18px] lg:text-[20px] text-[#1D263B] uppercase break-words">
                    {developer.name_en}
                  </span>

                  <span className="font-lato text-[10px] sm:text-[11px] lg:text-[12px] font-semibold tracking-[3px] sm:tracking-[4px] text-[#64748B]">
                    DEVELOPMENTS
                  </span>

                </div>
              </div>

              <div className='px-[17px] mt-auto pb-4'>
                <span className='w-full min-h-[35px] py-2 flex items-center justify-center border border-[#8E1616] rounded-[8px] font-lato text-[14px] sm:text-[15px] lg:text-[16px] text-[#8E1616]'>
                  View Details
                </span>
              </div>

            </Link>
          ))
        ) : (
          <p className='font-lato font-bold text-[20px] sm:text-[24px] text-[#8E1616] text-center w-full'>
            No developers found
          </p>
        )}

      </div>
    </>
  )
}


import React, { useEffect, useState } from 'react'
import api from '../../utils/axios_instance'
import { useParams, Link } from 'react-router-dom'
import Title from '../../components/Title'
import rpi from '../../assets/Icons/ruler-pencil_icon.svg'
import gi from '../../assets/Icons/Gym_icon.svg'
import li from '../../assets/Icons/Apartment_icon.svg'

export default function Developerdevelopers() {
  const { id } = useParams()
  const [developer, setDeveloper] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getDeveloperProjects() {
      try {
        setLoading(true)
        const r = await api.get(`/developer/${id}`)
        console.log(r.data)
        setDeveloper(r.data)
        setLoading(false)
      } catch (error) {
        setDeveloper(null)
        setLoading(false)
      }
    }

    getDeveloperProjects()
  }, [id])

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-screen px-4'>
        <p className='text-xl sm:text-2xl font-bold'>Loading...</p>
      </div>
    )
  }

  if (!developer) {
    return <p className='text-center mt-10 text-lg'>Developer not found</p>
  }

  return (
    <>
      <Title
        title={"Developers Projects"}
        h={"mt-[30px] sm:mt-[35px] lg:mt-[40px]"}
        d={"md-[4px]"}
      />

      <div className="relative w-full max-w-[1367px] mt-[20px] sm:mt-[25px] lg:mt-[30px] h-[250px] sm:h-[350px] md:h-[430px] lg:h-[525px] mx-auto px-4 sm:px-6 lg:px-0 rounded-[20px] sm:rounded-[24px] overflow-hidden">
        <img
          src={developer.images?.[0]}
          alt={developer.name_en}
          className="w-full h-full object-cover rounded-[20px] sm:rounded-[24px]"
        />
      </div>

      <div className='w-full max-w-[1388px] mx-auto mt-[40px] sm:mt-[50px] lg:mt-[61px] flex flex-wrap justify-center lg:justify-start gap-5 sm:gap-6 lg:gap-[31px] px-4 sm:px-6 lg:px-0 mb-[80px] sm:mb-[120px] lg:mb-[183px]'>

        {developer.projects?.length > 0 ? (
          developer.projects.map((project) => (
            <Link
              to={`/projects/${project.id}`}
              key={project.id}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-21px)] max-w-[442px] min-h-[480px] sm:min-h-[510px] lg:h-[529px] bg-white border border-[#EAEAEA] rounded-[16px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col"
            >
              <div className="w-full h-[220px] sm:h-[240px] lg:h-[284px] shrink-0 overflow-hidden">
                <img
                  src={project.images?.[0]}
                  alt={project.name_en}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className='min-h-[42px] py-2 border border-[#CEC7C7] flex items-center justify-center px-2'>
                <div className='flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3 lg:gap-5 gap-y-2 text-[#A18E77] font-lato text-[12px] sm:text-[14px] lg:text-[16px]'>

                  <div className='flex items-center gap-1 sm:gap-2'>
                    <img src={li} alt="Units" className='w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] lg:w-[24px] lg:h-[24px] object-contain'/>
                    <span className='font-bold font-lato'>7 Units</span>
                  </div>

                  <span className="hidden sm:block h-[20px] border-l border-[#CEC7C7]"></span>

                  <div className='flex items-center gap-1 sm:gap-2'>
                    <img src={gi} alt="gym" className='w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] lg:w-[24px] lg:h-[24px] object-contain'/>
                    <span className='font-bold font-lato'>5 Gym</span>
                  </div>

                  <span className="hidden sm:block h-[20px] border-l border-[#CEC7C7]"></span>

                  <div className='flex items-center gap-1 sm:gap-2'>
                    <img src={rpi} alt="ruler" className='w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] lg:w-[24px] lg:h-[24px] object-contain'/>
                    <span className='font-bold font-lato'>
                      {project.units?.[0]?.size ?? 500} m²
                    </span>
                  </div>

                </div>
              </div>

              <div className="flex flex-col flex-1 px-[13px] py-[14px] min-w-0">
                <h3 className="font-playfair font-semibold text-[19px] sm:text-[21px] lg:text-[22px] text-[#8E1616] truncate">
                  {project.name_en}
                </h3>

                <p className="mt-[15px] sm:mt-[18px] lg:mt-[21px] font-lato text-[14px] sm:text-[15px] lg:text-[16px] text-[#847D7D] line-clamp-4">
                  {project.description_en}
                </p>
              </div>

              <div className='px-[17px] pb-[15px] sm:pb-[18px] lg:pb-[21px]'>
                <span className='w-full min-h-[35px] flex items-center justify-center border border-[#8E1616] rounded-[8px] font-lato text-[14px] sm:text-[15px] lg:text-[16px] text-[#8E1616]'>
                  View Details
                </span>
              </div>
            </Link>
          ))
        ) : (
          <p className="font-lato font-bold text-[18px] sm:text-[20px] text-[#8E1616] text-center w-full">
            No projects available for this developer yet.
          </p>
        )}

      </div>
    </>
  )
}

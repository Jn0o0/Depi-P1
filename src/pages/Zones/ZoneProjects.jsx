
import React, { useEffect, useState } from 'react'
import api from '../../utils/axios_instance'
import { useParams, Link, useLocation } from 'react-router-dom'
import Title from '../../components/Title'
import rpi from '../../assets/Icons/ruler-pencil_icon.svg'
import gi from '../../assets/Icons/Gym_icon.svg'
import li from '../../assets/Icons/Apartment_icon.svg'

export default function ZoneProjects() {
    const { zoneId } = useParams()
    const location = useLocation()
    const [zone, setZone] = useState(location.state?.zone || null)

    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getProjects() {
            try {
                const r = await api.get('/projects/all-projects')
                const filteredProjects = r.data.filter(project => project.zoneId === zoneId)
                setProjects(filteredProjects)
                setLoading(false)
            }
            catch (error) {
                setLoading(false)
            }
        }
        getProjects()
    }, [zoneId])

    if (loading) {
        return (
            <div className='flex items-center justify-center h-screen'>
                <p className='text-2xl font-bold'>Loading...</p>
            </div>
        )
    }

    return (
        <>
            <Title title={"Zone Projects"} h={"mt-[40px]"} d={"md-[4px]"} />

            <div className='w-full max-w-[1367px] mt-[30px] h-[525px] mx-auto rounded-[24px] overflow-hidden max-xl:mx-[24px] max-xl:w-[calc(100%-48px)] max-lg:h-[400px] max-md:mt-[20px] max-md:h-[300px] max-md:mx-[16px] max-md:w-[calc(100%-32px)] max-sm:h-[220px] max-sm:rounded-[14px]'>
                <img
                    src={zone?.images?.[0]}
                    alt="Zone"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className='w-full max-w-[1363px] mx-auto mt-[61px] flex flex-wrap justify-start gap-[31px] mb-[183px] max-xl:px-[24px] max-xl:justify-center max-lg:gap-[20px] max-md:mt-[40px] max-md:px-[16px] max-md:gap-[16px] max-md:mb-[80px]'>

                {projects.length > 0 ? (
                    projects.map((project) => (
                        <Link
                            to={`/projects/${project.id}`}
                            key={project.id}
                            className='w-full max-w-[442px] h-[529px] bg-white border border-[#EAEAEA] rounded-[16px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col max-lg:max-w-[calc(50%-10px)] max-md:max-w-full max-md:h-auto max-md:min-h-[480px]'
                        >
                            <div className='w-full h-[284px] shrink-0 overflow-hidden max-md:h-[240px] max-sm:h-[210px]'>
                                <img
                                    src={project.images?.[0]}
                                    alt={project.name_en}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className='h-[42px] shrink-0 border border-[#CEC7C7] flex items-center justify-center max-sm:px-[5px]'>
                                <div className='flex items-center justify-center gap-5 text-[#A18E77] font-lato text-[16px] max-sm:gap-[7px] max-sm:text-[12px] max-[380px]:gap-[4px] max-[380px]:text-[10px]'>
                                    <img src={li} alt="Units" className='w-[24px] h-[24px] object-contain max-sm:w-[17px] max-sm:h-[17px]' />
                                    <span className='font-bold font-lato'>7 Units</span>

                                    <span className="h-[20px] border-l border-[#CEC7C7]"></span>

                                    <img src={gi} alt="gym" className='w-[24px] h-[24px] object-contain max-sm:w-[17px] max-sm:h-[17px]' />
                                    <span className='font-bold font-lato'>5 Gym</span>

                                    <span className="h-[20px] border-l border-[#CEC7C7]"></span>

                                    <img src={rpi} alt="ruler" className='w-[24px] h-[24px] object-contain max-sm:w-[17px] max-sm:h-[17px]' />
                                    <span className='font-bold font-lato'>{project.units?.[0]?.size ?? 500} m²</span>
                                </div>
                            </div>

                            <div className='flex flex-col flex-1 px-[13px] py-[14px] max-sm:px-[10px]'>
                                <div className='flex items-center justify-between'>
                                    <h3 className='font-playfair font-semibold text-[22px] text-[#8E1616] truncate max-md:text-[19px] max-sm:text-[18px]'>
                                        {project.name_en}
                                    </h3>
                                </div>

                                <p className='mt-[21px] font-lato text-[16px] overflow-hidden text-[#847D7D] max-md:text-[14px] max-sm:mt-[12px]'>
                                    {project.description_en}
                                </p>
                            </div>

                            <div className='px-[17px]'>
                                <span className='w-full h-[35px] mt-auto mb-[21px] flex items-center justify-center border border-[#8E1616] rounded-[8px] font-lato text-[16px] text-[#8E1616]'>
                                    View Details
                                </span>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className="font-lato font-bold text-[24px] text-[#8E1616]">
                        No projects found in this zone
                    </p>
                )}
            </div>
        </>
    )
}


import React, { useEffect, useState } from 'react'
import api from '../../utils/axios_instance'
import { useParams } from 'react-router-dom'
import li from '../../assets/Icons/location_icon.svg'
import Title from '../../components/Title'

export default function ProjectsDetails() {

    const { id } = useParams()

    const [project, setProject] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function getProject() {
            try {
                const r = await api.get(`/projects/${id}`)
                console.log(r.data)
                setProject(r.data)
                setLoading(false)
            } catch (error) {
                setLoading(false)
            }
        }

        getProject()

    }, [id])

    if (loading) {
        return (
            <div className='flex items-center justify-center h-screen'>
                <p className='text-2xl font-bold'>Loading...</p>
            </div>
        )
    }

    if (!project) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-2xl font-bold">Project not found</p>
            </div>
        )
    }

    const projectTitle = project.title_en || project.name_en
    const projectImages = project.images || []

    return (
        <>
            <Title title={`${projectTitle} project`} h={"mt-[40px]"} d={"md-[4px]"} />

            <div className='w-full max-w-[1381px] mt-[5px] mx-auto px-[16px]'>
                <img
                    src={projectImages[0]}
                    alt={projectTitle}
                    className='w-full h-[562px] object-cover rounded-[24px] shadow-md max-lg:h-[450px] max-md:h-[350px] max-sm:h-[240px] max-sm:rounded-[14px]'
                />

                <div className='flex gap-[8px] mt-[11px] overflow-x-auto max-md:grid max-md:grid-cols-3 max-md:overflow-visible max-sm:grid-cols-2'>
                    {projectImages.slice(1).map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`${projectTitle} ${index + 2}`}
                            className='w-[270px] h-[180px] object-cover rounded-[12px] shadow-md shrink-0 max-md:w-full max-md:h-[140px] max-sm:h-[110px] max-sm:rounded-[8px]'
                        />
                    ))}
                </div>
            </div>

            <div className='w-full flex justify-between items-start mt-[63px] px-[37px] gap-[25px] max-lg:px-[24px] max-md:mt-[40px] max-md:px-[20px] max-md:flex-col max-sm:px-[16px]'>

                <div className='flex flex-col gap-[11px] min-w-0'>
                    <h1 className='font-bold font-lato text-[#8E1616] text-[40px] break-words max-lg:text-[34px] max-md:text-[30px] max-sm:text-[25px]'>
                        {projectTitle}
                    </h1>

                    <div className='flex items-center gap-2 text-[#847D7D] font-lato font-medium'>
                        <img src={li} alt="Location" className='w-[25px] h-[25px] shrink-0' />
                        <p className='text-[20px] max-md:text-[17px] max-sm:text-[15px]'>
                            {project.zone?.city_en} - Egypt
                        </p>
                    </div>
                </div>

                <div className='flex items-center gap-[20px] max-md:w-full max-md:gap-[15px] max-sm:flex-wrap'>
                    <img
                        src={project.developer?.images?.[0]}
                        alt='Developer'
                        className='w-[196px] h-[65px] object-contain max-sm:w-[130px] max-sm:h-[55px]'
                    />

                    <div className="flex flex-col min-w-0">
                        <span className="font-lato font-bold text-[28px] text-[#1D263B] uppercase max-md:text-[23px] max-sm:text-[19px]">
                            {project.developer?.name_en}
                        </span>

                        <span className="font-lato text-[18px] tracking-[4px] text-[#64748B] max-sm:text-[13px] max-sm:tracking-[3px]">
                            DEVELOPMENTS
                        </span>
                    </div>
                </div>
            </div>

            <div className='w-full max-w-[1366px] min-h-[455px] mx-auto mt-[69px] px-[37px] flex justify-between gap-[40px] mb-[200px] max-xl:gap-[30px] max-lg:px-[24px] max-md:flex-col max-md:gap-[50px] max-md:mt-[45px] max-md:px-[20px] max-md:mb-[80px] max-sm:px-[16px]'>

                <div className='flex flex-col items-start w-[318px] gap-[25px] shrink-0 max-md:w-full'>
                    <h2 className='font-lato font-bold text-[26px] text-[#1D1616] max-sm:text-[23px]'>
                        At a glance
                    </h2>

                    <ul className='list-disc list-inside flex flex-col gap-[30px] max-sm:gap-[20px]'>
                        <li className='font-lato text-[26px] text-[#847D7D] max-md:text-[22px] max-sm:text-[19px]'>
                            Plot size ca.: 300 m
                        </li>

                        <li className='font-lato text-[26px] text-[#847D7D] max-md:text-[22px] max-sm:text-[19px]'>
                            Living area ca.: {project.units?.[0]?.size ?? '500'} m²
                        </li>

                        <li className='font-lato text-[26px] text-[#847D7D] max-md:text-[22px] max-sm:text-[19px]'>
                            Units: 10
                        </li>
                    </ul>
                </div>

                <div className='w-[790px] flex flex-col gap-[25px] max-md:w-full'>
                    <h2 className='font-lato font-bold text-[26px] text-[#1D1616] max-sm:text-[23px]'>
                        Overview
                    </h2>

                    <p className='font-lato font-normal text-[26px] leading-[150%] text-[#847D7D] w-full max-md:text-[22px] max-sm:text-[18px]'>
                        {project.description_en}
                    </p>
                </div>
            </div>
        </>
    )
}

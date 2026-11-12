
import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../utils/axios_instance'
import li from '../../assets/Icons/location_icon.svg'

export default function UnitsDetails() {
    const { id } = useParams()
    const [unit, setUnit] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getUnit = async () => {
            try {
                const response = await api.get(`/unit/${id}`)
                console.log("Unit Details:", response.data)
                setUnit(response.data)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching unit details:', error)
                setLoading(false)
            }
        }

        getUnit()
    }, [id])

    if (loading) {
        return (
            <div className='flex items-center justify-center h-screen'>
                <p className='text-2xl font-bold'>Loading...</p>
            </div>
        )
    }

    if (!unit) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-2xl font-bold">Unit not found</p>
            </div>
        )
    }

    return (
        <>
            <div className='w-full max-w-[1381px] mt-[5px] mx-auto px-[16px]'>
                <img
                    src={unit.images?.[0]}
                    alt={unit.title_en}
                    className='w-full h-[562px] object-cover rounded-[24px] shadow-md max-lg:h-[450px] max-md:h-[350px] max-sm:h-[240px] max-sm:rounded-[14px]'
                />

                <div className='flex gap-[8px] mt-[11px] overflow-x-auto max-md:grid max-md:grid-cols-3 max-md:overflow-visible max-sm:grid-cols-2'>
                    {unit.images?.slice(1).map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`${unit.title_en} ${index + 2}`}
                            className='w-[270px] h-[180px] object-cover rounded-[12px] shadow-md shrink-0 max-md:w-full max-md:h-[140px] max-sm:h-[110px] max-sm:rounded-[8px]'
                        />
                    ))}
                </div>
            </div>

            <div className='w-full flex justify-between items-start mt-[63px] px-[37px] gap-[20px] max-md:mt-[40px] max-md:px-[20px] max-md:flex-col max-sm:px-[16px]'>
                <div className='flex flex-col gap-[11px] min-w-0'>
                    <h1 className='font-bold font-lato text-[#8E1616] text-[40px] break-words max-lg:text-[34px] max-md:text-[30px] max-sm:text-[25px]'>
                        {unit.title_en}
                    </h1>

                    <div className='flex items-center gap-2 text-[#847D7D] font-lato font-medium'>
                        <img src={li} alt="Location" className='w-[25px] h-[25px] shrink-0' />
                        <p className='text-[20px] max-md:text-[17px] max-sm:text-[15px]'>
                            {unit.project?.name_en} - Egypt
                        </p>
                    </div>
                </div>

                <p className="font-bold font-lato text-[#A18E77] text-[40px] w-[291px] max-md:w-full max-md:text-[30px] max-sm:text-[26px]">
                    {unit.price} EGP
                </p>
            </div>

            <div className='w-full max-w-[1366px] min-h-[455px] mx-auto mt-[69px] px-[37px] flex justify-between gap-[254px] mb-[148px] max-xl:gap-[80px] max-lg:gap-[40px] max-md:flex-col max-md:gap-[50px] max-md:px-[20px] max-md:mt-[45px] max-md:mb-[70px] max-sm:px-[16px]'>

                <div className='flex flex-col items-start w-[318px] gap-[25px] shrink-0 max-md:w-full'>
                    <h2 className='font-lato font-bold text-[26px] text-[#1D1616] max-sm:text-[23px]'>
                        At a glance
                    </h2>

                    <ul className='list-disc list-inside flex flex-col gap-[30px] max-sm:gap-[20px]'>
                        <li className='font-lato text-[26px] text-[#847D7D] max-md:text-[22px] max-sm:text-[19px]'>
                            Living area ca.: {unit.size ?? '--'} m²
                        </li>

                        <li className='font-lato text-[26px] text-[#847D7D] max-md:text-[22px] max-sm:text-[19px]'>
                            Bedrooms: {unit.bedrooms ?? '--'}
                        </li>

                        <li className='font-lato text-[26px] text-[#847D7D] max-md:text-[22px] max-sm:text-[19px]'>
                            Bathrooms: {unit.bathrooms ?? '--'}
                        </li>

                        <li className='font-lato text-[26px] text-[#847D7D] max-md:text-[22px] max-sm:text-[19px]'>
                            Status: <span className='text-[#21E008] font-bold'>{unit.status ?? '--'}</span>
                        </li>
                    </ul>
                </div>

                <div className='flex-1 min-w-0 flex flex-col gap-[25px] mb-[254px] max-md:mb-0'>
                    <h2 className='font-lato font-bold text-[26px] text-[#1D1616] max-sm:text-[23px]'>
                        Overview
                    </h2>

                    <p className='font-lato font-normal text-[26px] text-[#847D7D] w-full min-h-[273px] max-md:min-h-0 max-md:text-[22px] max-sm:text-[18px]'>
                        {unit.description_en}
                    </p>

                    <div className='flex items-center gap-[22px] mt-auto max-md:flex-col max-md:items-stretch max-md:gap-[15px]'>
                        <button className='w-[372px] h-[57px] flex items-center justify-center px-[26px] rounded-[8px] bg-[#00E200] text-[#EEEEEE] font-lato font-bold text-[20px] max-md:w-full max-sm:text-[17px]'>
                            Contact via WhatsApp
                        </button>

                        <button className='w-[372px] h-[57px] flex items-center justify-center px-[26px] rounded-[8px] bg-white text-[#8E1616] font-lato font-bold text-[20px] border border-[#8E1616] max-md:w-full max-sm:text-[17px]'>
                            Call
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

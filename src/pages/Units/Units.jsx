
import React, { useState } from 'react'
import Hero from '../../components/Hero'
import unitsbg from '../../assets/Images/Unitshero.png'
import { useEffect } from 'react'
import api from '../../utils/axios_instance'
import sr from '../../assets/Icons/Search.svg'
import da from '../../assets/Icons/h_arrow.svg'
import ul from '../../assets/Icons/unit_oh.svg'
import bdr from '../../assets/Icons/bedroom_icon.svg'
import bthi from '../../assets/Icons/bathrom_icon.svg'
import rpi from '../../assets/Icons/ruler-pencil_icon.svg'
import { Link } from 'react-router-dom'

export default function Units() {
  const [units, setUnits] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [price, setPrice] = useState("")
  const [bedrooms, setBedrooms] = useState("")
  const [developer, setDeveloper] = useState("")
  const [zone, setZone] = useState("")
  const [project, setProject] = useState("")
  const [status, setStatus] = useState("")

  useEffect(() => {
    async function getUnits() {
      setLoading(true)
      try {
        const r = await api.get("/unit")
        setUnits(r.data)
        setLoading(false)
      }
      catch (error) {
        console.error("Error fetching units:", error)
        setLoading(false)
      }
    }
    getUnits()
  }, [])

  const filteredUnits = units.filter((unit) => {
    return (
      unit.title_en.toLowerCase().includes(search.toLowerCase()) &&
      (price === "" || Number(unit.price) <= Number(price)) &&
      (bedrooms === "" || unit.bedrooms === Number(bedrooms)) &&
      (developer === "" || unit.developerName_en === developer) &&
      (zone === "" || unit.zoneName_en === zone) &&
      (project === "" || unit.projectName_en === project) &&
      (status === "" || unit.status === status)
    )
  })

  if (loading) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <p className='text-2xl font-bold'>Loading...</p>
      </div>
    )
  }

  return (
    <>
      <Hero
        bg={unitsbg}
        title={"Where Visionary Design Meets Daily Life"}
        desc={"Experience a collection of residences designed as personal sanctuaries. Each unit balances expansive city views with artisanal textures and quiet, light-filled interiors to create the ultimate retreat from the world"}
        btn={false}
        icons={true}
      />

      <div className='flex flex-col items-center justify-center mb-[142px] max-md:mb-[60px]'>

        <div className='mt-[206px] mx-[37px] max-w-[1366px] h-[83px] flex items-center justify-between border border-[#8E1616] rounded-[8px] bg-white overflow-hidden max-xl:mx-[24px] max-xl:h-auto max-xl:grid max-xl:grid-cols-4 max-xl:overflow-visible max-xl:w-[calc(100%-48px)] max-xl:p-[10px] max-xl:gap-[10px] max-md:mt-[90px] max-md:grid-cols-2 max-sm:mt-[60px] max-sm:mx-[16px] max-sm:w-[calc(100%-32px)] max-sm:grid-cols-1'>

          <div className='w-[326px] h-full shrink-0 flex items-center justify-between px-[23px] border-r border-[#8E1616] max-xl:w-full max-xl:h-[63px] max-xl:border max-xl:rounded-[6px] max-xl:px-[12px] max-xl:col-span-2 max-md:col-span-2'>
            <input type='text' placeholder='Search Property' value={search} onChange={(e)=>setSearch(e.target.value)} className='w-full min-w-0 font-lato font-bold outline-none text-[24px] text-[#BEBEBE] max-md:text-[18px]'/>
            <img src={sr} alt="Search" className='w-[43px] h-[43px] object-contain shrink-0 max-md:w-[30px] max-md:h-[30px]'/>
          </div>

          <div className='w-[174px] h-[63px] shrink-0 flex items-center justify-between px-[11px] border-r border-[#8E1616] max-xl:w-full max-xl:border max-xl:rounded-[6px]'>
            <select value={bedrooms} onChange={(e)=>setBedrooms(e.target.value)} className='w-full min-w-0 outline-none appearance-none bg-transparent font-bold font-lato text-[24px] text-[#BEBEBE] cursor-pointer max-md:text-[16px]'>
              <option value="" className='font-lato font-normal'>Bedrooms</option>
              <option value="2" className='font-lato font-normal'>2 Bedrooms</option>
              <option value="3" className='font-lato font-normal'>3 Bedrooms</option>
              <option value="4" className='font-lato font-normal'>4 Bedrooms</option>
              <option value="12" className='font-lato font-normal'>12 Bedroom</option>
            </select>
            <img src={da} alt="Dropdown Arrow" className='w-[20px] h-[20px] object-contain shrink-0'/>
          </div>

          <div className='w-[174px] h-[63px] shrink-0 flex items-center justify-between px-[11px] border-r border-[#8E1616] max-xl:w-full max-xl:border max-xl:rounded-[6px]'>
            <select value={developer} onChange={(e)=>setDeveloper(e.target.value)} className='w-full min-w-0 outline-none appearance-none bg-transparent font-bold font-lato text-[24px] text-[#BEBEBE] cursor-pointer max-md:text-[16px]'>
              <option value="" className='font-lato font-normal'>Developer</option>
            </select>
            <img src={da} alt="Dropdown Arrow" className='w-[20px] h-[20px] object-contain shrink-0'/>
          </div>

          <div className='w-[147px] h-[63px] shrink-0 flex items-center justify-between px-[12px] border-r border-[#8E1616] max-xl:w-full max-xl:border max-xl:rounded-[6px]'>
            <select value={zone} onChange={(e)=>setZone(e.target.value)} className='w-full min-w-0 outline-none appearance-none bg-transparent font-bold font-lato text-[24px] text-[#BEBEBE] cursor-pointer max-md:text-[16px]'>
              <option value="" className='font-lato font-normal'>Zone</option>
            </select>
            <img src={da} alt="Dropdown Arrow" className='w-[20px] h-[20px] object-contain shrink-0'/>
          </div>

          <div className='w-[174px] h-[63px] shrink-0 flex items-center justify-between px-[11px] border-r border-[#8E1616] max-xl:w-full max-xl:border max-xl:rounded-[6px]'>
            <select value={project} onChange={(e)=>setProject(e.target.value)} className='w-full min-w-0 outline-none appearance-none bg-transparent font-bold font-lato text-[24px] text-[#BEBEBE] cursor-pointer max-md:text-[16px]'>
              <option value="" className='font-lato font-normal'>Project</option>
            </select>
            <img src={da} alt="Dropdown Arrow" className='w-[20px] h-[20px] object-contain shrink-0'/>
          </div>

          <div className='w-[174px] h-[63px] shrink-0 flex items-center justify-between px-[11px] border-r border-[#8E1616] max-xl:w-full max-xl:border max-xl:rounded-[6px]'>
            <select value={status} onChange={(e)=>setStatus(e.target.value)} className='w-full min-w-0 outline-none appearance-none bg-transparent font-bold font-lato text-[24px] text-[#BEBEBE] cursor-pointer max-md:text-[16px]'>
              <option value="" className='font-lato font-normal'>Status</option>
            </select>
            <img src={da} alt="Dropdown Arrow" className='w-[34px] h-[34px] object-contain shrink-0 max-md:w-[20px] max-md:h-[20px]'/>
          </div>

          <div className='w-[185px] h-[63px] shrink-0 flex items-center justify-between px-[11px] border-r border-[#8E1616] max-xl:w-full max-xl:border max-xl:rounded-[6px]'>
            <select value={price} onChange={(e)=>setPrice(e.target.value)} className='w-full min-w-0 outline-none appearance-none bg-transparent font-bold font-lato text-[24px] text-[#BEBEBE] cursor-pointer max-md:text-[16px]'>
              <option value="" className='font-lato font-normal'>Price Range</option>
            </select>
            <img src={da} alt="Dropdown Arrow" className='w-[20px] h-[20px] object-contain shrink-0'/>
          </div>
        </div>

        <button className='mt-[61px] bg-gradient-to-r from-[#8E1616] to-[#C34B4B] w-[415px] h-[57px] rounded-lg font-bold font-lato text-[#EEEEEE] max-md:mt-[30px] max-md:w-[calc(100%-32px)] max-md:max-w-[415px]'>
          Search
        </button>

        <div className='w-full max-w-[1366px] mx-auto flex flex-wrap justify-start items-center mt-[132px] gap-[20px] max-xl:px-[24px] max-xl:justify-center max-xl:mt-[80px] max-md:mt-[60px] max-md:px-[16px] max-sm:gap-[16px]'>
          {filteredUnits.length > 0 ? (
            filteredUnits.map((unit) => (
              <Link to={`/units/${unit.id}`} key={unit.id} className="w-full max-w-[442px] min-h-[529px] flex flex-col border border-[#EAEAEA] rounded-[16px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] overflow-hidden max-lg:max-w-[calc(50%-10px)] max-md:max-w-full max-sm:min-h-0">

                <div className='relative w-full h-[284px] shrink-0 max-md:h-[240px] max-sm:h-[210px]'>
                  <img src={unit.images?.[0]} alt={unit.title_en} className='w-full h-full object-cover'/>
                  <span className='absolute top-[28px] right-[8px] w-[104px] h-[28px] flex items-center justify-center rounded-[4px] bg-[#21E008] font-lato font-bold text-[16px] text-[#FFFFFF]'>
                    {unit.status}
                  </span>
                </div>

                <div className='w-full h-[42px] shrink-0 border border-[#CEC7C7] flex items-center justify-center max-sm:h-auto max-sm:min-h-[42px] max-sm:px-[5px]'>
                  <div className='flex items-center justify-center gap-4 font-lato text-[#A18E77] text-[16px] max-sm:gap-[7px] max-sm:text-[12px] max-[380px]:gap-[4px] max-[380px]:text-[10px]'>
                    <img src={bdr} alt="Bedroom Icon" className='w-[24px] h-[24px] object-contain max-sm:w-[17px] max-sm:h-[17px]'/>
                    <span>{unit.bedrooms} Bedrooms</span>
                    <span className='h-[20px] border-l border-[#CEC7C7]'></span>
                    <img src={bthi} alt="Bathroom Icon" className='w-[24px] h-[24px] object-contain max-sm:w-[17px] max-sm:h-[17px]'/>
                    <span>{unit.bathrooms} Bathrooms</span>
                    <span className='h-[20px] border-l border-[#CEC7C7]'></span>
                    <img src={rpi} alt="Ruler Pencil Icon" className='w-[24px] h-[24px] object-contain max-sm:w-[17px] max-sm:h-[17px]'/>
                    <span>{unit.size} m</span>
                  </div>
                </div>

                <div className='flex flex-col flex-1 px-[13px] py-[14px] max-sm:px-[10px]'>
                  <div className='flex items-center justify-between gap-2 max-sm:flex-col max-sm:items-start'>
                    <h3 className='font-playfair font-semibold text-[22px] text-[#8E1616] truncate max-md:text-[18px] max-sm:max-w-full'>
                      {unit.title_en}
                    </h3>
                    <p className='font-lato font-bold text-[26px] text-[#A18E77] whitespace-nowrap max-md:text-[20px] max-sm:text-[18px]'>
                      {unit.price} EGP
                    </p>
                  </div>

                  <p className='mt-[21px] font-lato text-[16px] overflow-hidden text-[#847D7D] max-md:text-[14px] max-sm:mt-[12px]'>
                    Experience the true meaning of modern living in this luxurious apartment
                    featuring spacious rooms, elegant finishes, and breathtaking views.
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
            <p className='font-lato font-bold text-[24px] text-[#8E1616]'>
              No units found
            </p>
          )}
        </div>
      </div>
    </>
  )
}

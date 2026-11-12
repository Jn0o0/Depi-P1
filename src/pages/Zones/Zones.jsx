
import React, {useState, useEffect} from 'react'
import Hero from '../../components/Hero'
import zonesbg from '../../assets/Images/zoneshero.png'
import api from "../../utils/axios_instance"
import {Link, useNavigate, useParams} from 'react-router-dom'
import Counter from '../../components/Counter'

export default function Zones() {
  const [zones, setZones] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getZones() {
      setLoading(true)
      try {
        const r = await api.get("/zone")
        setZones(r.data)
        setLoading(false)
      } catch (err) {
        setLoading(false)
      }
    }
    getZones()
  }, [])

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
        bg={zonesbg}
        title={"Destinations Defined by Distinction"}
        desc={"From the quiet pulse of the shoreline to the vibrant energy of the metropolitan center, explore our guide to the neighborhoods that mirror your ambition and your aesthetic."}
        btn={false}
        icons={true}
      />

      <div className='w-full max-w-[1366px] mx-auto mt-[87px] mb-[86px] px-4 lg:px-0 flex flex-wrap lg:flex-nowrap gap-[20px]'>
        {zones.map((zone) => (
          <Link
            to={`/zones/${zone.id}`}
            state={{ zone }}
            key={zone.id}
            className='w-full sm:w-[calc(50%-10px)] lg:flex-1 min-w-0 h-[221px] rounded-[8px] shadow-md overflow-hidden relative block'
          >
            <img
              src={zone.images?.[0]}
              alt={zone.name_en}
              className='w-full h-full object-cover'
            />
          </Link>
        ))}
      </div>
    </>
  )
}

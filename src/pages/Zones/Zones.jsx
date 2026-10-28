import React , {useState,useEffect} from 'react'
import Hero from '../../components/Hero'
import zonesbg from '../../assets/Images/zoneshero.png'
import api from "../../utils/axios_instance"
import { Link, useNavigate,useParams } from 'react-router-dom'

export default function Zones() {

  const [zones, setZones] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(()=>{
    async function getZones(){
      setLoading(true)
      setError(null)
      try {
        const r = await api.get("/zone")
        setZones(r.data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    getZones()
  },[])
   const cl= useNavigate() 
  return (
    <>
    <Hero
    bg={zonesbg}
    title={"Destinations Defined by Distinction"}
    desc={"From the quiet pulse of the shoreline to the vibrant energy of the metropolitan center, explore our guide to the neighborhoods that mirror your ambition and your aesthetic."}
    btn={false}
    icons={true}
    />

    {loading && <p>Loading...</p>}
    {error && <p>Error: {error.message}</p>}
    <div>
      {
        zones.map((zone)=>{
          return(
            <div key={zone.id } >
              <Link to={`/zones/${zone.id}`} >
              <img src={zone.images} alt={"photo"} className='w-md' />
              </Link>             
              <p className='font-bold'>{zone.name_en}</p>
            </div>
          )
        })
      }
    </div>

    </>
  )
}

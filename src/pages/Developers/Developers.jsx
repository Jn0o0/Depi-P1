import React,{useEffect,useState} from 'react'
import api from "../../utils/axios_instance"
import Hero from '../../components/Hero'
import developersbg from '../../assets/Images/developershero.png'
export default function Developers() {

  const [developers, setDevelopers] = useState([])
  useEffect(()=>{
    async function getDevelopers(){
      const r =await api.get("/developer")
      setDevelopers(r.data)
      console.log(developers)
    }
    getDevelopers()
  },[])
  useEffect(()=>{
    console.log(developers)
  },[developers])




  return (
    <>
    <Hero
    bg={developersbg}
    title={"Defining the Future Skyline."}
    desc={"Great developments require more than just capital; they require a narrative. We provide the elite marketing and specialized brokerage services needed to position your landmark projects in front of the world’s most discerning buyers."}
    btn={false}
    icons={true}
    />
    <div>
    {developers.map((developer)=>{
      return(<p className='font-bold bg-amber-700'>{developer.name_en}</p>)
    })}
    </div>
    </>
  )
}

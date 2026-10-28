import React from 'react'
import Hero from '../../components/Hero'
import contactusbg from '../../assets/Images/contactushero.png'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext' 
export default function ContactUs() {
  const data = useContext(UserContext)
  return (
    <>
    <Hero
    bg={contactusbg}
    title={"Connected Globally. Available Locally."}
    desc={"With experts positioned in the world’s most influential markets, we are never more than a conversation away. Reach out to our team to experience a new standard of real estate advisory."}
    btn={false}
    icons={false}
    />
    <p>{data.name}</p>
    <p>{data.age}</p>
    <p>{data.email}</p>
    </>
  )
}

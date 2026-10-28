import React from 'react'
import Hero from '../../components/Hero'
import unitsbg from '../../assets/Images/Unitshero.png'
export default function Units() {
  return (
    <>
    <Hero
    bg={unitsbg}
    title={"Where Visionary Design Meets Daily Life"}
    desc={"Experience a collection of residences designed as personal sanctuaries. Each unit balances expansive city views with artisanal textures and quiet, light-filled interiors to create the ultimate retreat from the world"}
    btn={false}
    icons={true}

    
    />
    </>
  )
}

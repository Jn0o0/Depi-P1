import React from 'react'
import { useNavigate,useParams } from 'react-router-dom'

export default function ZoneDetails() {
    const {id} = useParams()


  return (
    <>
    <div>
      <p className='bg-amber-400'>TEST</p>
    </div>
    </>
  )
}

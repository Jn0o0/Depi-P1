import React from 'react'

export default function Title({title , h,d }) {
  return (
    <>
    <div className='flex flex-col justify-center items-center gap-2'>
        <h2 className={`text-center font-playfair font-semibold text-[32px] ${h}`}>{title}</h2>
        <div className={`w-[164px] rounded-xs h-2 bg-[#C34B4B] ${d} mb-[56px]`}></div>
    </div>
    </>
  )
}

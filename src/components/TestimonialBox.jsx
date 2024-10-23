import React from 'react'

export default function TestimonialBox({name,image,desc,position}) {
  return (
    <div className='text-white bg-[#21293c] rounded-md p-7 shadow-[8px_8px_1px_8px_#1c202c]'>
        <p className='text-sm tracking-[0.8px mb-8'>{desc}</p>
        <div className='flex items-center gap-4'>
            <img className='w-14  rounded-[50%] object-contain' src={`/src/assets/images/${image}`} alt="" />
        
        <div>
            <strong className='block mb-1'>{name}</strong>
            <p className='text-sm'>{position}</p>
        </div>
        </div>
    </div>
  )
}

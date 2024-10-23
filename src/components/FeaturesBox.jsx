import React from 'react'

export default function FeaturesBox({title,desc,icon}) {
  return (
    <div className='text-white element-center flex-col text-center'>
        <img className='w-[80px] h-[80px] object-contain' src={`/src/assets/images/${icon}`} alt="" />
        <h4 className='text-xl font-semibold my-[15px]'>{title}</h4>
        <p className='text-sm  mb-3'>{desc}</p>
    </div>
  )
}

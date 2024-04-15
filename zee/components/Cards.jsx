

import React from 'react'

const Cards = ({number,heading,description}) => {
  return (
    <div className='cardBG p-[50px]  z-50 w-full h-auto sm:w-[400px] sm:h-[400px] '>
      <div className='flex items-center mb-4 justify-start gap-3'>
        <div className='w-[40px] h-[1px] opacity-50  bg-white rounded-full'>

        </div>
      <h1 className='text-[#2cf8ff] text-xl    '>  {number}</h1>

      </div>
        <h1 className='text-white text-3xl mb-5 '>  {heading}</h1>
        <p className='text-[#96a7a1] text-normal'>{description}</p>
    </div>
  )
}

export default Cards
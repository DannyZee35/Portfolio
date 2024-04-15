

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CardComponent = ({image,name,to}) => {
  return (
    <div className='rounded-xl sm:w-[600px] w-[350px] sm:p-10 p-3 border-2 hover:shadow-xl'>
              <Link href={to}>
        
      
            <Image src={image} height={500} width={500} className='rounded-xl mb-5 aspect-[16/9] w-full'  />

       

   
        <h2 className='font-bold text-xl'>{name}</h2>
        </Link>
    </div>
  )
}

export default CardComponent
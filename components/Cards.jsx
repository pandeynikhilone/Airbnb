import React from 'react'
import Image from 'next/image'
function Cards({img, distance, location}) {
  return (
    <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
      <div className='relative h-20 w-20'>
        <Image src={img} layout='fill' alt='A brief description of the image' className="rounded-lg"/>
      </div>

      <div>
        <h2>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  )
}

export default Cards

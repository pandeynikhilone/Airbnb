import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
      <Image src="https://links.papareact.com/0fm" alt='A brief description of the image' objectFit='cover' layout='fill'/>

      <div className='relative top-1/2 w-full text-center'>
        <p className='text-sm sm:text-lg '>Not sure where to go? Perfect.</p>
        <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full cursor-pointer font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>I'am Flexible</button>
      </div>
    </div>
  )
}

export default Banner

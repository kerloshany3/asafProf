import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
      <div className=' m-10 justify-center  flex'>
          <div className=' w-1/2 '>
              <h3 className='  font-abril text-6xl w-2/3 mt-14'>Empowering Dreams Through Education and Opportunity </h3>
              <h3 className='  font-abril mt-4 text-primary5/50 text-3xl w-2/3'>From Upper Egypt to Global Success: My Journey and Mission </h3>
              <button className=' font-abril bg-primary2 text-5xl p-2 rounded-lg shadow-2xl shadow-primary2/40 mt-5 text-white outline-2 outline-primary2 outline-dashed outline-offset-2 '>Learn More</button>
          </div>
          <div>
              <Image className=' bg-primary5 mt-7  outline-4 outline-offset-2 outline-dashed outline-primary5 rounded-xl' src='/image.png' width={300} height={500} alt='logo'></Image>
          </div>
    </div>
  )
}

export default Hero
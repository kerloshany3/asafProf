import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
      <div className=' flex'>
          <div>
              
              <h3>Empowering Dreams Through Education and Opportunity
              </h3>
              
          </div>
          <div>
              <Image className=' bg-primary2 rounded-xl' src='/image.png' width={300} height={500} alt='logo'></Image>
          </div>
    </div>
  )
}

export default Hero
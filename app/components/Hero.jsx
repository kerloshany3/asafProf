import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
      <div>
          <div>
              
          </div>
          <div>
              <Image className=' bg-primary2 rounded-xl' src='/image.png' width={100} height={500} alt='logo'></Image>
          </div>
    </div>
  )
}

export default Hero
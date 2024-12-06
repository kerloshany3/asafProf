import React from 'react'

const About = () => {
    return (
        <div className=' outline-dashed outline-primary5 outline-4 outline-offset-4 bg-primary5 p-6 hover:shadow-2xl hover:shadow-white'>
            <h3 className=' font-abril w-fit my-6  rounded-2xl  text-4xl  justify-center m-auto flex  p-5 bg-white outline-4 outline-dashed outline-white  outline-offset-4 z-0 inset-0 text-primary5 duration-500'>About Me</h3>
            <div className=' flex justify-center m-auto '>

                <div className=' flex justify-center'>
                    <h3 className=' w-1/2 font-abril   rounded-2xl  text-3xl border-4  justify-center  text-white  p-5 hover:bg-white hover:text-primary5 duration-500'>{`Welcome to my personal website! I’m asaf, and my journey began in a small village in Upper Egypt. Through dedication and hard work, I’ve been able to achieve my dream of securing scholarships and traveling the world. My mission now is to help others discover and seize similar opportunities. Here, you’ll find insights into my experiences, the scholarships that changed my life, and how you can benefit from these opportunities too`}</h3>
                </div>
                <div >
                    <img src='https://asafnady.com/wp-content/uploads/2024/09/IMG_9711-1.jpg' width={2000} className=' -ml-80 -mt-14 border-white border-4 rounded-2xl' height={2000} alt=' logo'></img>
                </div>
            </div>

        </div>
    )
}

export default About
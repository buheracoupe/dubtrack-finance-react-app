import React from 'react'
import Infographics from "../../Assets/finance infographic.png"
import GetStartedBtn from '../GetStartedBtn'

function About() {
  return (
<div id='about' className="flex mt-24 md:mt-0 flex-col relative gap-4 md:grid md:grid-cols-2 mid:gap-2">
  <div className='flex md:top-1/3 md:left-1/2 md:absolute gap-8 flex-col items-center'>
  <p className='text-3xl font-medium mb-4'>Your Financial Arsenal, Sharpened to Perfection</p>
  <p className='text-lg'>Dubtrack is a cutting-edge financial analytics platform designed to empower investors with data-driven insights. 
    Our state-of-the-art algorithms and proprietary methodologies deliver unparalleled accuracy and precision, 
    providing you with a competitive edge in the dynamic financial markets.</p>
    <GetStartedBtn text="Learn More" />
    </div>
  <div className="">
    <img src={Infographics} alt="finance Infographics" />
  </div>
</div>
  )
}

export default About
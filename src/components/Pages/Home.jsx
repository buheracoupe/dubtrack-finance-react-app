import React from 'react'
import { ReactTyped } from 'react-typed'
import { AiOutlineStock } from "react-icons/ai";
function Home() {

const stringArr = ["Real-time market data", "In-Depth Market Analysis", "Personalized Alerts", "24/7 Customer Support"]
  return (
    <div className="home h-[500px] relative m-auto  w-full">
      <div className="container flex flex-col items-center gap-2 absolute top-1/2 transform -translate-y-1/2">
      <p className='text-2xl sm:text-3xl md:text-4xl'>Track movements of your Watchlist
      <AiOutlineStock className='inline-block pl-2 text-2xl sm:text-3xl md:text-5xl' />
      </p>
      <p className='font-bold text-4xl md:text-5xl lg:text-6xl'>Your Timely Market Intelligence Hub</p>
      <p className='text-lg'>At Dubtrack, we're committed to providing you with the most accurate and reliable financial data available.
      <br/>Our team of experts works tirelessly to ensure that our platform <br/> delivers:
      <ReactTyped className='font-semibold ml-2 text-lg text-gray-900' strings={stringArr} typeSpeed={30} backSpeed={40} loop />
      </p>
      </div>
    </div>
  )
}

export default Home
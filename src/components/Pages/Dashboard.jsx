import React from 'react'
import graphicImg from "../../Assets/dashboardimg.png"
import GetStartedBtn from '../GetStartedBtn'

function Dashboard() {
  return (
<div id='dashboard' className="md:grid ml-4 flex flex-col items-center relative gap-4 md:grid-cols-2">
  <div className="img-container bg-secondary">
    <img src={graphicImg} alt='finance dashboard graphic'/>
  </div>
  <div className="md:absolute md:top-1/2 md:left-1/2 md:transform flex flex-col items-center gap-4 md:-translate-y-2/3 ">
    <h1 className='text-center mb-4 text-black md:text-2xl '>Finance Analytics Dashboard</h1>
    <h1 className='text-secondary mb-8 text-2xl md:text-4xl text-center font-semibold'>YOUR FINANCIAL DASHBOARD, YOUR STRATEGIC ADVANTAGE</h1>
    <p className='text-lg'>Our cutting-edge dashboard provides a comprehensive overview of your financial landscape, leveraging advanced analytics to deliver actionable insights. 
      Delve into granular data visualizations, from real-time market trends to in-depth portfolio analysis.
       With our intuitive interface, you can effortlessly identify correlations, assess risk, and optimize your investment strategies.</p>
       <GetStartedBtn text="Get Started" />
  </div>
</div>
  )
}

export default Dashboard
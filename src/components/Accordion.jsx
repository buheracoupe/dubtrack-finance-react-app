import React from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
function Accordion({text, content}) {
    const [showAccordion, setShowAccordion] = useState(false)
function toggleAccordion(){
    setShowAccordion(!showAccordion)
  }
  return (
    <div onClick={toggleAccordion} className='accordion'>
    <div className="accordion-item flex items-center gap-1  justify-between border-b-2 p-2 border-b-primary">
        <h2>{text}</h2>
        {showAccordion? <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/>}
    </div>
    { showAccordion && <div className="accordion-content  flex flex-col gap-2">
        {content.map((item) => {
          return  <li key={uuidv4()} className='list-none cursor-pointer'>{item}</li>
        })}
    </div>}
    </div>
  )
}

export default Accordion
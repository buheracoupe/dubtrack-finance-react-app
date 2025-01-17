import React, { useState } from 'react'
import { IoMenuOutline } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import Logo from "../Assets/dubtrack-high-resolution-logo-transparent.png"
import AnchorLink from 'react-anchor-link-smooth-scroll';

function NavBar() { 
  const [navShowing, setNavShowing] = useState(false) 

function handleNav(){
setNavShowing(!navShowing)

}


  return (
  <>
<nav className="nav hidden md:flex gap-4">
  <AnchorLink className='hover:font-bold' href="#home">Home</AnchorLink>
  <AnchorLink className='hover:font-bold' href="#dashboard">Dashboard</AnchorLink>
  <AnchorLink className='hover:font-bold' href="#about">About</AnchorLink>
  <AnchorLink className='hover:font-bold' href="#contact">Contact</AnchorLink>
</nav>
<div className="mobile-nav flex  gap-2 md:hidden">
  <div className={`h-full ease-in-out duration-1000 flex-col text-secondary w-[50%] fixed z-10 bg-stone-300 left-0 pt-16 top-0 gap-4 ${navShowing? "flex" : "hidden"}`}>
    <img src={Logo} alt="Logo" className="h-12 object-contain"/>
  <AnchorLink href="#home"  onClick={()=>{setNavShowing(false)}}  className="border-b-2  hover:font-bold border-b-primary text-center font-medium uppercase">Home</AnchorLink>
  <AnchorLink href="#dashboard" onClick={()=>{setNavShowing(false)}} className="border-b-2 hover:font-bold border-b-primary text-center font-medium uppercase" >Dashboard</AnchorLink>
  <AnchorLink href="#about"  onClick={()=>{setNavShowing(false)}}className="border-b-2 hover:font-bold border-b-primary text-center font-medium uppercase">About</AnchorLink>
  <AnchorLink href="#contact" onClick={()=>{setNavShowing(false)}} className="border-b-2 hover:font-bold border-b-primary text-center font-medium uppercase">Contact</AnchorLink>
  <p className="slogan absolute left-1/2 bottom-12 transform -translate-x-1/2">Data, Insights, Decisions...</p>
  </div>
  <div className="toggleMenu">
 <IoMenuOutline  size={25} className={navShowing? "hidden" : "block"} onClick={handleNav}/>
 <MdOutlineClose size={25} className={navShowing? "block" : "hidden"} onClick={handleNav} />
  </div> 
</div>
</>
)
}


export default NavBar
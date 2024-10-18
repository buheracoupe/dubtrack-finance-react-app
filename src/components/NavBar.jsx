import React, { Fragment, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoMenuOutline } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import Logo from "../Assets/dubtrack-high-resolution-logo-transparent.png"

function NavBar() { 
  const [navShowing, setNavShowing] = useState(false) 

function handleNav(){
setNavShowing(!navShowing)

}


  return (
  <>
<nav className="nav hidden md:flex gap-4">
  <NavLink  to="/">Home</NavLink>
  <NavLink  to="/company">Company</NavLink>
  <NavLink  to="/resources">Resources</NavLink>
  <NavLink  to="/about">About</NavLink>
  <NavLink  to="/contact">Contact</NavLink>
</nav>
<div className="mobile-nav flex  gap-2 md:hidden">
  <div className={`h-full ease-in-out duration-1000 flex-col text-secondary w-[50%] fixed z-10 bg-stone-300 left-0 pt-16 top-0 gap-4 ${navShowing? "flex" : "hidden"}`}>
    <img src={Logo} alt="Logo" className="h-12 object-contain"/>
  <NavLink  onClick={()=>{setNavShowing(false)}}  className="border-b-2 border-b-primary text-center font-medium uppercase" to="/">Home</NavLink>
  <NavLink onClick={()=>{setNavShowing(false)}} className="border-b-2 border-b-primary text-center font-medium uppercase" to="/company">Company</NavLink>
  <NavLink onClick={()=>{setNavShowing(false)}} className="border-b-2 border-b-primary text-center font-medium uppercase" to="/resources">Resources</NavLink>
  <NavLink  onClick={()=>{setNavShowing(false)}}className="border-b-2 border-b-primary text-center font-medium uppercase" to="/about">About</NavLink>
  <NavLink onClick={()=>{setNavShowing(false)}} className="border-b-2 border-b-primary text-center font-medium uppercase" to="/contact">Contact</NavLink>
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
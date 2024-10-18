import React from 'react'
import NavBar from './NavBar'
import Logo from "../Assets/dubtrack-high-resolution-logo-transparent.png"


function Header() {
  return (
    <header className='flex justify-between items-center px-16'>
    <img className='h-12 object-contain' src={Logo} alt="Logo" />
      <NavBar />
    </header>
  )
}

export default Header
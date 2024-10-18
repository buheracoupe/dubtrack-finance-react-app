import React from 'react'
import { FaFacebook, FaTwitter, FaSnapchat, FaInstagram } from 'react-icons/fa'
import Logo from "../../Assets/primary color logo.png"
import Accordion from '../Accordion'

function Contact() {
  return (
    <div className=' flex p-2 flex-col md:grid md:grid-rows-3 bg-secondary text-primary' id="contact">
      <div className='flex gap-2 mt-4 mx-auto items-center'>
        <p className='font-semibold text-lg'>Sign-Up for our Newsletter</p>
        <input className='placeholder:text-center focus:outline-none focus:shadow-sm focus:shadow-primary placeholder-[#ccc] p-2 bg-secondary rounded-md border-primary border-2' type="email" placeholder='Enter Email Address' />
        <button class="before:ease relative h-12 w-40 overflow-hidden border text-lg font-medium border-secondary bg-primary text-secondary shadow-2xl transition-all before:absolute 
      before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 rounded-md
       before:bg-secondary before:opacity-10 before:duration-700 hover:shadow-primary hover:before:-translate-x-40">Subscribe</button>
      </div>
      <div className='section-2'>
        <div className='flex mt-4 flex-col items-center logo-container'>
          <img className='h-12 object-contain' src={Logo} alt="dubtrack logo" />
          <p>Data-driven insights, precision-engineered results.
          Your financial future, built on a foundation of accuracy</p>
          <div className="icons flex text-2xl gap-4 m-4 text-primary">
          <FaFacebook />
          <FaTwitter />
          <FaSnapchat />
          <FaInstagram />
           </div>
        </div>
        <div className='accordions items-center w-full my-8 flex justify-between md:hidden'>
        <Accordion content={["About Company", "Company Services", "Job Opportunities", "Creative People"]} text="Company" />
        <Accordion content={["Client Support", "Latest News", "Company Story", "Pricing Packages"]} text="Customer" />
        <Accordion content={["Our Story", "Who We Are", "Our Process", "Latest News"]} text="Additional" />
        </div>
        <div></div>
        <div></div>
      </div>
      <div className='section-3 flex justify-between mt-4 md:mx-12'>
        <div className="link-container flex gap-4 font-medium">
        <p>Privacy Policy</p>
        <p>Legal Notice</p>
        <p>Terms of Service</p>
        </div>
        <p className="copyright font-medium">&copy; 2024 DUBTRACK</p>
      </div>
    </div>
  )
}

export default Contact


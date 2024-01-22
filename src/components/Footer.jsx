import React from 'react'
import Logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <div className='w-full h-[550px] pt-10 z-0 bg-white sm:px-48 px-4'>
      <div className='flex flex-col w-full justify-center items-center text-center space-y-2 text-black'>
        <h1 className='text-4xl font-primary'>Can we help you advance in Kenya?</h1>
        <h3 className='font-secondary'>Contact us to discover your options.</h3>
        <a href='/contact'className='font-secondary border-primary rounded-full bg-primary hover:bg-white hover:text-primary text-white p-3'>Get in touch Now</a>

      </div>
      <div className='flex flex-col lg:items-start items-center'>
        <img src={Logo} className='w-28 h-28'/>
      </div>
      <div className='flex sm:flex-row flex-col'>
        <div className='lg:w-1/4 flex flex-col justify-center items-center lg:text-start text-center'>
        
          <span className='font-secondary py-4 text-black'>+254 78 095 8065</span>
          <div className='w-1/2 flex flex-col lg:justify-start justify-center lg:items-start items-center'>
            <a href='/contact' className='rounded-full bg-primary hover:bg-white text-white hover:text-primary border-primary p-3 cursor-pointer'>Email Us</a>
          </div>

        </div>
        <div className='lg:w-1/4 font-secondary flex flex-col justify-center items-center text-center text-black' >
          <h2 className='text-xl text-primary'>Services</h2>
          <ul >
            <li>Advisory</li>
            <li>Adminstration</li>
            <li>Accounting</li>
            <li>Tax</li>
            <li></li>
          </ul>
        </div>
        <div className='lg:w-1/4 font-secondary flex flex-col justify-center items-center text-center text-black'>
           <h2 className='text-xl text-primary'>Company</h2>
           <ul >
            <li>About Us</li>
            <li>Contact Us</li>
            <li>News & Insights</li>
            <li>Case studies</li>
           </ul>
        </div>
        <div className='lg:w-1/4 font-secondary flex flex-col justify-center items-center text-center text-black'>
           <h2 className='text-xl text-primary'>Resources</h2>
           <ul >
            <li>Formation guides</li>
            <li>Governance guides</li>
            <li>Accounting guides</li>
            <li>Tax guides</li>
            <li>IPO guides</li>
           </ul>
        </div>
      </div>
      <div className='w-full flex flex-col justify-center items-center py-4'>
         <h2 className='font-secondary text-primary'>© Muhami Solutions 2024. All rights reserved.</h2>
      </div>
    </div>
  )
}

export default Footer
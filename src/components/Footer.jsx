import React from 'react'
import Logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <div className='w-full h-[550px] pt-10 z-0 bg-white sm:px-48 px-4'>
      <div className='flex flex-col w-full sm:justify-center justify-start sm:items-center items-start space-y-2'>
        <h1 className='text-4xl font-primary'>Can we help you advance in Kenya?</h1>
        <h3 className='font-secondary'>Contact us to discover your options.</h3>
        <button className='font-secondary border-primary rounded-full'>View your Locations</button>

      </div>
      <div>
        <img src={Logo} className='w-28 h-28'/>
      </div>
      <div className='flex sm:flex-row flex-col'>
        <div className='lg:w-1/4 flex flex-col'>
        
          <span className='font-secondary py-4'>+254 78 095 8065</span>
          <div className='w-1/2 flex flex-col justify-start items-start'>
            <button className='rounded-full border-primary'>Email Us</button>
          </div>

        </div>
        <div className='lg:w-1/4 font-secondary' >
          <h2 className='text-xl'>Services</h2>
          <ul className='flex lg:flex-col flex-row lg:gap-0 gap-6'>
            <li>Advisory</li>
            <li>Adminstration</li>
            <li>Accounting</li>
            <li>Tax</li>
            <li></li>
          </ul>
        </div>
        <div className='lg:w-1/4 font-secondary'>
           <h2 className='text-xl'>Company</h2>
           <ul className='flex lg:flex-col flex-row lg:gap-0 gap-6'>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>News & Insights</li>
            <li>Case studies</li>
           </ul>
        </div>
        <div className='lg:w-1/4 font-secondary'>
           <h2 className='text-xl'>Resources</h2>
           <ul className='flex lg:flex-col flex-row lg:gap-0 gap-2'>
            <li>Formation guides</li>
            <li>Governance guides</li>
            <li>Accounting guides</li>
            <li>Tax guides</li>
            <li>HR & payroll guides</li>
            <li>IPO guides</li>
           </ul>
        </div>
      </div>
      <div className='w-full flex flex-col justify-center items-center'>
         <h2 className='font-secondary'>© Muhami Solutions 2024. All rights reserved.</h2>
      </div>
    </div>
  )
}

export default Footer
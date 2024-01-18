import React from 'react'
import business from '../assets/business.jpg'

const Registration = () => {
  return (
    <div className='w-full h-auto lg:px-56 px-6 pt-24'>
        <h3 className='font-primary text-lg '>Registration process</h3>
      <div className='flex lg:flex-row flex-col gap-4 font-secondary '>
        <div  className='lg:w-1/3'>
          <h1 className='font-semibold text-primary'>Simple steps to start your new business.</h1>
          {/* <img src={business} className='w-full h-96 px-4 pt-4 rounded-full'/> */}
          <div className='w-48 h-96 hidden lg:block' style={{backgroundImage:"url('./assets/business.jpg')", backgroundAttachment:'fixed', backgroundPosition:'center', background:'cover'}}>

          </div>
        </div>
        <div className='lg:w-2/3 text-black'>
          <ul className='space-y-4'>
            <li className='space-y-2 font-secondary'>
               <h2 className='text-2xl font-semibold text-primary'>1. Select your structure and additional company services</h2> 
               <p>Select the structure (by yourself or use our help) and any other services that fit your needs, such as company secretary, business licenses or bookkeeping.
                Besides the three popular structures, we can also help you register Limited partnership, Limited liability partnership, Sole proprietorship, Non-profit foundation, Guarantee company, Shelf company or Offshore company.</p>
            </li>
            <li className='space-y-2 font-secondary'>
                <h2 className='text-2xl font-semibold text-primary'>2. We reserve the company name</h2>
                <p>We will ask you to provide us with three options for your new company name just in case one of them is not available. The name can be in Chinese, English or both.</p>
            </li>
            <li className='space-y-2 font-secondary'>
                <h2 className='text-2xl font-semibold text-primary'>3. We prepare & file the paperwork with Companies Registry</h2>
                <p>We will collect and put together all the required documents of incorporation. Once you sign them electronically, we will send the paperwork to the Companies Registry for registration.</p>
            </li>
            <li className='space-y-2 font-secondary'>
                <h2 className='text-2xl font-semibold text-primary'>4. Companies Registry confirms your business</h2>
                <p>The processing time will depend on the specifics of your business. Once completed, we will deliver all the registration documents to you along with the Business Registration Certificate issued by the Inland Revenue Department.</p>
            </li>
            <li className='space-y-2 font-secondary'>
                <h2 className='text-2xl font-semibold text-primary'>5. Opening a corporate bank account</h2>
                <p>We work closely with several local and international banks and can prepare all documents and arrange a meeting for you. Alternatively, we can provide you with the resolution to open the bank account by yourself.</p>
            </li>
            <li className='space-y-2 font-secondary'>
                <h2 className='text-2xl font-semibold text-primary'>6. Securing work visa</h2>
                <p>Before you or your foreign staff can start working in the new business, you will need to obtain work visas. It is a straightforward process for most nationalities.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Registration
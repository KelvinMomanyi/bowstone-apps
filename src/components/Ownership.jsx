import React from 'react'
import official from '../assets/Slider.png'

const Ownership = () => {
  return (
    <div className=' w-full h-auto bg-primary'>
      <div className='w-full h-full flex lg:flex-row flex-col lg:px-48'>
        <div className='flex flex-col lg:w-1/2 text-white p-8'>
          <h3 className='text-lg font-primary'>Full control over your product display.</h3>
          <h1 className='font-semibold font-secondary lg:text-6xl text-3xl'>
            Customize and control your Shopify carousel exactly how you want.
          </h1>
          <p className='py-4 font-secondary'>
            Our carousel slider app gives you complete flexibility in how your products are shown. From selecting specific collections to customizing the product name styling and cart icon colors, you’re in full control. With no coding required, merchants can easily configure how many products show at once and enable smooth left/right navigation to create a seamless user experience.
          </p>
        </div>
        <div className='lg:w-1/2'>
          <img src={official} className='w-full h-full object-cover px-2' />
        </div>
      </div>
    </div>
  )
}

export default Ownership

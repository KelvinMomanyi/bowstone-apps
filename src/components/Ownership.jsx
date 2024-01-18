import React from 'react'
import official from '../assets/official.svg'

const Ownership = () => {
  return (
    <div className='lg:mt-[1000px] mt-[2800px] w-full h-auto bg-primary'>
      <div className='w-full h-full flex lg:flex-row flex-col lg:px-48 '>
         <div className='flex flex-col lg:w-1/2 text-white p-8'>
            <h3 className='text-lg font-primary'>Foreign business ownership.</h3>
            <h1 className='font-semibold font-secondary'>Own and control 100% of your company as a foreign entity.</h1>
            <p className='py-4 font-secondary'>Kenya does not place any restrictions on foreign entities & individuals for owning a limited company. You can be sole directors and shareholders in your Kenyan company, there are no local resident requirements. Moreover, foreign entities can easily operate their Kenyan offshore limited company from overseas.</p>
         </div>
         <div className='lg:w-1/2'>
          <img src={official} className='w-full h-full object-cover px-2' />
         </div>
      </div>
    </div>
  )
}

export default Ownership
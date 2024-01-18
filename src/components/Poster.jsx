import React from 'react'

const Poster = () => {
  return (
    <div className='w-full h-96 new bg-primary'>
        <div className='flex flex-col justify-center items-center lg:pt-12 pt-6 gap-4'>
           <h2 className='text-white text-lg font-primary'>Ready to get started?</h2>
           <p className='text-4xl lg:px-96  text-center font-bold  text-white font-secondary'>Join the hundreds of foreign businesses and entrepreneurs who have already set up their companies in Kenya.</p>
           <div className='gap-4 flex flex-col justify-center'>
             <button className='rounded-full font-secondary'>Request a Quote</button>
             <h3 className='text-white text-md font-secondary'>Non-binding & confidential</h3>
           </div>
        </div>
    </div>
  )
}

export default Poster
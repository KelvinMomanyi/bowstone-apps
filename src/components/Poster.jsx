import React from 'react'

const Poster = () => {
  return (
    <div className='w-full new bg-primary'>
        <div className='flex flex-col justify-center items-center h-auto gap-4'>
           <h2 className='text-white text-lg font-primary'>Ready to get started?</h2>
           <p className='lg:text-3xl text-2xl lg:px-96  px-4 text-center font-bold  text-white font-secondary'>Join the hundreds of successful Shopify merchants who’ve transformed their product displays with our powerful carousel slider app.</p>
           <div className='flex flex-col justify-center pb-2'>
             <button className='rounded-full font-secondary text-primary bg-white hover:text-black'>Install the App</button>
           </div>
        </div>
    </div>
  )
}

export default Poster
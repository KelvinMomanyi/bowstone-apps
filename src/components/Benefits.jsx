import React from 'react'
import Breaker from './Breaker'


const serviceList = [

]


const Benefits = () => {
  return (
    <div  className='w-full lg:pt-96 pt-[1100px] h-96 bg-white/70'>
      <div id='pricing' className='w-full flex flex-col justify-center items-center py-8 space-y-4'>
        <h2 className='text-lg text-black font-primary'>Company Registration Options</h2>
        <h1 className='text-3xl text-primary px-2 font-secondary'>Select the best structure for your business</h1>
        <p className='text-center lg:px-96 px-24 text-black font-secondary'>We can reliably help you navigate the process of registering a new company in Hong Kong, whether you are expanding from overseas or are local or a resident.You can choose from serveral strructues. The most popular being:</p>
      </div>
      <div className='flex sm:flex-row flex-col gap-4 w-full lg:px-48 px-4'>
        <div className='lg:w-1/3 h-[600px] bg-white flex flex-col border-b border-4 border-b-primary  p-4 rounded-xl text-primary'>
          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-2xl font-semibold p-2 font-primary '>Private Limited Company</h2>
            <p className='text-center font-secondary'>Ideal for most local and foreign entities as it offers limited liability, it is fast to set up and supports a work visa</p>
          </div>
          <ul className="list-disc p-6 font-secondary">
            <li>Trading Entity </li>
            <li>No minimum share capital</li>
            <li>!+ shareholder and director</li>
            <li>Unrestricted in activities</li>
            <li>Subject to local compliance</li>
          </ul>
          <div className='w-full flex flex-col justify-center items-center text-center py-4'>
             <h3 className='text-3xl font-secondary font-semibold'>2 days</h3>
             <span className='text-lg opacity-40 text-black'>Setup time</span>
          </div>
          <div className='p-4 flex flex-col items-center'>
            <button className='bg-primary text-white font-secondary' >Request a Quote</button>
          </div>
        </div>
        <div className='lg:w-1/3 h-[600px] flex flex-col p-4 bg-primary border-b border-4 border-b-blue-400 rounded-xl text-white'>
          <div className='flex flex-col justify-center items-center'>
            <h2  className='text-2xl font-semibold p-2 font-primary '>Foreign branch office</h2>
            <p className='text-center font-secondary'>Ideal for estabished international companiess wishing to epand heir foeign head office to Kenya</p>
          </div>
          <ul className="list-disc p-6 font-secondary">
            <li>Trading Entity </li>
            <li>No minimum share capital</li>
            <li>1 branch manager</li>
            <li>Unrestricted in activities</li>
            <li>Subject to local compliance</li>
          </ul>
          <div className='w-full flex flex-col justify-center items-center text-center py-4'>
             <h3 className='text-3xl font-secondary font-semibold'>1 day</h3>
             <span className='text-lg opacity-40 text-black'>Setup time</span>
          </div>
          <div className='p-4 flex flex-col items-center'>
            <button className='bg-white text-primary font-secondary' >Request a Quote</button>
          </div>
        </div>
        <div className='lg:w-1/3 h-[600px] flex flex-col p-4 bg-white border-b border-4 border-b-blue-600 rounded-xl text-primary'>
          <div className='flex flex-col justify-center items-center'>
            <h2  className='text-2xl font-semibold p-2 font-primary'>Representative office</h2>
            <p className='text-center font-secondary'>Ideal for foreign companies seeking to study the market in Kenya for research and business development purposes</p>
          </div>
          <ul className="list-disc p-6 font-secondary">
            <li>No Trading Entity </li>
            <li>No minimum share capital</li>
            <li>1 authorised representative</li>
            <li>Limited busines activities</li>
            <li>No local compliance</li>
          </ul>
          <div className='w-full flex flex-col justify-center items-center text-center py-4'>
             <h3 className='text-3xl font-secondary font-semibold'>3-4 weeks</h3>
             <span className='text-lg opacity-40 text-black'>Setup time</span>
          </div>
          <div className='p-4 flex flex-col items-center'>
            <button className='bg-primary text-white font-secondary'>Request a Quote</button>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center lg:px-8 py-20 space-y-4 font-secondary'>
        <h1 className='text-center text-2xl font-bold text-primary'>Unsure about which structure is right for you?</h1>
        <p className='text-center lg:px-48 px-8 text-black'>Get clarity by scheduling a free 30-minute consulation on starting your company in Kenya. <br/>We can advise you on anything from the optimal business structure, capital, investment, full <br/> foreign ownership options to shareholder requirements and more</p>
        <div>
          <button className='rounded-full border-2 border-primary bg-primary hover:bg-white text-white hover:text-primary'>Schedule a discovery call</button>
        </div>
      </div>
      <Breaker/>
      <Breaker/>
    </div>
  )
}

export default Benefits
import React from 'react'


const Services = () => {
  return (
    <div className='w-full h-full flex gap-8 bg-primary text-white'>
      <div className='flex flex-col border-r border-r-primary select-none'>
        <h3 className='underline underline-offset-4 font-primary'>OPTIMISE & EXPAND</h3>
        <h1 className='text-2xl font-semibold font-secondary'>Advisory.</h1>
        <ul className='text-sm font-secondary list-disc'>
          <li>Business consulting</li>
          <li>Tax advisory & planning</li>
          <li>Pre-IPO advisory</li>
          <li>Pre-IPO advisory</li>
          <li>M&A support</li>
          <li>Amalgamation support</li>
          <li>Restructuring & insolvency</li>
          <li>Forensics & litigation support</li>
          <li>Probate administration</li>
          <li>ESG advisory</li>
          <li>Communications, crisis & change management</li>
        </ul>
      </div>
      <div className='flex flex-col select-none '>
        <h3 className=' underline underline-offset-4 font-primary'>STAY COMPLIANT & GROW</h3>
        <h1 className='text-2xl font-semibold font-secondary'>Administration.</h1>
        <h2 className='font-secondary'>Corporate governance.</h2>
        <ul  className='text-sm font-secondary list-disc'>
          <li>Company secretary</li>
          <li>Company dissolution</li>
          <li>BVI company dissolution</li>
          <h2 className='font-semibold py-2'>CUSTODIAL</h2>
          <li>Process agent</li>
          <li>Document authentication</li>
          <h2 className='font-semibold text-xl py-2'>Accounting.</h2>
          <li>Accounting services</li>
           <h2 className='font-semibold text-xl py-2'>Tax.</h2>
          <li>Tax compliance</li>
          <li>Tax advisory & planning</li>
        </ul>
      </div>
      <div className='flex flex-col border-r border-r-primary p-8 select-none'>
        <h2 className='text-2xl font-semibold font-secondary'>HR outsourcing.</h2>
        <ul  className='text-sm font-secondary list-disc'>
          <li>Payroll outsourcing</li>
          <li>HR administration</li>
          <li>PEO/Employer of record</li>
          <h2 className='font-semibold text-md py-2'>WORK & OTHER VISAS</h2>
          <li>Work visa</li>
          <li>Investment visa</li>
          <h2 className='font-semibold text-xl py-2'>Supply chain &<br/> digitalisation.</h2>
          <li>ERP and CRM solutions</li>
          <li>Trade & supply chain services <br/> in  Greater Kenya</li>
        </ul>
      </div>
      <div className='flex flex-col select-none'>
        <h3 className=' underline underline-offset-4 font-primary'>LAUNCH & IMPLEMENT</h3>
        <h1 className='text-2xl font-semibold font-secondary'>Formation</h1>
        <ul className='font-secondary list-disc'>
          <li>Company registration</li>
          <li>Private limited company</li>
          <li>Representative office</li>
          <li>Branch office</li>
          <li>Kenya market entry</li>
          <li>Structuring advisory</li>
           <h2>LICENSING & IP</h2>
          <li>Business licenses</li>
          <li>Trademark registration</li>
        </ul>
        {/* <h2>PRESERVE WEALTH</h2> */}
        <h1 className='text-2xl font-semibold'>Private clients.</h1>
        <ul className='list-disc'>
          <li>Estate planning</li>
          <li>Family offices</li>
        </ul>
      </div>
    </div>
  )
}

export default Services
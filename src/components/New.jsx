import React from 'react'

const New = () => {
  return (
    <div className='w-full lg:h-[2000px] h-[2400px] bg-primary'>
      <div className='lg:px-56 px-4 flex flex-col justify-center py-10'> 
       <div className='flex justify-start py-2'>
          <h2 className='text-white font-primary text-lg'>Complete company services</h2>
       </div>
       <div className='flex lg:flex-row flex-col justify-between gap-2 py-6 font-secondary text-white'>
          <h1 className='text-3xl lg:text-left text-center font-secondary font-semibold'>Everything you need to start and manage your company in Kenya.</h1>
          <p className='lg:text-left text-center font-secondary'>We provide a full suite of flexible company services, including company formation, registered offices facilities, statutory compliance and document filing with the appropriate authorities. We also have resident directors and shareholders available, if required. These are backed by legal documents to ensure that you retain ownership & control over your company.</p>
       </div>
       <div className='space-y-8'>
         <div className='w-full lg:h-screen bg-white rounded-xl pt-6 p-8 py-8 '>
         <div className='flex flex-col justify-start space-y-16'>
         <h3 className='text-3xl font-semibold font-primary'>Essential company services.</h3>
         <div className='flex w-full gap-2 font-secondary'>
            <div className='w-1/3 text-xl'>
            Company registration
            </div>
            <div className='w-2/3'>
              Registering your selected business structure with the Companies registry.
            </div>
         </div>
         <div className='flex w-full gap-2 font-secondary'>
            <div className='w-1/3 text-xl' >
            Company secretary*
            </div>
            <div className='w-2/3'>
            We handle all of your routine and extraordinary company matters, including recurring filings, maintaining statutory books and records or secretarial advice.

              Learn more
            </div>
         </div>
         <div className='flex w-full gap-2 font-secondary'>
           <div className='w-1/3 text-xl' >
             Resident drector*
            </div>
            <div className='w-2/3'>
             All private limited companies in Hong Kong must have at least one individual director and shareholder. If you can’t meet this requirement, we can serve as your resident director.
            </div>
         </div>
         <div className='flex w-full gap-2 font-secondary'>
           <div className='w-1/3 text-xl'>
              Registered office*
            </div>
            <div className='w-2/3'>
              A company must have a registered office in Hong Kong from the date of incorporation. Besides offering a registered office, our service also includes a mailing address with mail forwarding services.
            </div>
         </div>

         <div className='rounded-full'>
            <button className='rounded-full bg-primary text-white hover:text-primary hover:bg-transparent font-secondary'>Get a Quote</button>
         </div>
         </div>
         </div>
         <div className='w-full lg:h-[900px] bg-white rounded-xl pt-12 p-8 py-2'>
         <div className='flex flex-col justify-start space-y-8'>
         <h3 className='text-3xl font-semibold font-primary'>Additional compliance services.</h3>
         <p className='font-secondary'>We also provide one-off and ongoing services to keep your business compliant with all the government requirements.</p>
         <div className='flex w-full gap-2 space-y-2 font-secondary'>
            <div className='w-1/3 text-xl'>
            Business licenses
            </div>
            <div className='w-2/3'> 
            There are several types of permits and licenses that might apply to your business depending upon the nature of your services and products. We can help you obtain them.  
             <div className='py-2'>
              <span className='underline underline-offset-2'>Lean More</span>
             </div>
            </div>
         </div>
         <div className='flex w-full gap-2 font-secondary'>
            <div className='w-1/3 text-xl' >
             Work & other visas
            </div>
            <div className='w-2/3 flex flex-col'>
              We help business owners and their staff secure and renew work and other types of visas, such as dependant or investment visas.
             <div className='py-2'>
                <span className='underline underline-offset-2'>Lean More</span>
             </div>
            </div>
            
         </div>
          <div className='flex w-full gap-2 font-secondary'>
            <div className='w-1/3 text-xl' >
              Accounting services
             </div>
             <div className='w-2/3'>
             Stay compliant with the local accounting requirements with our accounting services delivered on a monthly, quarterly, annual or an ad-hoc basis.
              <div className='py-2'>
                <span className='underline underline-offset-2'>Lean More</span>
              </div>
             </div>
             
          </div>
            <div className='flex w-full gap-2 font-secondary'>
            <div className='w-1/3 text-xl'>
               Tax services
             </div>
             <div className='w-2/3'>
              Minimise your tax burden and keep your tax filings in check.
              <div className='py-2'>
                <span className='underline underline-offset-2'>Lean More</span>
              </div>
             </div>
           </div>
           <div className='flex w-full gap-2 font-secondary'>
            <div className='w-1/3 text-xl'>
             HR outsourcing
             </div>
             <div className='w-2/3'>
             Comprehensive payroll outsourcing services for your Hong Kong business.
              <div className='py-2'>
                <span className='underline underline-offset-2'>Lean More</span>
              </div>
             </div>
           </div>

          <div className='rounded-full'>
             <button className='rounded-full bg-primary text-white hover:text-primary hover:bg-transparent font-secondary'>Get a Quote</button>
          </div>
          </div>
         </div>     
       </div>
      </div>
    </div>
  )
}

export default New
import React,{useState} from 'react'
import { TiTick } from "react-icons/ti";
import { SlLock } from "react-icons/sl";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Quote = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOption1, setSelectedOption1] = useState('');


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
  };
  

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };
  const handleOptionClick2 = (option) => {
    setSelectedOption1(option);
    setIsDropdownOpen1(false);
  };
  return (
//     <div className='sm:pt-56 pt-36 lg:px-36 px-6 w-full h-screen text-primary flex flex-col'>
//     <div className='w-full flex flex-col'>
//        <h3>Non-binding & confidential request</h3>
//        <h1>Request a custom quote.</h1>
//        <p className='text-start w-2/3 pr-4'>Please fill in the form below to let us know more about your
//         specific business needs & requirements.
//         The more we know, the better we can help.</p>
//     </div>
//     <div className='flex w-full'>
//       <div className='w-2/3'>
//        <div className='flex flex-col space-y-4'>
//          <span>Im interested in</span>
//          <input type="text" />
//          <span>Company name</span>
//          <input type="text" />
//          <span>Project Details</span>
//          <textarea type="text" />
//          <div className='flex'>
//            <div className='flex flex-col space-y-4'>
//              <span>Revenue</span>
//              <input type="text" />
//            </div>
//            <div className='flex flex-col'>
//              <span>Employees</span>
//              <input type="text" />
//            </div>
//          </div>
//          <h3>How can we contact you</h3>
//          <div className='flex'>
//            <div className='flex flex-col space-y-4'>
//              <span>Revenue</span>
//              <input type="text" />
//            </div>
//            <div className='flex flex-col'>
//              <span>Employees</span>
//              <input type="text" />
//            </div>
//         </div> 

//        </div>
//     <div>
//   </div>
//   <button>Send a Message</button>
//       </div>
//       <div className='1/3'>
//       <div>
//         <h1>What you get.</h1>
//         <div className='flex'>
//           <TiTick />
//           Fast response within 1 business day
  
//         </div>
//         <div className='flex'>
//            <TiTick />
//           Invitation to a discovery call with a local expert
//         </div>
//       </div>
//       <h1>Your Privacy</h1>
//       <div className='flex'>
//         <SlLock className='text-primary' />
//         <p>We will never share your details with any third-party.</p>
//       </div>
      
//       </div>
//     </div>
// </div>
<div className='sm:pt-40 pt-36 lg:px-36 px-6 w-full h-auto flex flex-col'>
<div className='w-full flex flex-col space-y-3'>
   <h3 className='text-primary font-primary text-xl'>Non-binding & confidential request</h3>
   <h1 className='font-secondary text-5xl text-black lg:text-start text-center '>Request a custom quote.</h1>
   <p className='lg:text-start text-center lg:w-3/5 pr-4 font-secondary text-black'>Please fill in the form below to let us know more about your
   specific business needs & requirements. The more we know, the better we can help.</p>
</div>
<div className='flex lg:flex-row flex-col w-full space-y-4'>
  <div className='lg:w-2/3'>
   <div className='flex flex-col space-y-4 pr-4 py-4'>
    
     <input type="text"className='border border-primary py-2 px-4' placeholder='Im interested in' />
    
     <input type="text" className='border border-primary py-2 px-4' placeholder='Company name' />
     <span>Project Details</span>
     <textarea type="text" className='border border-primary py-2 px-4' rows="4" cols="20"/>
     <div className='flex gap-4'>
       <div className='flex flex-col relative'>
         <span>Revenue</span>
         <input type="text" className='border border-primary py-1 px-4 relative' value={selectedOption}/>
          <MdOutlineKeyboardArrowDown className='absolute top-8 right-2' onClick={toggleDropdown}/>
         {isDropdownOpen && (
           <div className="top-12 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
               <div className="py-1">
                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"  onClick={() => handleOptionClick('< 1M USD')}>
                    &lt; 1M USD
                 </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleOptionClick('1M USD - 10M USD')}>
                   1M USD - 10M USD
                 </a>

                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleOptionClick('10M USD - 50M USD')}>
                 10M USD - 50M USD
                 </a>
                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleOptionClick('> 50M USD')}>
                 &gt; 50M USD
                 </a>
           {/* Add more options as needed */}
            </div>
         </div>
         )} 
       </div>
       <div className='flex flex-col relative'>
         <span>Employees</span>
         <input type="text" className='border border-primary py-1 px-4' value={selectedOption1}/>
         <MdOutlineKeyboardArrowDown className='absolute top-8 right-2' onClick={toggleDropdown1}/>
         {isDropdownOpen1 && (
           <div className="top-12 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
               <div className="py-1">
                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleOptionClick2('0-10')}>
                   0-10
                 </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleOptionClick2('10-50')}>
                   10-50
                 </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleOptionClick2('50-100')}>
                  50-100
                 </a>
                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleOptionClick2('100-200')}>
                  100-200
                 </a>
                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleOptionClick2('200-500')}>
                  200-500
                 </a>
                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleOptionClick2('>500')}>
                 &gt;500
                 </a>
           {/* Add more options as needed */}
            </div>
         </div>
         )} 
       </div>
     </div>
     <h3 className='text-xl font-secondary'>How can we contact you?</h3>
     <div className='flex flex-col gap-4'>
       <div className='flex gap-4'>
         <input type="text" className='border border-primary py-1 px-4' placeholder='First Name' />
         <input type="text" className='border border-primary py-1 px-4'  placeholder='Last Name'/>
       </div>
       <div className='flex gap-4'>
         <input type="text" className='border border-primary py-1 px-4' placeholder='Business Email' />
         <input type="text" className='border border-primary py-1 px-4' placeholder='Phone'/>
       </div>
       </div>
   

   </div>
<div>
</div>
<div className='py-4'>
<button className='rounded-full bg-primary text-white'>Send a Message</button>
</div>

  </div>
  <div className='lg:1/3'>
  <div className='w-3/4 space-y-4'>
    <h2 className='text-4xl text-black'>Other ways to get in touch with us.</h2>
    <div className='flex gap-2 text-primary'>
       <TiTick />
       Fast response within 1 business day
    </div>
    <div className='flex gap-2 text-primary'>
      <TiTick />
      Invitation to a discovery call with a local expert
    </div>
  </div>
  <h2 className='text-2xl font-secondary text-black py-2'>Your Privacy</h2>
  <div className='flex gap-2 py-2'>
    <SlLock className='text-primary' size={40} />
    <p className='font-secondary text-primary'>We will never share your details <br/> with any third-party.</p>
  </div>
  <div>
    
  </div>
   
  </div>
</div>
</div>
  )
}

export default Quote
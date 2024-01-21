import React,{useState} from 'react'
import logo from '../assets/logo.svg'
import world from '../assets/world.svg'
import { IoMenu } from "react-icons/io5"
import {SlArrowDown } from 'react-icons/sl'
import { CiMenuKebab } from "react-icons/ci";
import Services2 from './Services2'
import Services from './Services'
import Solutions from './Solutions'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";



const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSolutions, setIsSolution] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = (prevState)=>{
   setIsHovered(!prevState)
  }

 

  const handleOpen = () => {
    setIsRotated((prev) => !prev);
  };

  const scrollToComponent = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
    
      targetElement.scrollTo({behavior: 'smooth' });
    }
  }

  return(
    <header
     className={'fixed top-0  h-28 bg-white left-0 w-full lg:px-24 px-6 z-10'}>
       <div className=' flex  justify-between items-center flex-row  '>
         <div className='flex justify-between gap-16'>
             <img src={logo} className='lg:w-36 w-28 lg:h-36 h-28'  onClick={()=>{window.scrollTo(0,0)}}/>
           <nav className={`${ 'text-primary text-md font-secondary'} lg:flex gap-x-8 font-tertiary tracking-[3px] text-[15px] items-center lg:gap-x-8 hidden lg:block`}>
           <a href='#' className={`text-primary  hover:text-black flex`}>
              About    
           </a>
           <div className='flex gap-1'>
             <a href={'#solutions'}  className={`text-primary hover:text-black flex gap-2`} >
              Solutions 
             </a>
             <SlArrowDown size={10} className='active:rotate-180 transition-all duration-100 mt-1' onClick={() => setIsSolution(prevState => !prevState)}  /> 
           </div>
           {isSolutions && 
            <div className='absolute top-24 z-10 w-64 h-72 bg-primary border-b-2 rounded-b-md'>
              <Solutions/>
            </div>
           }
           <a href={'#pricing'} className={`text-primary hover:text-black`}>
               Pricing   
           </a>
           <a href={'#registration'}  className={`text-primary hover:text-black flex gap-2`} >
            Registration
           </a>
           <div className='flex gap-1'>
             <a  href={'#services'} className={`text-primary hover:text-black flex gap-2`} >
               Services
             </a>
             <CiMenuKebab size={20} className='hover:text-black mt-1' onClick={() => setIsHovered(prevState => !prevState)}  /> 
           </div>
           {isHovered && 
            <div className='absolute top-28 left-0 w-full h-[470px] bg-primary z-10 shadow-xl p-8'>
              <div className='w-full flex justify-end'>
                <IoIosCloseCircle size={30} color='white' onClick={() => setIsHovered(prevState => !prevState)}/>
              </div>
              <Services/>
            </div>
           }
           </nav>
         </div>

         <div className='flex gap-12 hidden lg:flex'>
            <div className=' rounded-full border-2 border-primary py-2 px-4 text-black font-secondary cursor-pointer'>
              Contact Us
            </div>
            <div className='pt-1'>
               <img src={world} className='w-8 h-8'/>
            </div>
        </div> 
        
        {/*small devices*/}
          <div className='block lg:hidden'>
             <IoMenu size={30} className='text-primary border-primary z-10' onClick={() => setIsHovered(prevState => !prevState)}/>
             {isHovered && 
             <div className='absolute top-0 right-0 h-screen w-56 bg-primary overflow-y-scroll'>
                 <div className='w-full flex flex-col justify-end items-end p-4'>
                    <IoIosCloseCircleOutline size={25} color='white' onClick={() => setIsHovered(prevState => !prevState)}/>
                 </div>
                <ul className='flex flex-col p-4  text-white font-secondary'>
                  <li>
                    <a href='#' className={`text-white  hover:text-black flex`}>
                      About    
                     </a>
                  </li>
                  <li>
                    <a href={'#pricing'} className={`text-white hover:text-black`}>
                      Pricing   
                    </a>
                  </li>
                  <li>Services
                    <div className='px-4'><Services2/></div>
                  </li>
                  <li>
                    <div className='flex gap-2 mt-4'>
                    Solutions
                    <SlArrowDown size={10} className='active:rotate-180 transition-all duration-100 mt-1' onClick={() => setIsSolution(prevState => !prevState)}  />
                    </div>
                  {isSolutions &&
                  <div className=' top-24 z-10 w-64 pl-2 px-8 h-72 bg-primary border-b-2 rounded-b-md'>
                    <Solutions/>
                  </div>
                  }
                  </li>
                </ul>
                <div className=''>
                <div className='flex flex-col gap-12 w-1/2 items-center justify-center'>
                   <div className=' rounded-full border-2 border-white py-2 px-2 text-white font-secondary cursor-pointer'>
                     Contact Us
                   </div>
              </div> 
              </div>
             </div>
              }
          </div>
       </div>




       
    </header>
    )
}

export default Header
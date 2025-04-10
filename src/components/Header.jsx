import React,{useState} from 'react'
import logo from '../assets/logo.svg'
import logo1 from '../assets/logg1.png'
import world from '../assets/world.svg'
import { IoMenu } from "react-icons/io5"
import {SlArrowDown } from 'react-icons/sl'
import { CiMenuKebab } from "react-icons/ci";
import Services2 from './Services2'
import Services from './Services'
import Solutions from './Solutions'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";
import Bowstone from '../assets/bowstoneLogo.PNG'



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
     className={'fixed top-0 bg-white left-0 w-full z-10'}>
       <div className='flex  justify-between items-center align-center min-h-16 px-6'>
         <div className='flex justify-between items-center gap-16 '>
          <a href="/">
              <img src={Bowstone} className='w-48 h-auto'  onClick={()=>{window.scrollTo(0,0)}}/>  
             {/* <span className='text-xl font-tertiary'>Bowstone <br/> Studios</span> */}
          </a>      
             
           <nav className={`${ 'text-primary text-md font-secondary'} lg:flex gap-x-8  tracking-[3px] text-[15px] items-center lg:gap-x-8 hidden lg:block`}>
            <a href='/' className={`text-primary  hover:text-black flex`}>
                Home   
            </a>
            <a href={'#pricing'} className={`text-primary hover:text-black`}>
                Pricing   
            </a>
            <a href={'#registration'}  className={`text-primary hover:text-black flex gap-2`} >
              Documentation
            </a>
           </nav>
         </div>

          <div className='flex gap-12 hidden lg:flex'>
            <div className=' rounded-full border-2 border-primary py-2 px-4  font-secondary cursor-pointer'>
                <a href='/contact' className='text-black'>
                  Contact Us
                </a>
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
                    <a href='/' className={`text-white  hover:text-black flex`}>
                      Home    
                     </a>
                  </li>
                  <li>
                    <a href={'#pricing'} className={`text-white hover:text-black`}>
                      Pricing   
                    </a>
                  </li>
                  <li className='cursor-pointer'>
                    Documentation 
                  </li>
                  
                </ul>
                <div className=''>
                <div className='flex flex-col gap-12 w-1/2 items-center justify-center'>
                  <div className='rounded-full border-2 border-white py-2 px-2 text-white font-secondary cursor-pointer'> 
                     <a href='/contact' className='text-white'>
                        Contact Us
                     </a>
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
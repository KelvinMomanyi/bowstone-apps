import React,{useState} from 'react'
import logo from '../assets/logo.svg'
import world from '../assets/world.svg'
import { IoMenu } from "react-icons/io5"
import {SlArrowDown } from 'react-icons/sl'
import { CiMenuKebab } from "react-icons/ci";
import Services2 from './Services2'
import Services from './Services'

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSolutions, setIsSolution] = useState(false);

  const handleClick = (prevState)=>{
   setIsHovered(!prevState)
  }
  return(
    <header
     className={'fixed top-0  h-28 bg-white left-0 w-full lg:px-24 px-6 z-10'}>
       <div className=' flex  justify-between items-center flex-row  '>
         <div className='flex justify-between gap-16'>
           <img src={logo} className='lg:w-36 w-28 lg:h-36 h-28'/>
           <nav className={`${ 'text-primary text-md font-secondary'} lg:flex gap-x-8 font-tertiary tracking-[3px] text-[15px] items-center lg:gap-x-8 hidden lg:block`}>
           <a href='/' className={`text-primary hover:text-black flex gap-2`} onClick={() => setIsHovered(prevState => !prevState)} >
            Services
            <CiMenuKebab size={20} className=' transition-all duration-100 mt-1' onClick={() => setIsHovered(prevState => !prevState)}  /> 
           </a>
           {isHovered && 
            <div className='absolute top-28 left-0 w-full h-[430px] bg-white z-10 shadow-xl p-8'>
              <Services/>
            </div>
           }
           <a href='/about' className={`text-primary hover:text-black flex gap-2`} >
            Solutions 
            <SlArrowDown size={10} className='hover:rotate-180 transition-all duration-100 mt-1' onMouseEnter={() => setIsSolution(true)} onMouseLeave={() => setIsSolution(false)} /> 
           </a>
           {isSolutions && 
            <div className='absolute top-28 left-0 w-full h-[400px] bg-white z-10 shadow-xl'>
              Solutions
            </div>
           }
            <a href='/rooms' className={`text-primary hover:text-black`}>
           Pricing   
            </a> 
            <a href='/rooms' className={`text-primary  hover:text-black flex`}>
              About    
            </a>
            {/* <a href='/blog' className={`text-blue-600`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
               Blog
             </a> */}
             <a className='py-1 cursor-pointer'>
               {/* <SlArrowDown size={10} className='group-hover:text-accent' /> */}
             </a>  
             <div className="w-full bg-blue-600 w-48 h-auto rounded-b-sm border-b-2 border-accent  p-4 shadow-xl top-10 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className='flex flex-col gap-2'>
                   <a href='/blog' className='hover:text-accent transition'>
                   Blog   
                  </a>
                  <a href='/blog/1' className='hover:text-accent transition'>
                    Blog Details   
                  </a>
                </div>
             </div>

           </nav>
         </div>

         <div className='flex gap-12 hidden lg:flex'>
            <div className=' rounded-full border-2 border-primary py-2 px-4 text-black font-secondary'>
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
             <div className='absolute top-28 right-0 h-screen w-56 bg-primary'>
                <ul className='flex flex-col p-4'>
                  <li>Services
                    <Services2/>
                  </li>
                  <li>Solutions</li>
                  <li>Pricing</li>
                  <li>About</li>
                </ul>
             </div>
            // <div className='absolute top-28 left-0 w-full h-[430px] bg-white z-10 shadow-xl p-8'>
            //   <Services/>
            // </div>
              }
          </div>
       </div>




       
    </header>
    )
}

export default Header
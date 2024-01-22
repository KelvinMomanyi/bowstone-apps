import React,{useEffect,useState} from 'react'
import ParticlesContainer from '../components/ParticlesContainer'
import World from '../assets/world2.svg'
import Services from './Benefits'
import { AiOutlineFieldTime } from "react-icons/ai"
import { IoShieldCheckmarkOutline } from 'react-icons/io5'
import { GiCash } from "react-icons/gi"
import Breaker from '../components/Breaker'


const Intro = () => {
    const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const phrases = ['business', 'wealth', 'interests'];

  useEffect(() => {
    let index = 0;
    let currentIndex = 0;
    let currentText = '';
    let isDeleting = false;

    const type = () => {
      if (currentIndex < phrases[index].length && !isDeleting) {
        currentText += phrases[index].charAt(currentIndex);
        setText(currentText);
        currentIndex++;
        setTimeout(type, 200);
      } else if (isDeleting && currentIndex >= 0) {
        currentText = currentText.slice(0, -1);
        setText(currentText);
        currentIndex--;
        setTimeout(type, 100);
      } else {
        isDeleting = !isDeleting;
        if (isDeleting) {
          index = (index + 1) % phrases.length;
        }
        setTimeout(type, 1000);
      }
    };

    const blinkCursor = () => {
      setShowCursor((prev) => !prev);
      setTimeout(blinkCursor, 1000); // Adjust blinking speed as needed
    };

    type();
    blinkCursor();

    return () => {
      // Cleanup (optional)
    };
  }, []);
  return (
    <div>
     <div className='sm:pt-40 pt-24 h-screen lg:px-36 px-6 py-6'>
        <div className='w-full flex sm:flex-row flex-col'>
        <div className=' sm:w-1/2 w-full py-8'>
         <h1 className='text-primary text-xl font-300 font-secondary'>Register your company in Kenya.</h1>
         <h1 className='py-2 font-semibold text-black font-primary'>Advance your <br/><span className='text-primary'>{text}</span>  in Kenya</h1>
         <p className='text-primary font-secondary text-xl'>Our company registration services makes it easy for foreign established businesses(both private & listed) to set up and manage their company in Kenya.</p>
         <div className='flex gap-8 py-6'>
          <a href='/quote' className='rounded-full bg-primary hover:bg-transparent hover:text-primary text-white font-secondary cursor-pointer text-center p-4'>Request a Quote</a>
          <a href='#solutions' className='hover:underline py-4 text-black cursor-pointer font-secondary '>Learn More</a>
         </div>
        </div>
        <div className='py-4 sm:w-1/2 w-full' >
      
          <img src={World} className='w-full h-auto'/>
          {/* <ParticlesContainer/> */}
        </div>
      </div>

      <div id='solutions' className='w-full pt-24  h-[400px] '>
        <div className='flex flex-col justify-start items-start py-8'>
          <h1 className='text-start text-3xl text-primary font-primary'>Start your dream business in Kenya <br/> with Confidence.</h1>
        </div>
        <div className='flex sm:flex-row flex-col gap-4 font-secondary'>
          <div className='flex flex-col justify-center items-center'>
            <IoShieldCheckmarkOutline size={50} className='text-primary'/>
            <h2 className='text-2xl text-primary  py-2'>Expert Guidance</h2>
            <p className='text-center text-black p-4 '>You can count on our support throughout the entire registration process. We are always here to advise you and answer any questions you might have</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
           <AiOutlineFieldTime size={50} className='text-primary'/>
           <h2 className='text-2xl text-primary py-2'>Fast Processing</h2>
           <p className='text-center text-black p-4'>Save time getting your new business up and running. Most companies can set up in 10 business daysor faster,depending onthe structure you choose</p>
         </div>
         <div className='flex flex-col justify-center items-center'>
           <GiCash size={50} className='text-primary'/>
           <h2 className='text-2xl py-2 text-primary'>Transparent Pricing</h2>
           <p className='text-center text-black p-4'>Request a Quote and get a clear picture of your costs before you start with our upfront and affordable pricing. No hidden fees around the corner</p>
          </div>
         </div>
      </div>
  {/* {<Services/>} */}
      </div>
    </div>
  )
}

export default Intro
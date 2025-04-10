import React,{useEffect,useState} from 'react'
import ParticlesContainer from '../components/ParticlesContainer'
import World from '../assets/world2.svg'
import View from '../assets/view1.png'
import View2 from '../assets/view2.PNG'
import { FiGrid } from 'react-icons/fi' // For Showcase Collections
import { BsCartPlus } from 'react-icons/bs' // For One-Click Add to Cart
import { MdTrendingUp } from 'react-icons/md' // For Increase Sales
import Services from './Benefits'
import { AiOutlineFieldTime } from "react-icons/ai"
import { IoShieldCheckmarkOutline } from 'react-icons/io5'
import { GiCash } from "react-icons/gi"
import Breaker from '../components/Breaker'


const Intro = () => {
    const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const phrases = ['Products', 'Collections', 'More'];

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
     <div className='sm:pt-36 pt-24 h-auto lg:px-36 px-6 py-6'>
        <div className='w-full flex sm:flex-row flex-col gap-4'>
        <div className=' sm:w-1/2 w-full py-8'>
         <h1 className='text-primary text-xl font-300 font-secondary'>Supercharge Your Store with the Carousel Slider App for Shopify</h1>
         <h1 className='py-2 font-semibold text-black font-primary'>Showcase <br/><span className='text-primary'>{text}</span> — Beautifully</h1>
         <p className='text-primary font-secondary text-xl'>Bring your storefront to life with Carousel Slider, the ultimate app to create stunning, interactive, and fully customizable image and product sliders that captivate your customers and drive conversions.</p>
         <div className='flex gap-8 py-6'>
          <a href='/quote' className='rounded-full bg-primary hover:bg-transparent hover:text-primary text-white font-secondary cursor-pointer text-center p-4'>Install App</a>
          <a href='#solutions' className='hover:underline py-4 text-black cursor-pointer font-secondary '>Learn More</a>
         </div>
        </div>
        <div className='py-4 sm:w-1/2 w-full rounded-2xl' >
      
          <img src={View2} className='w-full h-[350px] rounded-[40px] '/>
          {/* <ParticlesContainer/> */}
        </div>
        </div>

       <div id='solutions' className='w-full pt-24 h-auto'>
       <div className='flex flex-col justify-start items-start py-8'>
    <h1 className='text-start text-3xl text-primary font-primary'>
      Boost Conversions with a Smart Carousel <br /> for Your Shopify Store
    </h1>
       </div>
       <div className='flex sm:flex-row flex-col gap-4 font-secondary'>
    <div className='flex flex-col justify-center items-center'>
      <FiGrid size={50} className='text-primary'/>
      <h2 className='text-2xl text-primary py-2'>Showcase Collections</h2>
      <p className='text-center text-black p-4'>
        Highlight your best-selling or seasonal collections in an eye-catching carousel. Engage customers and drive them to the products they love.
      </p>
    </div>
    <div className='flex flex-col justify-center items-center'>
      <BsCartPlus size={50} className='text-primary'/>
      <h2 className='text-2xl text-primary py-2'>One-Click Add to Cart</h2>
      <p className='text-center text-black p-4'>
        Reduce friction in the shopping experience. Let customers add items directly from the carousel to the cart—fast and seamless.
      </p>
    </div>
    <div className='flex flex-col justify-center items-center'>
      <MdTrendingUp size={50} className='text-primary'/>
      <h2 className='text-2xl text-primary py-2'>Increase Sales</h2>
      <p className='text-center text-black p-4'>
        Turn browsers into buyers. Our carousel boosts engagement, drives clicks, and encourages more purchases with a smooth UX.
      </p>
    </div>
       </div>
       </div>
      </div>
    </div>
  )
}

export default Intro
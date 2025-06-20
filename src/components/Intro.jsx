// import React,{useEffect,useState} from 'react'
// import ParticlesContainer from '../components/ParticlesContainer'
// import World from '../assets/world2.svg'
// import View from '../assets/view1.png'
// import View2 from '../assets/view2.PNG'
// import { FiGrid } from 'react-icons/fi' // For Showcase Collections
// import { BsCartPlus } from 'react-icons/bs' // For One-Click Add to Cart
// import { MdTrendingUp } from 'react-icons/md' // For Increase Sales
// import Services from './Benefits'
// import { AiOutlineFieldTime } from "react-icons/ai"
// import { IoShieldCheckmarkOutline } from 'react-icons/io5'
// import { GiCash } from "react-icons/gi"
// import Breaker from '../components/Breaker'


// const Intro = () => {
//     const [text, setText] = useState('');
//   const [showCursor, setShowCursor] = useState(true);
//   const phrases = ['Products', 'Collections', 'More'];

//   useEffect(() => {
//     let index = 0;
//     let currentIndex = 0;
//     let currentText = '';
//     let isDeleting = false;

//     const type = () => {
//       if (currentIndex < phrases[index].length && !isDeleting) {
//         currentText += phrases[index].charAt(currentIndex);
//         setText(currentText);
//         currentIndex++;
//         setTimeout(type, 200);
//       } else if (isDeleting && currentIndex >= 0) {
//         currentText = currentText.slice(0, -1);
//         setText(currentText);
//         currentIndex--;
//         setTimeout(type, 100);
//       } else {
//         isDeleting = !isDeleting;
//         if (isDeleting) {
//           index = (index + 1) % phrases.length;
//         }
//         setTimeout(type, 1000);
//       }
//     };

//     const blinkCursor = () => {
//       setShowCursor((prev) => !prev);
//       setTimeout(blinkCursor, 1000); // Adjust blinking speed as needed
//     };

//     type();
//     blinkCursor();

//     return () => {
//       // Cleanup (optional)
//     };
//   }, []);
//   return (
//     <div>
//      <div className='sm:pt-36 pt-24 h-auto lg:px-36 px-6 py-6'>
//         <div className='w-full flex sm:flex-row flex-col gap-4'>
//         <div className=' sm:w-1/2 w-full py-8'>
//          <h1 className='text-primary text-xl font-300 font-secondary'>Supercharge Your Store with the Carousel Slider App for Shopify</h1>
//          <h1 className='py-2 font-semibold text-black font-primary'>Showcase <br/><span className='text-primary'>{text}</span> — Beautifully</h1>
//          <p className='text-primary font-secondary text-xl'>Bring your storefront to life with Carousel Slider, the ultimate app to create stunning, interactive, and fully customizable image and product sliders that captivate your customers and drive conversions.</p>
//          <div className='flex gap-8 py-6'>
//           <a href='/quote' className='rounded-full bg-primary hover:bg-transparent hover:text-primary text-white font-secondary cursor-pointer text-center p-4'>Install App</a>
//           <a href='#solutions' className='hover:underline py-4 text-black cursor-pointer font-secondary '>Learn More</a>
//          </div>
//         </div>
//         <div className='py-4 sm:w-1/2 w-full rounded-2xl' >
      
//           <img src={View2} className='w-full h-[350px] rounded-[40px] '/>
//           {/* <ParticlesContainer/> */}
//         </div>
//         </div>

//        <div id='solutions' className='w-full pt-24 h-auto'>
//        <div className='flex flex-col justify-start items-start py-8'>
//     <h1 className='text-start text-3xl text-primary font-primary'>
//       Boost Conversions with a Smart Carousel <br /> for Your Shopify Store
//     </h1>
//        </div>
//        <div className='flex sm:flex-row flex-col gap-4 font-secondary'>
//     <div className='flex flex-col justify-center items-center'>
//       <FiGrid size={50} className='text-primary'/>
//       <h2 className='text-2xl text-primary py-2'>Showcase Collections</h2>
//       <p className='text-center text-black p-4'>
//         Highlight your best-selling or seasonal collections in an eye-catching carousel. Engage customers and drive them to the products they love.
//       </p>
//     </div>
//     <div className='flex flex-col justify-center items-center'>
//       <BsCartPlus size={50} className='text-primary'/>
//       <h2 className='text-2xl text-primary py-2'>One-Click Add to Cart</h2>
//       <p className='text-center text-black p-4'>
//         Reduce friction in the shopping experience. Let customers add items directly from the carousel to the cart—fast and seamless.
//       </p>
//     </div>
//     <div className='flex flex-col justify-center items-center'>
//       <MdTrendingUp size={50} className='text-primary'/>
//       <h2 className='text-2xl text-primary py-2'>Increase Sales</h2>
//       <p className='text-center text-black p-4'>
//         Turn browsers into buyers. Our carousel boosts engagement, drives clicks, and encourages more purchases with a smooth UX.
//       </p>
//     </div>
//        </div>
//        </div>
//       </div>
//     </div>
//   )
// }

// export default Intro

import React, { useEffect, useState } from 'react';
import View2 from '../assets/view2.PNG';
import View1 from '../assets/view1.jpeg';
import { FiGrid } from 'react-icons/fi';
import { BsCartPlus } from 'react-icons/bs';
import { MdTrendingUp } from 'react-icons/md';
import { FaMagic } from 'react-icons/fa';

const Intro = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const phrases = ['Products', 'Collections', 'AI Offers'];
  const images = [View1, View2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);
  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false;

    const typeEffect = () => {
      if (!isDeleting && charIndex <= phrases[phraseIndex].length) {
        currentText = phrases[phraseIndex].slice(0, charIndex + 1);
        setText(currentText);
        charIndex++;
        setTimeout(typeEffect, 150);
      } else if (isDeleting && charIndex >= 0) {
        currentText = phrases[phraseIndex].slice(0, charIndex);
        setText(currentText);
        charIndex--;
        setTimeout(typeEffect, 100);
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
          setTimeout(() => (isDeleting = true), 1000);
        } else {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
        setTimeout(typeEffect, 500);
      }
    };

    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    typeEffect();
    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <div className="sm:pt-36 pt-24 h-auto lg:px-36 px-6 py-6">
      <div className="w-full flex sm:flex-row flex-col gap-4">
        <div className="sm:w-1/2 w-full py-8">
          <h1 className="text-primary text-xl font-light font-secondary">
            Supercharge Your Store with Smart Shopify Apps
          </h1>
          <h1 className="py-2 font-semibold text-black font-primary text-3xl">
            Showcase <br />
            <span className="text-primary">
              {text}
              {showCursor && <span className="animate-blink">|</span>}
            </span>{' '}
            — Intelligently
          </h1>
          <p className="text-primary font-secondary text-xl mt-4">
            From stunning carousels to intelligent cross-sells, our apps like <strong>Carousel Slider</strong> and <strong>AOVBoost</strong> help create immersive, high-converting shopping experiences on your Shopify store.
          </p>
          <div className="flex gap-6 py-6">
            <a href="/quote" className="rounded-full bg-primary hover:bg-transparent hover:text-primary text-white font-secondary cursor-pointer px-6 py-3 border border-primary transition">
              Install App
            </a>
            <a href="#solutions" className="hover:underline py-4 text-black cursor-pointer font-secondary">
              Learn More
            </a>
          </div>
        </div>

        <div className="py-4 sm:w-1/2 w-full transition-all duration-500 ease-in-out">
          <img
            src={images[currentIndex]}
            alt="App preview"
            className="w-full h-[500px] rounded-[40px] object-cover shadow-lg transition-all duration-700 ease-in-out"
          />
    </div>
      </div>

      {/* Solutions Section */}
      <div id="solutions" className="w-full pt-24 h-auto">
        <div className="py-8">
          <h1 className="text-3xl text-primary font-primary">
            Transform How Customers Discover and Buy
          </h1>
        </div>

        <div className="flex sm:flex-row flex-col gap-8 font-secondary">
          <div className="flex flex-col items-center text-center px-4">
            <FiGrid size={50} className="text-primary mb-2" />
            <h2 className="text-2xl text-primary font-semibold">Carousel Slider</h2>
            <p className="text-black mt-2">
              Engage customers with eye-catching carousels that showcase products or collections and lead to faster checkouts.
            </p>
          </div>

          <div className="flex flex-col items-center text-center px-4">
            <FaMagic size={50} className="text-primary mb-2" />
            <h2 className="text-2xl text-primary font-semibold">AOVBoost (AI Agent)</h2>
            <p className="text-black mt-2">
              Recommend cross-sell products using AI. Automatically suggest relevant add-ons based on shopper behavior and cart content.
            </p>
          </div>

          <div className="flex flex-col items-center text-center px-4">
            <MdTrendingUp size={50} className="text-primary mb-2" />
            <h2 className="text-2xl text-primary font-semibold">Sell Smarter</h2>
            <p className="text-black mt-2">
              With intuitive UI, AI-driven automation, and simple setup, our apps help merchants create stores that convert better.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

import React,{useState, useEffect} from 'react'
import ParticlesContainer from '../components/ParticlesContainer'
import World from '../assets/world2.svg'
import Services from '../components/Benefits'
import { AiOutlineFieldTime } from "react-icons/ai"
import { IoShieldCheckmarkOutline } from 'react-icons/io5'
import { GiCash } from "react-icons/gi"
import Breaker from '../components/Breaker'
import Intro from '../components/Intro'
import Ownership from '../components/Ownership'
import Registration from '../components/Registration'
import Poster from '../components/Poster'
import Benefits from '../components/Benefits'
import New from '../components/New'
import Faq from '../components/Faq'
import Contact from '../components/Contact'

const Home = () => {
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
  //   <div>
  //     {/* intro */}
  //      <div className='sm:pt-40 pt-24 h-screen lg:px-36 px-6 py-6'>
  //       <div className='w-full flex sm:flex-row flex-col'>
  //       <div className=' sm:w-1/2 w-full py-8'>
  //        <h1 className='text-blue-600 text-xl font-semibold'>Register your company in Kenya.</h1>
  //        <h1 className='py-2 font-semibold text-black'>Advance your <br/><span className='text-blue-600'>{text}</span>  in Kenya</h1>
  //        <p className='text-blue-600'>Our company registration services makes it easy for foreign established businesses(both private & listed) to set up and manage their company in Kenya.</p>
  //        <div className='flex gap-8 py-6'>
  //         <button className='rounded-full bg-blue-600 text-white'>Request a Quote</button>
  //         <span className='underline py-4 text-black cursor-pointer'>Learn More</span>
  //        </div>
  //       </div>
  //       <div className='py-4 sm:w-1/2 w-full' >
  //         <img src={World} className='w-full h-auto'/>
  //         {/*<ParticlesContainer/>*/}
  //       </div>
  //     </div>

  //     <div className='w-full pt-24  h-[400px] '>
  //       <div className='flex flex-col justify-start items-start py-8'>
  //         <h1 className='text-start text-3xl text-blue-600'>Start your dream business in Kenya <br/> with Confidence.</h1>
  //       </div>
  //       <div className='flex sm:flex-row flex-col gap-4 '>
  //         <div className='flex flex-col justify-center items-center'>
  //           <IoShieldCheckmarkOutline size={50} className='text-blue-600'/>
  //           <h2 className='text-2xl text-blue-600  py-2'>Expert Guidance</h2>
  //           <p className='text-center text-black p-4'>You can count on our support throughout the entire registration process. We are always here to advise you and answer any questions you might have</p>
  //         </div>
  //         <div className='flex flex-col justify-center items-center'>
  //          <AiOutlineFieldTime size={50} className='text-blue-600'/>
  //          <h2 className='text-2xl text-blue-600 py-2'>Fast Processing</h2>
  //          <p className='text-center text-black p-4'>Save time getting your new business up and running. Most companies can set up in 10 business daysor faster,depending onthe structure you choose</p>
  //        </div>
  //        <div className='flex flex-col justify-center items-center'>
  //          <GiCash size={50} className='text-blue-600'/>
  //          <h2 className='text-2xl py-2 text-blue-600'>Transparent Pricing</h2>
  //          <p className='text-center text-black p-4'>Request a Quote and get a clear picture of your costs before you start with our upfront and affordable pricing. No hidden fees around the corner</p>
  //         </div>
  //        </div>
  //     </div>
  // {/* {<Services/>} */}
  //      </div>

  //     {/* services */}
  //     <div className='w-full pt-96 h-96 bg-white/70'>
  //     <div className='w-full flex flex-col justify-center items-center py-8 space-y-4'>
  //       <h2 className='text-lg text-black '>Company Registration Options</h2>
  //       <h1 className='text-3xl text-blue-600 font-semibold'>Select the best structure for your business</h1>
  //       <p className='text-center px-96 text-black'>We can reliably help you navigate the process of registering a new company <br/>in Hong Kong, whether you are expanding from overseas or are local or a<br/> resident.You can choose from serveral strructues. The most popular being:</p>
  //     </div>
  //     <div className='flex sm:flex-row flex-col gap-4 w-full lg:px-56 px-4'>
  //       <div className='w-1/3 h-[600px] bg-white flex flex-col border-b border-4 border-b-blue-600  p-4 rounded-xl text-blue-600'>
  //         <div className='flex flex-col justify-center items-center'>
  //           <h2 className='text-2xl font-semibold p-2 '>Private Limited Company</h2>
  //           <p className='text-center'>Ideal for most local and foreign entities as it offers limited liability, it is fast to set up and supports a work visa</p>
  //         </div>
  //         <ul className="list-disc p-6">
  //           <li>Trading Entity </li>
  //           <li>No minimum share capital</li>
  //           <li>!+ shareholder and director</li>
  //           <li>Unrestricted in activities</li>
  //           <li>Subject to local compliance</li>
  //         </ul>
  //         <div className='p-4 flex flex-col items-center'>
  //           <button className='bg-blue-600 text-white' >Request a Quote</button>
  //         </div>
  //       </div>
  //       <div className='w-1/3 h-[600px] flex flex-col p-4 bg-blue-600 border-b border-4 border-b-blue-400 rounded-xl text-white'>
  //         <div className='flex flex-col justify-center items-center'>
  //           <h2  className='text-2xl font-semibold p-2 '>Foreign branch office</h2>
  //           <p className='text-center'>Ideal for estabished international companiess wishing to epand heir foeign head office to Kenya</p>
  //         </div>
  //         <ul className="list-disc p-6">
  //           <li>Trading Entity </li>
  //           <li>No minimum share capital</li>
  //           <li>1 branch manager</li>
  //           <li>Unrestricted in activities</li>
  //           <li>Subject to local compliance</li>
  //         </ul>
  //         <div className='p-4 flex flex-col items-center'>
  //           <button className='bg-blue-600 text-white' >Request a Quote</button>
  //         </div>
  //       </div>
  //       <div className='w-1/3 h-[600px] flex flex-col p-4 bg-white border-b border-4 border-b-blue-600 rounded-xl text-blue-600'>
  //         <div className='flex flex-col justify-center items-center'>
  //           <h2  className='text-2xl font-semibold p-2 '>Representative office</h2>
  //           <p className='text-center'>Ideal for foreign companies seeking to study the market in Kenya for research and business development purposes</p>
  //         </div>
  //         <ul className="list-disc p-6">
  //           <li>No Trading Entity </li>
  //           <li>No minimum share capital</li>
  //           <li>1 authorised representative</li>
  //           <li>Limited busines activities</li>
  //           <li>No local compliance</li>
  //         </ul>
  //         <div className='p-4 flex flex-col items-center'>
  //           <button className='bg-blue-600 text-white'>Request a Quote</button>
  //         </div>
  //       </div>
  //     </div>
  //     <div className='flex flex-col justify-center items-center px-8 py-20 space-y-4'>
  //       <h1 className='text-center text-2xl font-bold'>Unsure about which structure is right for you?</h1>
  //       <p className='text-center px-48 '>Get clarity by scheduling a free 30-minute consulation on starting your company in Kenya. <br/>We can advise you on anything from the optimal business structure, capital, investment, full <br/> foreign ownership options to shareholder requirements and more</p>
  //       <div>
  //         <button className='rounded-full border-2 border-blue-600'>Schedule a discovery call</button>
  //       </div>
  //     </div>
  //     <Breaker/>
  //     <Breaker/>
  //     </div>

  //     {/* Ownership */}
  //     <div className='pt-8 w-full h-96 bg-blue-600'>

  //     </div>

  //   </div>
    <>
     <div className=''>
      <Intro/>
      <Benefits/>
     </div>
     <Breaker/>
     <Ownership/>
     <Registration/>
     <Breaker/>
     <New/>
     <Breaker/>
     <Faq/>

     <Poster/> 
     {/* <Contact/> */}
    </>
  )
}

export default Home
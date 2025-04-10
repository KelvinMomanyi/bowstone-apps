import React,{useState, useEffect} from 'react'
import ParticlesContainer from '../components/ParticlesContainer'
import World from '../assets/world2.svg'
import Services from '../components/Benefits'
import { AiOutlineFieldTime } from "react-icons/ai"
import { IoShieldCheckmarkOutline } from 'react-icons/io5'
import { GiCash } from "react-icons/gi"
import Breaker from '../components/Breaker'
import Breaker2 from '../components/Breaker2'
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
    <>
     <div className=''>
      <Intro/>
      <Benefits/> 
     </div>
     {/* <Breaker/> */}
     <Ownership/>
     <Registration/>
     {/* <Breaker/>
     <New/>
     <Breaker2/> */}
     <Faq/>

     <Poster/> 
     {/* <Contact/> */}
    </>
  )
}

export default Home
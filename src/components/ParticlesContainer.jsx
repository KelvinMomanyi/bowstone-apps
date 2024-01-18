import Particles from "react-tsparticles";
import {loadFull}  from 'tsparticles';
import React,{ useCallback } from 'react'
import particlesOptions from "../particles.json";

const ParticlesContainer = () => {
  //init
  const particleInit = useCallback(async(engine)=>{
   await loadFull(engine)
  },[])

  const particlesLoaded = useCallback(async()=>{},[])


  return (
    <>
  <Particles
   className='w-full h-full absolute translate-z-0'
   id="tsparticles" 
   init={particleInit} 
   loaded={particlesLoaded}
   options={particlesOptions}
   />
   </>
   )
};

export default ParticlesContainer;

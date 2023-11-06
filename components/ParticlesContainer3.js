import Particles from "react-particles";
import {loadFull}  from 'tsparticles';
import React,{ useCallback } from 'react'

const ParticlesContainer3 = () => {
  //init
  const particleInit = useCallback(async(engine)=>{
   await loadFull(engine)
  },[])

  const particlesLoaded = useCallback(async()=>{},[])


  return (
  <Particles
   className='w-full h-full absolute translate-z-0'

   id="tsparticles"
   init={particleInit}
   loaded={particlesLoaded}
   options={{
     
       fpsLimit: 120,
       interactivity: {
           events: {
               onClick: {
                   enable: true,
                   mode: "push",
               },
               onHover: {
                   enable: true,
                   mode: "repulse",
               },
               resize: true,
           },
           modes: {
               push: {
                   quantity: 4,
               },
               repulse: {
                   distance: 200,
                   duration: 0.4,
               },
           },
       },
       particles: {
           color: {
               value: "#ffffff",
               
           },
           links: {
               color: "#00000",
               distance: 150,
               enable: true,
               opacity: 0.5,
               width: 1,
           },
           move: {
               direction: "none",
               enable: true,
               outModes: {
                   default: "bounce",
               },
               random: false,
               speed: 2,
               straight: false,
           },
           number: {
               density: {
                   enable: true,
                   area: 800,
               },
               value: 80,
           },
           opacity: {
               value: 0.5,
           },
           shape: {
               type: "circle",
           },
           size: {
               value: { min: 1, max: 5 },
           },
       },
       detectRetina: true,
   }}

   />
   )
};

export default ParticlesContainer3;

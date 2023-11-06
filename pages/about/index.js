import React, { useState } from "react";
import Image from "next/image";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import{
  BiLogoBlender
} from 'react-icons/bi'
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiAdobeillustrator
} from "react-icons/si";


//  data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Motion/Graphic Design',
        icons: [
          <BiLogoBlender/>,
          <SiAdobephotoshop />,
          <SiAdobeaftereffects />,
          <SiAdobeillustrator />,
        ],
      },
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'WebSite Awards - Finalist',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe creatve Awards - Finalist',
        stage: '20010 - 2011',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'FrontEnd Developer - Fitech Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - Net Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Junior Developer - Inc Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - New York University, NY',
        stage: '2011',
      },
      {
        title: 'Computer Science - WebTech Institute',
        stage: '2009',
      },
      {
        title: ' Graphic Designer - Design Institute, New York',
        stage: '2006',
      },
    ],
  },
];


//framer-motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

//counter
import CountUp from 'react-countup'
import Avatar2 from "../../components/Avatar2";
import ParticlesContainer from "../../components/ParticlesContainer";


const About = () => {
  const [index, setIndex]=useState(0)
  
  return(
   <div className="h-full bg-white py-32 text-center xl:text-left">
    <ParticlesContainer/>
    
    {/* {avatar img} */}
    <motion.div variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className="hidden xl:flex absolute bottom-12  -left-[370px] ">
      <Avatar2/>
    </motion.div>
    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
      {/* text */}
      <div className="flex-1 flex flex-col justify-center">
        <motion.h2 
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="h2 text-black" 
        >Creating <span className="text-accent">stories</span> from magnificent designs
        </motion.h2>
        <motion.p 
        variants={fadeIn('right',0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Nunc tincidunt, metus sed scelerisque scelerisque, metus
          lectus dignissim lacus, sit amet imperdiet tellus libero ac orci.
           Aenean eget velit pretium nulla tristique imperdiet a ac nibh.
            
        </motion.p>
       {/* {counters}  */}
       <motion.div 
        variants={fadeIn('right', 0.6)}
        initial='hidden'
        animate='show'
        exit='hidden'
       className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
         <div className="flex flex-1 xl:gap-x-6">
           {/*experience*/}
           <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 
           after:absolute after:top-0 after:right-0'>
            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={10} duration={5}/>+
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] text-black max-w-[100px]">Years of experience</div>
           </div>
           {/*clients*/}
           <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 
           after:absolute after:top-0 after:right-0'>
            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={250} duration={5}/>+
            </div>
            <div className="text-xs text-black uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
              Satisfied Clients
              </div>
           </div>
           {/*Projects*/}
           <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 
           after:absolute after:top-0 after:right-0'>
            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={650} duration={5}/>+
            </div>
            <div className="text-xs text-black uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
              Finished Projects
            </div>
           </div>

           {/*awards*/}
           <div className='relative flex-1 '>
            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={8} duration={5}/>+
            </div>
            <div className="text-xs uppercase text-black tracking-[1px] leading-[1.4] max-w-[100px]">
              Winning awards
            </div>
           </div>
         </div>
       </motion.div>
      </div>
      <motion.div 
      variants={fadeIn('left', 0.4)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className="flex flex-col w-full xl:max-w-[48%] h-[480px] ">
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          {aboutData.map((item, itemIndex)=>{
            return (
              <div
               key={itemIndex}
               className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-black text-black after:absolute after:-bottom-1 after:left-0`}
               onClick={()=>setIndex(itemIndex)}>
                 {item.title}
              </div>
            )
          } )}
        </div>
        <div className=" py-2 xl:py-6 flex   flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start ">
          {
            aboutData[index].info.map((item,itemIndex)=>{
              return(
               <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-black">
                  {/* title  */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                 {/* { icons} */}
                 {item.icons?.map((icon, itemIndex) => {
                    return(
                      <div key={itemIndex} className="text-2xl text-black">{icon}</div>
                    )
                 })}
               </div> 
               </div>
              )
            })
          }
        </div>
      </motion.div>
    </div>
  </div>
  )
};

export default About;

import TestimonialSlider from "../../components/TestimonialSlider";
import CountUp from "react-countup";
import { aboutData } from "../cars";
//framer-motion
import { motion } from "framer-motion";
import { useState } from "react";
import { fadeIn } from "../../variants";
import ParticlesContainer3 from "../../components/ParticlesContainer3";

const About = () => {
  const [index, setIndex]=useState(0)
  return(
  <div className="h-full sm:py-32 py-48 text-center xl:text-left" style={{backgroundAttachment:'fixed', backgroundPosition:'center', objectFit:'cover', backgroundImage:`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}}>
    {/* <ParticlesContainer/> */}
    
    {/* {avatar img} */}
    {/* <motion.div variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className="hidden xl:flex absolute bottom-12  -left-[370px] ">
      <Avatar2/>
    </motion.div> */}
    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
      {/* text */}
      <div className="flex-1 flex flex-col justify-center">
        <motion.h2 
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="h2 text-white" 
        >Your <span className="text-accent">exclusive</span> car dealership
        </motion.h2>
        <motion.p 
        variants={fadeIn('right',0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-white">
         Leading Car dealership, situated in Nakuru along Kenyatta Avenue opposite Kobil refill station.
            
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
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] text-white max-w-[100px]">Years of business</div>
           </div>
           {/*clients*/}
           <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 
           after:absolute after:top-0 after:right-0'>
            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={250} duration={5}/>+
            </div>
            <div className="text-xs text-white uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
              Satisfied Customers
              </div>
           </div>
           {/*Projects*/}
           <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 
           after:absolute after:top-0 after:right-0'>
            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={650} duration={5}/>+
            </div>
            <div className="text-xs text-white uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
              Cars sold
            </div>
           </div>

           {/*awards*/}
           {/* <div className='relative flex-1 '>
            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={8} duration={5}/>+
            </div>
            <div className="text-xs uppercase text-white tracking-[1px] leading-[1.4] max-w-[100px]">
              Winning awards
            </div>
           </div> */}
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
               className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-accent text-white after:absolute after:-bottom-1 after:left-0`}
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
               <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white">
                  {/* title  */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  {/* <div>{item.stage}</div> */}
                  <div className="flex gap-x-4">
                 {/* { icons} */}
                 {/* {item.icons?.map((icon, itemIndex) => {
                    return(
                      <div key={itemIndex} className="text-2xl text-white">{icon}</div>
                    )
                 })} */}
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

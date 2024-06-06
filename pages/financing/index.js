import WorkSlider from '../../components/WorkSlider'
import { useState } from 'react';

//framer motion
import {motion} from 'framer-motion'
import { fadeIn } from '../../variants';
import ParticlesContainer2 from '../../components/ParticlesContainer2';
import { aboutData } from '../cars';
import { BsBank2 } from "react-icons/bs";
import { HiRectangleGroup } from "react-icons/hi2";
import { GiMoneyStack } from "react-icons/gi";

const Finance = () => {
  const [index, setIndex]=useState(0)

  const financeData = [
    {
      title:'Bank Finance',
      info:'Allowing you to secure a loan from your trusted bank with competitive interest rates and flexible repayment terms tailored to your budget.',
      icon:<BsBank2/>
    },
    {
      title:'Cash Payment',
      info:'You can opt for a cash payment, paying the full amount upfront and enjoying the freedom of owning your car outright with no ongoing payments.',
      icon:<GiMoneyStack/>,
    },
    {
      title:'Hire Purchase',
      info:'With this plan, you can pay an initial deposit of up to 50% and then spread the remaining balance over 6, 12, or 18 months, making it easier to manage your finances with manageable monthly payments.',
      icon:<HiRectangleGroup/>
    }
  ]
  return(
    <div className='h-full  bg-camera py-36 flex items-center' >
      <ParticlesContainer2/>
       <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2 
            variants={fadeIn('up', 0.2)} 
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 xl:mt-12 mt-80'>
             Financing
            </motion.h2>
            <motion.p
             variants={fadeIn('up', 0.4)} 
             initial='hidden'
             animate='show'
             exit='hidden'
             className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
            At Rift Cars, we understand that purchasing a car is a
             significant investment, and we are committed to making 
             it as accessible as possible. That’s why we offer a variety
              of flexible financing options to suit your needs. 
            </motion.p>
          </div>
           <motion.div 
            variants={fadeIn('down', 0.6)} 
            initial='hidden'
            animate='show'
            exit='hidden'
           className='w-full xl:max-w-[65%]'>
            {/* slider */}
            <motion.div 
             variants={fadeIn('left', 0.4)}
                 initial='hidden'
               animate='show'
              exit='hidden'
            className="flex flex-col w-full xl:max-w-[48%] h-[480px] ">
        <div className="flex gap-x-6 xl:gap-x-12 mx-auto xl:mx-0 mb-4">
          {financeData.map((item, itemIndex)=>{
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
        <div className=" py-2 xl:py-6 flex   flex-col gap-y-2 xl:gap-y-4 items-center xl:items-center ">
          {
            financeData[index] && (
            <div  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white">
                  {/* title  */}
                  <div className='flex flex-col align-center items-center'>
                     <div className="font-light mb-2 md:mb-0 text-6xl">{financeData[index].icon}</div>
                      <div className="font-light mb-2 md:mb-0 text-md">{financeData[index].info}</div>
                  </div>
                  <div className="hidden md:flex"></div>
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
            }
          
        </div>
      </motion.div>
           </motion.div>
        </div>
       </div>
    </div> 
  )
};

export default Finance;

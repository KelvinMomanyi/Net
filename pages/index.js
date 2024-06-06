import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Benz from '../public/benz.jpg'
//components
import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'

//framer-motion
import { motion } from 'framer-motion';

//variants
import {fadeIn} from '../variants'
import Avatar2 from "../components/Avatar2";
import Search from "../components/Search"


const Home = () => {
  return(
    <div  style={{ backgroundImage:` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Benz})`, width:'100vw', height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center', paddingTop:'0',backgroundAttachment:'fixed' }}>
      {/* {text} */}
      <div className="bg-camera bg-cover bg-fixed bg-center  h-full"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 z-10 "  >
        <div className="text-center flex flex-col justify-center xl:pt-30 xl:text-left h-full container mx-auto">
        <motion.h1 
        variants={fadeIn('down', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="h3 text-white z-10">
          
          Your Trusted <br/> Destination  for<br/> <span className="text-accent">Quality</span> Vehicles
        </motion.h1>
        {/* <motion.p
        variants={fadeIn('down', 0.3)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="text-white max-w-sm xl:max-w-xl mx-auto xl:mx-0 z-10 ">
       Explore our diverse section of toptier vehicles and experience automotive excellence first hand
        </motion.p> */}
        {/* <div className="flex gap-6">
          <motion.button className="bg-black px-8 py-4">
            Search
          </motion.button> 
          <motion.button className="bg-white text-black px-8 py-4">
            Explore
          </motion.button> 
        </div> */}
         <motion.div
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden' className=" w-full flex flex-col justify-center lg:items-start items-center" >
           <Search/>
         </motion.div>
        </div>
        
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
       
        <div className="z-20">
          {/* <ParticlesContainer/> */}
        </div>
        <motion.div
        variants={fadeIn('up', 0.5)}
        initial='hidden'
        animate='show'
        exit='hidden'
        transition={{duration:1 , ease:'easeInOut'}}
        className="w-full h-full max-w-[1280px] max-h-[980px] absolute -bottom-32 lg:-bottom-20 lg:right-[-2%]">
          
        </motion.div>
      </div>
   </div>
  )
  
};

export default Home;



// <div className="w-[1200px] h-full absolute right-0 bottom-0">
//         <motion.div
//          variants={fadeIn('up', 0.5)}
//          initial='hidden'
//          animate='show'
//          exit='hidden'
//          transition={{duration:1 , ease:'easeInOut'}}
//          className="bg-none xl:bg-photo xl:bg-cover  xl:bg-no-repeat w-full h-full  absolute mix-blend-dodge backdrop-blur-xl translate-x translate-z-0"></motion.div> 
     
//         <div className="z-20">
//           <ParticlesContainer/>
//         </div>
//         <motion.div
//         variants={fadeIn('up', 0.5)}
//         initial='hidden'
//         animate='show'
//         exit='hidden'
//         transition={{duration:1 , ease:'easeInOut'}}
//         className="w-full h-full max-w-[1280px] max-h-[980px] absolute -bottom-32 lg:-bottom-20 lg:right-[-2%]">
          
//         </motion.div>
//       </div>
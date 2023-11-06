import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
//components
import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'

//framer-motion
import { motion } from 'framer-motion';

//variants
import {fadeIn} from '../variants'
import Avatar2 from "../components/Avatar2";


const Home = () => {
  return(
    <div className="bg-white  h-full">
      {/* {text} */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-30 xl:text-left h-full container mx-auto">
        <motion.h1 
        variants={fadeIn('down', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="h1 text-white z-10">
         Turning your idea<br/> into{" "} <span className="text-accent"> Art</span>
        </motion.h1>
        <motion.p
        variants={fadeIn('down', 0.3)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="text-black max-w-sm xl:max-w-xl mx-auto xl:mx-0 z-10 mb-10 xl:mb-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Nunc tincidunt, metus sed scelerisque scelerisque, metus
          lectus dignissim lacus, sit amet imperdiet tellus libero ac orci.
           Aenean eget velit pretium nulla tristique imperdiet a ac nibh.
        </motion.p>
       
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <motion.div
         variants={fadeIn('up', 0.5)}
         initial='hidden'
         animate='show'
         exit='hidden'
         transition={{duration:1 , ease:'easeInOut'}}
         className="bg-none xl:bg-photo xl:bg-cover  xl:bg-no-repeat w-full h-full  absolute mix-blend-dodge backdrop-blur-xl translate-x translate-z-0"></motion.div> 
        {/* {particles} */}
        <div className="z-20">
          <ParticlesContainer/>
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
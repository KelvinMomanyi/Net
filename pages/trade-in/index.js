
import ServiceSlider from '../../components/ServiceSlider'
//framer motion
import {motion} from 'framer-motion'
import { fadeIn } from '../../variants';
import ParticlesContainer2 from '../../components/ParticlesContainer2';
import { BsArrowRight } from 'react-icons/bs';



const TradeIn = () => {
  return(
    <div className='h-full bg-white/10 bg-blend-lighten py-36 flex items-center'>
    <ParticlesContainer2/>

    <div className='container mx-auto'>
     <div className='flex flex-col xl:flex-row gap-x-8'>
       <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
         <motion.h2 
         variants={fadeIn('up', 0.2)} 
         initial='hidden'
         animate='show'
         exit='hidden'
         className='h2 xl:mt-8 mt-16'>
           Trade<span className='text-accent'> In.</span>
         </motion.h2>
         <motion.p
          variants={fadeIn('up', 0.4)} 
          initial='hidden'
          animate='show'
          exit='hidden'
          className='sm:mb-4 mb-1 max-w-[400px] sm:text-lg text-sm mx-auto lg:mx-0'>  
        Trade in your car and top up to get a new one.
         Are you interested in Trading in your vehicle?
         Text Rift Cars to 0714537356 / call us 📞 via 0708410531 and 📞 0713017127
         Or fill the form below and find out the worth of your car.
         </motion.p>
       </div>
        <motion.div 
         variants={fadeIn('down', 0.6)} 
         initial='hidden'
         animate='show'
         exit='hidden'
        className='w-full xl:max-w-[65%]'>
         {/* slider */}
         <motion.h2
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="h2 text-center sm:mb-12 sm:text-2xl text-sm">
           Sell your<span className="text-accent"> car today!!</span>
          </motion.h2>
         <motion.form
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
          className="flex-1 flex flex-col gap-6 w-full mx-auto">
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="name" className="input"/>
              <input type="text" placeholder="phone" className="input"/>
            </div>
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="make" className="input"/>
              <input type="text" placeholder="model" className="input"/>
            </div>
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="licns plate" className="input"/>
              <input type="text" placeholder="year" className="input"/>
            </div>
               <button className="btn  border border-white max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
               <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500" >Submit</span>
               <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"/>
            </button>
          </motion.form>
        </motion.div>
     </div>
    </div>

 </div> 
    
  )
};

export default TradeIn;

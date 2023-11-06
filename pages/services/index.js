import ServiceSlider from '../../components/ServiceSlider'


//framer motion
import {motion} from 'framer-motion'
import { fadeIn } from '../../variants';
import ParticlesContainer2 from '../../components/ParticlesContainer2';

const Services = () => {
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
            className='h2 xl:mt-8'>
              My services<span className='text-accent'>.</span>
            </motion.h2>
            <motion.p
             variants={fadeIn('up', 0.4)} 
             initial='hidden'
             animate='show'
             exit='hidden'
             className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc tincidunt, metus sed scelerisque scelerisque, metus
             lectus dignissim lacus, sit amet imperdiet tellus libero ac orci.
            Aenean eget velit pretium nulla tristique imperdiet a ac nibh.
            </motion.p>
          </div>
           <motion.div 
            variants={fadeIn('down', 0.6)} 
            initial='hidden'
            animate='show'
            exit='hidden'
           className='w-full xl:max-w-[65%]'>
            {/* slider */}
            <ServiceSlider/>
           </motion.div>
        </div>
       </div>

    </div> 
  )
};

export default Services;

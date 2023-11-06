import {motion} from 'framer-motion'

//variants
const transitionVariants ={
  initial: {
    x: '-100%',
    width: '100%'
  },
  animate: {
    x: '0%',
    width: '0%'
  },
  exit:{
    x:['0%', '100%'],
    width:['0%', '100%']
  }
}
const Transition = () => {
  return (
    <>
      <motion.div 
      className='fixed top-0 bottom-0 left-full w-screen h-screen z-30  bg-[#000000]' 
      variants={transitionVariants} 
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{delay:0.2, duration:0.6, ease:'easeInOut'}}
      ></motion.div>
        <motion.div 
      className='fixed top-0 bottom-0 left-full w-screen h-screen z-20 shadow-xl bg-[#a31c1c] ' 
      variants={transitionVariants} 
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{delay:0.4, duration:0.6, ease:'easeInOut'}}
      ></motion.div>
        <motion.div 
      className='fixed top-0 bottom-0 left-full w-screen h-screen z-10 shadow-xl bg-[#ffffff] ' 
      variants={transitionVariants} 
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{delay:0.6, duration:0.6, ease:'easeInOut'}}
      ></motion.div>
    </>
  );
};

export default Transition;

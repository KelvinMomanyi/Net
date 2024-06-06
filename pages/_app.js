
import '../styles/globals.css';
import Layout from '../components/Layout.js'
import Transition from '../components/Transition.js'

import { useRouter } from 'next/router';
import {AnimatePresence, motion} from 'framer-motion'
import { CarProvider } from '@/context';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  
  return(
  <CarProvider>
     <Layout>
       <AnimatePresence mode='wait'>
          <motion.div key={router.route} className='h-full'>
            <Transition/>
            <Component {...pageProps} />
          </motion.div>
       </AnimatePresence>
     </Layout>   
  </CarProvider>
  )
}

export default MyApp;

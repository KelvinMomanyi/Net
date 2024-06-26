'use client'
// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';
import { IoCarSport } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaExchangeAlt } from "react-icons/fa";
import { PiBank } from "react-icons/pi";
import { GiTakeMyMoney } from "react-icons/gi";
// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'cars', path: '/cars', icon: <IoCarSport /> },
  { name: 'financing', path: '/financing', icon: <GiTakeMyMoney/> },
  { name: 'trade-in', path: '/trade-in', icon:<FaExchangeAlt />  },
  {
    name: 'about',
    path: '/about',
    icon: <HiUser />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname
  console.log("hello")

  
  return(
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:left-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen' >
     <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px]  xl:h-max py-8 bg-black/30 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
       {
         navData.map((link, index) => {
            return(
             <Link className={`${link.path === pathname && 'text-accent'} relative flex items-center group hover:text-accent transition-all duration-300`} href={link.path} key={index}>
              {/* {tooltip} */}
              <div className='absolute pl-14 left-0 hidden xl:group-hover:flex'>
                <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
                  <div className='text-[12px] leading-none font-semibold  capitalize'>
                    {link.name}
                  </div>
                  <div className='border-solid border-r-white border-r-8 border-y-transparent border-y-[6px] border-l-0 absolute -left-2'>

                  </div>       
                </div>
              </div>
               <div className='sm:text-xl text-lg' >{link.icon}</div>
             </Link>   
           )
         })
       }
     </div>
   </nav>
  )
};

export default Nav;

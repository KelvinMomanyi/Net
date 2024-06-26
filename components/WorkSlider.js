// data
import { SiAudi, SiMercedes, SiNissan, SiSubaru, SiToyota, SiMazda, SiSuzuki,SiBmw, SiHonda, SiVolvo, SiChevrolet, SiVolkswagen, SiPorsche, SiFord, SiMitsubishi, SiJaguar    } from "react-icons/si";
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: <SiAudi/>,
        },
        {
          title: 'title',
          path: <SiMercedes/>,
        },
        {
          title: 'title',
          path: <SiNissan/>,
        },
        {
          title: 'title',
          path: <SiBmw/>,
        },
        {
          title: 'title',
          path: <SiSuzuki/>,
        },
        {
          title: 'title',
          path: <SiSubaru/>,
        },
        {
          title: 'title',
          path: <SiToyota/>,
        },
        {
          title: 'title',
          path: <SiMazda/>,
        },
        {
          title: 'title',
          path: <SiVolvo/>,
        },
        {
          title: 'title',
          path: <SiChevrolet/>,
        },
        {
          title: 'title',
          path: <SiVolkswagen/>,
        },
        {
          title: 'title',
          path: <SiPorsche/>,
        },
        {
          title: 'title',
          path: <SiFord/>,
        },
        {
          title: 'title',
          path: <SiJaguar/>,
        },
        {
          title: 'title',
          path: <SiHonda/>,
        },
        {
          title: 'title',
          path: <SiMitsubishi/>,
        },
      ],
    },
  ],
};


import {Swiper, SwiperSlide} from 'swiper/react'
import Image from 'next/image';

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { Pagination} from 'swiper'
import {BsArrowRight} from 'react-icons/bs'
// icons


const WorkSlider = () => {
  return(
    <Swiper
    spaceBetween={10}
    pagination={{clickable: true}}
    modules={[Pagination]}
    className='h-[280px] sm:h-[480px]'
    >
      {workSlides.slides.map((slide, index)=>{
          return(
            <SwiperSlide key={index}> 
               <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer' >
                {slide.images.map((image, index)=>{
                    return(
                      <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={index}>
                        <div className='flex items-center justify-center relative overflow-hidden group'>
                       {/* image */}
                        {/* <Image
                        src={image.path}
                        width={500}
                        height={300}
                        alt=''
                       /> */}
                       {image.path}
                       {/* overlay-gradient */}
                       <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#c60000b6] to-[#000000] opacity-0 group-hover:opacity-80 group-hover:scale-150 transition-all duration-700'></div>
                         {/* title */}
                        <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20
                         transition-all duration-300'>
                          <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                            {/* title part 1 */}
                            <div className='delay-100'>LIVE</div>
                             {/* title part 2 */}
                            <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>
                             {/* icon */}
                            <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight/></div>
                          </div>
                        </div>
                      </div>  
                     </div>  
                    )
              
                  })
                } 
               </div>
            </SwiperSlide>
          )
        })
      } 
    </Swiper>
  )
};

export default WorkSlider;
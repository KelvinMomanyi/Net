import React, { useRef, useState } from "react";
import Image from "next/image";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import{
  BiLogoBlender
} from 'react-icons/bi'
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiAdobeillustrator
} from "react-icons/si";


//  data
export const aboutData = [
  {
    title: 'Services',
    info: [
      {
        title: 'Direct Sale of new and used vehicles',
        icons: [
          <BiLogoBlender/>,
          <SiAdobephotoshop />,
          <SiAdobeaftereffects />,
          <SiAdobeillustrator />,
        ],
      },
      {
        title: 'Import on Behalf',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'Trade ins',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'Vision',
    info: [
      {
        title: 'Our vision at Rift Cars is to become the leading car dealership recognized for redefining automotive excellence. We aspire to create a seamless and enjoyable car-buying journey by leveraging cutting-edge technology, fostering a customer-centric culture, and continuously expanding our selection of top-tier vehicles. We aim to inspire trust and loyalty through our unwavering commitment to quality, innovation, and community engagement, ultimately setting new standards in the automotive industry.',  
      },
    ],
  },
  {
    title: 'Mission',
    info: [
      {
        title: 'At Rift Cars, our mission is to revolutionize the car-buying experience by offering unparalleled customer service, a diverse selection of high-quality vehicles, and innovative financing solutions. We strive to build lasting relationships with our customers by ensuring transparency, integrity, and a commitment to excellence in every aspect of our business. Our goal is to make car ownership accessible, enjoyable, and rewarding for everyone.',  
      },
   
    ],
  },
  {
    title: 'Core Values',
    info: [
      {
        title: 'Customer-Centricity',
        stage: '2011',
      },
      {
        title: 'Integrity',
        stage: '2009',
      },
      {
        title: 'Innovation',
        stage: '2006',
      },
      {
        title: 'Quality',
        stage: '2011',
      },
      {
        title: 'Community Engagement',
        stage: '2009',
      },
    ],
  },
];


//framer-motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants.js'

//counter
import CountUp from 'react-countup'
import Avatar2 from "../../components/Avatar2.js";
import ParticlesContainer from "../../components/ParticlesContainer.js";

import useCarContext from '../../context/index.js'
import CarCard from '../../components/CarCard.js'
import { GrNext, GrPrevious } from "react-icons/gr";
import { IoMdArrowRoundBack } from "react-icons/io";
import Pagination from '../../components/Pagination.js'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";





const Cars = () => {
  const [index, setIndex]=useState(0)
  const {cars} = useCarContext()
  const [selectedCar, setSelectedCar] = useState(null);
  const sliderRef = useRef()
  const itemRef =useRef()
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 8;
  const totalPages = Math.ceil(cars.length / carsPerPage);

  // Calculate the cars to display on the current page
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  // Pagination handler
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentCars.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + currentCars.length) % currentCars.length);
  };
  
  
const slider = sliderRef.current

// function activate(e) {
//   const items = itemRef.current.children;
//   e.target.matches('.prev') && slider.append(items[0])
//   e.target.matches('.next') && slider.prepend(items[items.length-1]);
  
// }



//document.addEventListener('click',activate,false,);


  const handleCardClick = (car) => {
    setSelectedCar(car);
  };
 const handleCardReturn=()=>{
  setSelectedCar(null)
 }

  const handleClick = (e) => {
    const items = itemRef.current
  e.target.matches('.prev') && slider.append(items[0])
  e.target.matches('.next') && slider.prepend(items[items.length-1]);
    // setItems(prevItems => {
    //   const newItems = [...prevItems];
    //   newItems.push(newItems.shift()); // Move the first item to the end
    //   return newItems;
    // });
  };

  const handleNextClick = () => {
    // setItems(prevItems => {
    //   const newItems = [...prevItems];
    //   newItems.unshift(newItems.pop()); // Move the last item to the start
    //   return newItems;
    // });
  };
  console.log(selectedCar, 'car')
  return(
    <>
    {/* <div className="px-36 sm:py-28  py-40 flex  flex-wrap h-96 gap-3">
      <motion.div variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className="hidden xl:flex absolute top-0 left-0 h-full w-full ">
        <Avatar2/>
      </motion.div>
    {cars.map((car, index) => (
      <div key={index} className={`flex-none ${selectedCar !== null? 'hidden' : 'block'}`}    onClick={() => handleCardClick(car)}> 
       <CarCard
         make={car.make}
         price={car.price} 
         imageUrls={car.imageUrls}
         model={car.model}
         transmission={car.transmission}
         fuelType={car.fuelType}
         year={car.year}
         description={car.description}/>
      </div>
    ))}
         <Pagination
                totalPosts={cars.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
     </div> */}
     {/* pagination */}
     <div className={`flex justify-end sm:px-48 px-4 sm:py-3 sm:pt-20 pt-36 items-center gap-3 mt-4 ${selectedCar !== null ? 'hidden' : 'block'}`}>
       <div>
         <input placeholder="search by brand " className="bg-transparent border-b-2 border-gray-500 focus:outline-none placeholder-gray-500 w-full py-2"/>
         {/* <IoSearchSharp className='absolute top-1/2 left-2'/> */}
       </div>
       <div className="hidden sm:flex">
         <IoIosArrowBack
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="text-red-500 rounded disabled:opacity-50 z-10"
            size={20}
         />  
        <span className="text-sm">Page {currentPage} of {totalPages}</span>
        <IoIosArrowForward
         onClick={handleNextPage}
         disabled={currentPage === totalPages}
         className="text-red-500 rounded disabled:opacity-50 z-10"
         size={20}
        />
       </div>
      
    
     </div>
     {/* cards */}
     <div className="px-36  lg:flex hidden flex-wrap gap-3 ">
       
        {currentCars.map((car, index) => (
          <div
            key={index}
            className={`flex-none ${selectedCar !== null ? 'hidden' : 'block'} `}
            onClick={() => handleCardClick(car)}
          >
            <CarCard
              make={car.make}
              price={car.price}
              imageUrls={car.imageUrls}
              model={car.model}
              transmission={car.transmission}
              fuelType={car.fuelType}
              year={car.year}
              description={car.description}
            />
          </div>
        ))}
        
    </div> 
     
     {/* small devices */}
    <div className="sm:px-16 px-12 py-4 flex items-center justify-center gap-3 sm:hidden">
      <button onClick={handlePrevious} className="px-4 py-2  text-white rounded">&larr; </button>
      
      {currentCars.slice(currentIndex, currentIndex + 1).map((car, index) => (
        <div
          key={index}
          className={`flex-none ${selectedCar !== null ? 'hidden' : 'block'}`}
          onClick={() => handleCardClick(car)}
        >
          <CarCard
            make={car.make}
            price={car.price}
            imageUrls={car.imageUrls}
            model={car.model}
            transmission={car.transmission}
            fuelType={car.fuelType}
            year={car.year}
            description={car.description}
          />
        </div>
      ))}
      
      <button onClick={handleNext} className="px-4 py-2 text-white rounded">&rarr;</button>
    </div> 
     
      {/* Pagination controls */}
      
  <>
  {selectedCar && (
    <section>
      <div className="h-full bg-white py-32 text-center xl:text-left">
        <ul className='slider'>
          <li className='item' style={{ backgroundImage: `url(${selectedCar.imageUrls[0]})` }}>
            <div className='content'>
              <h2 className='title'>{selectedCar.make}</h2>
              <p className='description'>{selectedCar.description}</p>
            </div>
          </li>
          {/* <li className='item' style={{ backgroundImage: `url(${selectedCar.imageUrls[1]})` }}>
            <div className='content'>
              <h2 className='title'>{selectedCar.make}</h2>
              <p className='description'>{selectedCar.price}</p>
              <button>DETAILS</button>
            </div>
          </li>
          <li className='item' style={{ backgroundImage: `url(${selectedCar.imageUrls[2]})` }}>
            <div className='content'>
              <h2 className='title'>{selectedCar.make}</h2>
              <p className='description'>{selectedCar.price}</p>
              <button>DETAILS</button>
            </div>
          </li>  */}
          
            {selectedCar.imageUrls.map((imageUrl, index) => (
              <li className='item' key={index} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(${imageUrl})` }}>
                
                <div className='content'>
                  
                  <div>
                     <table className='details-table'>
                   
                     <tbody>
                        <tr className='title border-b-2'>
                           <td>Make</td>
                           <td>{selectedCar.make}</td>
                        </tr>
                        <tr className='title border-b-2'>
                            <td>Model</td>
                            <td>{selectedCar.model}</td>
                         </tr>
                         <tr className='title border-b-2 '>
                            <td>Year</td>
                           <td>{selectedCar.year}</td>
                         </tr>
                      <tr className='title  border-b-2'>
                        <td>Price</td>
                        <td>{selectedCar.price}</td>
                      </tr>
                    <tr className='title  border-b-2'>
                      <td>Description</td>
                      <td>{selectedCar.description}</td>
                    </tr>
                    <tr className='title border-b-2 '>
                     <td>Mileage</td>
                      <td>{selectedCar.mileage}</td>
                    </tr>
                   <tr className='title border-b-2 '>
                     <td>Availability</td>
                    <td>{selectedCar.availability}</td>
                  </tr>
                 <tr className='title  border-b-2'>
                   <td>Drive</td>
                   <td>{selectedCar.drive}</td>
                 </tr>
                <tr className='title  border-b-2'>
                  <td>Fuel Type</td>
                  <td>{selectedCar.fuelType}</td>
               </tr>
               <tr className='title  border-b-2'>
                <td>HorsePower</td>
                <td>{selectedCar.horsepower}</td>
              </tr>
             <tr className='title border-b-2 '>
               <td>Transmission</td>
                <td>{selectedCar.transmission}</td>
            </tr>
           <tr className='title  border-b-2'>
             <td>Torque</td>
             <td>{selectedCar.torque}</td>
           </tr>
           <tr className='title  border-b-2'>
               <td>Acceleration</td>
             <td>{selectedCar.acceleration}</td>
          </tr>
      
    </tbody>
                     </table>
                     <div className="flex gap-2 z-10 items-center" >    
                     <IoMdArrowRoundBack onClick={handleCardReturn} color="red" size={30} />
                     <p className="text-md">Go back</p>

                 </div>
</div>

                </div>
              </li>
            ))}
        </ul>
        <div className='navigate'>
          <i className="ri-arrow-right-circle-fill btn prev"></i>
          <i className="ri-arrow-left-circle-fill btn next"></i>
          {/* <GrNext onClick={handleNextClick} />
          <GrPrevious onClick={handlePrevClick}/> */}
          
        </div>
      </div>
    </section>
  )}
  </>
  </>


  //   <section >
  //   <div className="h-full bg-white py-32 text-center xl:text-left">
  //  <ul class='slider'>
  //   {
  //     cars.map((car, index)=>(
  //       <>
  //       <li class='item' key={index} style={{backgroundImage:`url(${car.imageUrls})`}}>
  //         <div class='content'>
  //            <h2 class='title'>{car.make}</h2>
  //            <p class='description'>{car.price}</p>
  //            <button>DETAILS</button>
  //         </div>
  //     </li>
  //     </>
  //     ))
  //   }
  //  </ul>
  //  <div class='navigate'>
  //    <i class="ri-arrow-right-circle-fill  btn prev "></i>
  //    <i class="ri-arrow-left-circle-fill btn next"></i>
  //    {/* <ion-icon class='btn prev' name="arrow-back-outline" ></ion-icon> */}
  //    <GrNext onClick={handleNextClick}/>
  //  </div>
  //   </div>
  //   </section>





 
  )
};

export default Cars;

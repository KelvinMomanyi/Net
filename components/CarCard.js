// components/CarCard.js
import React from 'react';

const CarCard = ({ make, price, imageUrls, model, transmission, fuelType, year, description }) => {
  return (
    <div className="sm:w-72 w-[300px] sm:h-72 h-[430px] shadow-lg overflow-hidden bg-white transform transition-transform hover:scale-105">
      <div
        className="h-3/5 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrls})` }}
      ></div>
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold mb-2 text-black">{make} {model}</h2>
        <div className='flex text-black text-sm gap-2'>
           <div>{transmission}</div>
           <div>{year}</div>
           <div>{fuelType}</div>
        </div>
        <p className='text-black'>{description}</p>
        <p className="text-gray-600 mb-4">Ksh {price}</p>
        {/* <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors">
          DETAILS
        </button> */}
      </div>
    </div>
  );
};

export default CarCard;

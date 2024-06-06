import useCarContext from '@/context';
import React, { useState } from 'react';

const CarSearch = () => {
  // Initial list of cars
  const {cars}= useCarContext()

  // State for search query and filtered cars
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCars, setFilteredCars] = useState(cars);

  // Handle input change and filter cars
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter the cars array
    const filtered = cars.filter((car) =>
      car.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCars(filtered);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        className="w-full p-3 mb-4 border border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search by Vehicle Name"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredCars.map((car, index) => (
          <li key={index} className="mb-2">
            {car}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarSearch;

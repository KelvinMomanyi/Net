import React,{useState} from 'react';
import useCarContext from '@/context';

const Search = () => {
  const {cars}= useCarContext()
  console.log(cars, 'cars')
  // State for search query and filtered cars
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCars, setFilteredCars] = useState(cars);

  // Handle input change and filter cars
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter the cars array
    const filtered = cars.filter((car) =>
      car.make.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCars(filtered);
  };

  return (
    <div >
      <div className="w-full max-w-sm py-4  rounded-lg shadow-md">
        <input
          type="text"
          className="w-full p-3 mb-4 border border-gray-300 bg-transparent  focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search by Vehicle Name"
          // value={searchQuery}
          // onChange={handleSearchChange}
        />
         {/* <ul className='absolute'>
        {filteredCars.map((car, index) => (
          <li key={index} className="mb-2">
            {car}
          </li>
        ))}
      </ul> */}
        <div className='w-full flex justify-start'>
          <p className='text-sm py-2 text-white'>Search by your Budget</p>
        </div>
        <div className="flex flex-wrap  gap-2">
           
          <button className="p-1  text-white  hover:bg-blue-600 border border-gray-300">
            0 - 500K
          </button>
          <button className="p-1  text-white  hover:bg-blue-600 border border-gray-30">
            500K - 1M
          </button>
          <button className="p-1  text-white  hover:bg-blue-600 border border-gray-30">
            1M - 2M
          </button>
          <button className="p-1  text-white  hover:bg-blue-600 border border-gray-30">
             2M - 3M
          </button>
          <button className="p-1  text-white  hover:bg-blue-600 border border-gray-30">
            3M - 6M
          </button>
          <button className="p-1  text-white  hover:bg-blue-600 border border-gray-30">
            6M - 10M
          </button>
          <button className="p-1  text-white  hover:bg-blue-600 border border-gray-30">
            Above 10M
          </button>
        </div>
        <button className="w-full p-3 mt-4 bg-red-800 text-white hover:bg-black">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;

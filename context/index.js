import { createContext,useContext, useEffect, useState } from "react";
import { firestore } from '../firebaseConfig.js';
import { collection, getDocs} from 'firebase/firestore';

export const CarContext = createContext()


export const CarProvider=({children})=>{
    const [cars,setCars]=useState([])

    useEffect(()=>{
        const fetchCars = async () => {
            const querySnapshot = await getDocs(collection(firestore, 'cars'));
            const carData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setCars(carData);
          };

          fetchCars()
    },[])
    console.log(cars, 'cars')
 return(
    <CarContext.Provider value={{cars}}>
        {children}
    </CarContext.Provider>
 )
}

const useCarContext=()=>useContext(CarContext)

export default useCarContext
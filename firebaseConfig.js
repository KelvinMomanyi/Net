import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCl6Hau-W2qLasIRwCeHqvvSwRrhKPFc1E",
    authDomain: "car-ecommerce-8552a.firebaseapp.com",
    projectId: "car-ecommerce-8552a",
    storageBucket: "car-ecommerce-8552a.appspot.com",
    messagingSenderId: "178788093433",
    appId: "1:178788093433:web:27d439b2a1acef3b358128",
    measurementId: "G-7LZEE4964J"
  };



const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);


export { firestore};
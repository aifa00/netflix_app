import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAsondPtvEPE8aQlPWftj04k6dHyS9HuC0",
    authDomain: "netflix-ad2b6.firebaseapp.com",
    projectId: "netflix-ad2b6",
    storageBucket: "netflix-ad2b6.appspot.com",
    messagingSenderId: "758471569861",
    appId: "1:758471569861:web:f426ef861b57bb23f89bac",
    measurementId: "G-J7CG8Z1VGK"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage();//root reference


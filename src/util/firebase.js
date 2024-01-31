// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW7E24gsJKSttrrvpABbfgrfNsM1Tzkhw",
  authDomain: "dashboard-5d87e.firebaseapp.com",
  projectId: "dashboard-5d87e",
  storageBucket: "dashboard-5d87e.appspot.com",
  messagingSenderId: "566926931294",
  appId: "1:566926931294:web:ace3ee6f15115452e60bcf",
  measurementId: "G-5D2KV4K34W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
 export const db=getFirestore(app);
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore  } from "firebase/firestore";
// Initialize Firebase
const firebaseConfig={
    apiKey: "AIzaSyDSbqZFKMRyhc2e0CKYk8Rygr3Dt-PuWhI",
    authDomain: "myvehicle-634d0.firebaseapp.com",
    databaseURL: "https://myvehicle-634d0-default-rtdb.firebaseio.com",
    projectId: "myvehicle-634d0",
    storageBucket: "myvehicle-634d0.appspot.com",
    messagingSenderId: "1028443510514",
    appId: "1:1028443510514:web:f1af2db5cc44779559226b",
    serviceAccount :'./myvehicle.json'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;

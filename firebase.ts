import { getApp, getApps ,initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYlBpePXSA9_I2XioFlyI3FMcs6Bcw2Qs",
    authDomain: "edoc-x-proscenium.firebaseapp.com",
    projectId: "edoc-x-proscenium",
    storageBucket: "edoc-x-proscenium.appspot.com",
    messagingSenderId: "350136791397",
    appId: "1:350136791397:web:2216a977d51f06f971318c"
  };
  
// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth= getAuth(app);
const  db = getFirestore(app);
const functions = getFunctions(app);

export {db,auth,functions};
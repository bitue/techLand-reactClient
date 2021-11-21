import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBlxCIoGUBX2oSAomxYviFx0VerWz40ux8",
    authDomain: "techland-83b35.firebaseapp.com",
    projectId: "techland-83b35",
    storageBucket: "techland-83b35.appspot.com",
    messagingSenderId: "115072360570",
    appId: "1:115072360570:web:18eede16b9c1660b4a9bc3",
    measurementId: "G-6FXDZP5E23"
  };


const initializeFirebaseApp = () => {
    initializeApp(firebaseConfig);
}

export default  initializeFirebaseApp;
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBt1u1UJKQXGX2-U-553RtUkjbXRpJB94c",
  authDomain: "signup-signin-signout.firebaseapp.com",
  projectId: "signup-signin-signout",
  storageBucket: "signup-signin-signout.appspot.com",
  messagingSenderId: "628237539627",
  appId: "1:628237539627:web:b9e33035f6dc6dbba50d6e"
};

const app = initializeApp(firebaseConfig);
export default app;
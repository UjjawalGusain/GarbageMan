import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// These firebase api keys can be public(intentional design by firebase)
const firebaseConfig = {
  apiKey: "AIzaSyDP7cJaWQ0xgX4OcGBanEC1-kkiLnVLjRE",
  authDomain: "garbage-man-6c3f6.firebaseapp.com",
  projectId: "garbage-man-6c3f6",
  storageBucket: "garbage-man-6c3f6.firebasestorage.app",
  messagingSenderId: "946698643327",
  appId: "1:946698643327:web:751621765a0cd3c1f99c4a",
  measurementId: "G-X7XBSJTGW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
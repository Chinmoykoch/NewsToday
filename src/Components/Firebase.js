import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8VWgyr5ZGVQ2kF1SWRUvBmPLmGR0S9AI",
  authDomain: "newstoday-ac3d1.firebaseapp.com",
  projectId: "newstoday-ac3d1",
  storageBucket: "newstoday-ac3d1.appspot.com",
  messagingSenderId: "895864337085",
  appId: "1:895864337085:web:7c22a8cb3a1dd25aa63dd4",
  measurementId: "G-SH63N0TGD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
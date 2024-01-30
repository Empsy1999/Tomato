import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDd88wshUk6S21dMX3KAyV_b2QHGPHFWT8",
  authDomain: "tomato-ad505.firebaseapp.com",
  databaseURL: "https://tomato-ad505-default-rtdb.firebaseio.com",
  projectId: "tomato-ad505",
  storageBucket: "tomato-ad505.appspot.com",
  messagingSenderId: "220783958995",
  appId: "1:220783958995:web:2459e49137003fd89a2d26",
  measurementId: "G-TP15P2ZZY2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database, ref, push, get };

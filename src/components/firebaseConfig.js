import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeDEviFYAblWrOhCHWJo0P0MJjJ866OaY",
  authDomain: "cavamito-942e4.firebaseapp.com",
  projectId: "cavamito-942e4",
  storageBucket: "cavamito-942e4.appspot.com",
  messagingSenderId: "174566095839",
  appId: "1:174566095839:web:0bbf9c579afe5774fd226a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
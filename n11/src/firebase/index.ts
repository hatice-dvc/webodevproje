import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDkd8mLXP1IpYMV-jtH6ITnF29b4sVYBkM",
  authDomain: "vuen11-ef510.firebaseapp.com",
  projectId: "vuen11-ef510",
  storageBucket: "vuen11-ef510.appspot.com",
  messagingSenderId: "750290572226",
  appId: "1:750290572226:web:924eaa96b2c11d43ed7c5b"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {
  db
}
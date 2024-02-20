import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPvS4x6sywb8w4C5nLSzcQkS-ahTc7E8k",
  authDomain: "todo-7e8b8.firebaseapp.com",
  projectId: "todo-7e8b8",
  storageBucket: "todo-7e8b8.appspot.com",
  messagingSenderId: "750981535275",
  appId: "1:750981535275:web:21772c0640beeb14f7fc6e"
};

const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);
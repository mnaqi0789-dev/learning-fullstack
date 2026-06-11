import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4ncqc4foFv-Oo1il8Rgo9zky4uyMvoxI",
  authDomain: "blogz-46467.firebaseapp.com",
  projectId: "blogz-46467",
  storageBucket: "blogz-46467.firebasestorage.app",
  messagingSenderId: "763101382623",
  appId: "1:763101382623:web:c34a3f0bee7fc7c05ba66a",
  measurementId: "G-X94ZB2S965"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

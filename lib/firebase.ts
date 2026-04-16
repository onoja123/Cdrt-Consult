import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCauYgY41WYQFPjOLI1A6rBvxAz4cFUDzs",
//   authDomain: "cdrt-consult.firebaseapp.com",
//   projectId: "cdrt-consult",
//   storageBucket: "cdrt-consult.firebasestorage.app",
//   messagingSenderId: "336348001361",
//   appId: "1:336348001361:web:f60f32c3d49d7d0cc2b470",
//   measurementId: "G-R8VQL54EM1"
// };

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export default app;

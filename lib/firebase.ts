import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { FirebaseStorage, getStorage } from "firebase/storage";
import { Auth, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCauYgY41WYQFPjOLI1A6rBvxAz4cFUDzs",
  authDomain: "cdrt-consult.firebaseapp.com",
  projectId: "cdrt-consult",
  storageBucket: "cdrt-consult.firebasestorage.app",
  messagingSenderId: "336348001361",
  appId: "1:336348001361:web:f60f32c3d49d7d0cc2b470",
  measurementId: "G-R8VQL54EM1",
};

// Firebase client SDK must only run in the browser.
// During Next.js server-side rendering / static generation it must not be initialised.
const isBrowser = typeof window !== "undefined";

const app: FirebaseApp | null = isBrowser
  ? getApps().length === 0
    ? initializeApp(firebaseConfig)
    : getApps()[0]
  : null;

export const db: Firestore = isBrowser && app
  ? getFirestore(app)
  : (null as unknown as Firestore);

export const storage: FirebaseStorage = isBrowser && app
  ? getStorage(app)
  : (null as unknown as FirebaseStorage);

export const auth: Auth = isBrowser && app
  ? getAuth(app)
  : (null as unknown as Auth);

export default app;

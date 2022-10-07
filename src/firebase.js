import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhk-CH2eGuDvhkHkOCN-2-cCC6iM4IuJU",
  authDomain: "clone-c3519.firebaseapp.com",
  projectId: "clone-c3519",
  storageBucket: "clone-c3519.appspot.com",
  messagingSenderId: "841370758574",
  appId: "1:841370758574:web:43b9fbf6c69e4a070eec3f",
  measurementId: "G-ZF1EJSVG92"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {db, auth};


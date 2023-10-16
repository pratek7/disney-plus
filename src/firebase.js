import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyATZjMhgpGKQMg8tnj3OM2ReH1GFrvXSBc",
  authDomain: "disney-d51eb.firebaseapp.com",
  projectId: "disney-d51eb",
  storageBucket: "disney-d51eb.appspot.com",
  messagingSenderId: "1005303529888",
  appId: "1:1005303529888:web:df11ebfb47bb7f22b664c5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
export default db;

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAP5X8bBRmMTDjH5oKkUOP0XvCWb5dG8_Y",
  authDomain: "netflix-clone-259b9.firebaseapp.com",
  projectId: "netflix-clone-259b9",
  storageBucket: "netflix-clone-259b9.appspot.com",
  messagingSenderId: "122818793269",
  appId: "1:122818793269:web:38f50f4d5568ff5782867c"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(firebaseApp);
const auth = firebase.auth(firebaseApp);

export { auth };
export default db;
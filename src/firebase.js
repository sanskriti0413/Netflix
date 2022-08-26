import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBdDJsFLqxpagwp5gsahlZTu9CWxKupVCA",
    authDomain: "netflix-clone-b01a7.firebaseapp.com",
    projectId: "netflix-clone-b01a7",
    storageBucket: "netflix-clone-b01a7.appspot.com",
    messagingSenderId: "803190464207",
    appId: "1:803190464207:web:68be1c4ec26964adb2e1ba"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

// firestore - is actually the realtime database its allow use to keep trak of what the user subscription

const auth = firebase.auth();

export { auth };
export default db;
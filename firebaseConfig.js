import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAlelRR56CZQAUEpwghvnk9UYfGv94_Aks",
    authDomain: "enverx-5318b.firebaseapp.com",
    projectId: "enverx-5318b",
    storageBucket: "enverx-5318b.appspot.com",
    messagingSenderId: "547370457256",
    appId: "1:547370457256:web:6d567a606cc2a185884a9d",
    measurementId: "G-FCEYVZMTS4"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut };

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    sendEmailVerification,
    RecaptchaVerifier
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDYAdDv85ltd3Or084edBleHqOFva0bPMs",
    authDomain: "todo-list-16038.firebaseapp.com",
    projectId: "todo-list-16038",
    storageBucket: "todo-list-16038.appspot.com",
    messagingSenderId: "597510565115",
    appId: "1:597510565115:web:266c5c9388235ea39e545e",
    measurementId: "G-GRY6BYCT1E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
    auth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    sendEmailVerification,
    RecaptchaVerifier
}

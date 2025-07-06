// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4-wqB1UX7MenEruxi71n5DvdWaLUxKOU",
    authDomain: "sre-project-d970b.firebaseapp.com",
    projectId: "sre-project-d970b",
    storageBucket: "sre-project-d970b.firebasestorage.app",
    messagingSenderId: "249839222358",
    appId: "1:249839222358:web:4ddc88bed07d9f2e9145f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDDrMkym70ImXfQ6HoA80Xwy9gJajDcCW0",
    authDomain: "eatly-d7a60.firebaseapp.com",
    projectId: "eatly-d7a60",
    storageBucket: "eatly-d7a60.firebasestorage.app",
    messagingSenderId: "967803050245",
    appId: "1:967803050245:web:8df2dfaef4eb71d1cbbf6c",
    measurementId: "G-6WFTRHW6FD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

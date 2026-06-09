import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDETZhSw_zviXcZCmax2xnJzYuog8p65kk",
  authDomain: "certificate-c9f15.firebaseapp.com",
  projectId: "certificate-c9f15",
  storageBucket: "certificate-c9f15.firebasestorage.app",
  messagingSenderId: "980916802641",
  appId: "1:980916802641:web:97058a8f3d41ec45d5d470",
  measurementId: "G-TKW764QWNY"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
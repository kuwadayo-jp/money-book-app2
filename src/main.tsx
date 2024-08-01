import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDcTNA7HXmRXtjKS8vuI_TpHRYl76HEVkI",
  authDomain: "money-book-app2.firebaseapp.com",
  projectId: "money-book-app2",
  storageBucket: "money-book-app2.appspot.com",
  messagingSenderId: "67727351746",
  appId: "1:67727351746:web:f3c581dbbc16d86cac005b",
  measurementId: "G-YJ57E1D62V"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

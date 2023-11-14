import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB5Ltv5dNhQWeFobmA-qcJ2EbTRzGLFdyA",
  authDomain: "reactentregafinal-54c5c.firebaseapp.com",
  projectId: "reactentregafinal-54c5c",
  storageBucket: "reactentregafinal-54c5c.appspot.com",
  messagingSenderId: "393787483924",
  appId: "1:393787483924:web:9d9ecabfbd9413a9058401",
};
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

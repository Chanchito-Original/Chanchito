import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import SettingsPage from "./SettingsPage";
import ProfilePage from "./ProfilePage";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { register } from "./serviceWorkerRegistration"; // Adjust the path as needed

// Import serviceWorkerRegistration from the correct path
import { register as registerServiceWorker } from "./serviceWorkerRegistration"; // Adjust the path accordingly

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/perfil" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Register the service worker
registerServiceWorker();
register();

import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client

import React from "react";
import ReactDOM from "react-dom"; // Import ReactDOM

import App from "./App.jsx";
// import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

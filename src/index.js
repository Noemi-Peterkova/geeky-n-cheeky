// The entry point for the app, rendering App.js.

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Main App component
import "./index.css"; // Global CSS styles



// Create a React root and render the App component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
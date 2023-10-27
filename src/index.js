import React from "react";
import ReactDOM from "react-dom/client";

import "./general.css";
import "./CSS/header.css";
import "./CSS/cta-section.css";
import "./CSS/about-section.css";
import "./CSS/services-section.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

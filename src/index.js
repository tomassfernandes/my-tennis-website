import React from "react";
import ReactDOM from "react-dom/client";

import "./general.css";
import "./CSS/header.css";
import "./CSS/cta-section.css";
import "./CSS/about-section.css";
import "./CSS/services-section.css";
import "./CSS/classes-section.css";
import "./CSS/club-section.css";
import "./CSS/pricing-section.css";
import "./CSS/footer.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { register } from "swiper/element/bundle";

import App from "./App";

register();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

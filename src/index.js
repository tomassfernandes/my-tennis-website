import React from "react";
import ReactDOM from "react-dom/client";

import "./general.css";

import "./CSS/CSS/HomePage.css/header.css";
import "./CSS/CSS/HomePage.css/cta-section.css";
import "./CSS/CSS/HomePage.css/about-section.css";
import "./CSS/CSS/HomePage.css/services-section.css";
import "./CSS/CSS/HomePage.css/club-section.css";
import "./CSS/CSS/HomePage.css/pricing-section.css";
import "./CSS/CSS/HomePage.css/footer.css";

import "./CSS/CSS/ClassesPage.css/classes-section.css";

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

import React from "react";
import ReactDOM from "react-dom/client";

import "./general.css";

import "./CSS/HomePage.css/header.css";
import "./CSS/HomePage.css/cta-section.css";
import "./CSS/HomePage.css/about-section.css";
import "./CSS/HomePage.css/services-section.css";
import "./CSS/HomePage.css/club-section.css";
import "./CSS/HomePage.css/pricing-section.css";
import "./CSS/HomePage.css/footer.css";

import "./CSS/ClassesPage.css/classes-section.css";

import "./CSS/ClassesPage.css/classes-section.css";

import "./CSS/GalleryPage.css/gallery-page.css";

import "./CSS/ContactPage.css/contact-page.css";

import "./CSS/queries/HomePage-queries.css";

import "./CSS/queries/ClassesPage-queries.css";

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

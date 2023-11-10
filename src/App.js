import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Home Page/HomePage";
import ClassesPage from "./Classes Page/ClassesPage";
import GalleryPage from "./Gallery Page/GalleryPage";
import ContactPage from "./Contact Page/ContactPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;

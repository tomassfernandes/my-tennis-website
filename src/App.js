import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Home Page/HomePage";
import ClassesPage from "./Classes Page/ClassesPage";
import GalleryPage from "./Gallery Page/GalleryPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
}

export default App;

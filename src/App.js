import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Home Page/HomePage";
import ClassesPage from "./Classes Page/ClassesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" exact element={<HomePage />} />
        <Route path="/classes" element={<ClassesPage />} />
      </Routes>
    </Router>
  );
}

export default App;

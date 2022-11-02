import React, { useEffect, useState } from "react";

import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage2 from "./Pages/HomePage2/HomePage2";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={[<HomePage />]} />
          <Route path="/home" element={[<HomePage2 />]} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

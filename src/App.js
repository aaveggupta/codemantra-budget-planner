import React, { useEffect, useState } from "react";

import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";

const App = () => {
  useEffect(() => {
    console.log(window.location);
  }, []);

  return (
    <div>
      <HomePage />
    </div>
  );
};

export default App;

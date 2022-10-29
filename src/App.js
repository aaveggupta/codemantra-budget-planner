import React, { useEffect, useState } from "react";

import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";

const App = () => {
  useEffect(() => {
    const url = new URL(
      "https://www.googletagmanager.com/gtm.js?id=GTM-NJGNR68"
    );
    const proxyUrl = new URL(
      `${window.location.hostname}/proxy/${url
        .toString()
        .replace(/(^\w+:|^)\/\//, "")}`
    );
    console.log(proxyUrl);
  }, []);

  return (
    <div>
      <HomePage />
    </div>
  );
};

export default App;

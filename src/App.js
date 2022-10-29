import React, { useEffect, useState } from "react";

import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";

const App = () => {
  // useState(() => {
  //   const url = new URL(
  //     "https://www.googletagmanager.com/gtm.js?id=GTM-NJGNR68"
  //   );
  //   const proxyUrl = new URL(window.location.hostname);
  //   proxyUrl.searchParams.append("url", url.href);
  //   console.log(url.href);
  //   console.log(proxyUrl);
  // }, []);

  return (
    <div>
      <HomePage />
    </div>
  );
};

export default App;

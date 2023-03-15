import "./styles/index.css";
/* Package pour la création/gestion des routes*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import SpecificMovie from "./pages/SpecificMovie";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/my-api-project" element={<Home />} />
          <Route path="/my-api-project/:id" element={<SpecificMovie />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;

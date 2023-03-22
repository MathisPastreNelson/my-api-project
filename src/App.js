import "./styles/index.css";
/* Package pour la création/gestion des routes*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import SpecificMovie from "./pages/SpecificMovie";
import Horror from "./pages/Horror";
import Comedy from "./pages/Comedy";
import General from "./pages/General";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/my-api-project" element={<Home />} />
          <Route path="/my-api-project/:id" element={<SpecificMovie />} />
          <Route path="/my-api-project/horror/*" element={<Horror />} />
          <Route path="/my-api-project/comedy/*" element={<Comedy />} />
          <Route path="/my-api-project/general/*" element={<General />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;

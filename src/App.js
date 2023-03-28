import "./styles/index.css";
/* Package pour la création/gestion des routes*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import SpecificMovie from "./pages/SpecificMovie";
import Horror from "./pages/Horror";
import Comedy from "./pages/Comedy";
import Action from "./pages/Action";
import Animation from "./pages/Animation";
import Thriller from "./pages/Thriller";
import ScienceFiction from "./pages/ScienceFiction";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/my-api-project" element={<Home />} />
          <Route path="/my-api-project/:id" element={<SpecificMovie />} />
          <Route path="/my-api-project/horror" element={<Horror />} />
          <Route path="/my-api-project/comedy" element={<Comedy />} />
          <Route path="/my-api-project/action" element={<Action />} />
          <Route path="/my-api-project/animation" element={<Animation />} />
          <Route path="/my-api-project/thriller" element={<Thriller />} />
          <Route path="/my-api-project/sf" element={<ScienceFiction />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
